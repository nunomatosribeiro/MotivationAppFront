import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/Auth.context";
import { useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../config";
import CloudinaryUpload from "./CloudinaryUpload";
import UserImage from "./UserImage";

const UserCard = ({ user, isEditable }) => {
  const { logOutUser, updateUser } = useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [editedUser, setEditedUser] = useState({
    username: user.username,
    email: user.email,
    image: user.image,
  });
  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedUser({
      username: user.username,
      email: user.email,
      image: user.image,
    });
  };

  const handleSaveClick = async () => {
    setIsLoading(true);
    await handleUpdate();
    setIsLoading(false);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      console.log(editedUser);
      const tokenInStorage = localStorage.getItem("authToken");
      const request = await axios.put(`${apiBaseUrl}/users/`, editedUser, {
        headers: {
          Authorization: `Bearer ${tokenInStorage}`,
        },
      });
      updateUser(request.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const tokenInStorage = localStorage.getItem("authToken");
      setIsLoading(true);
      await axios.delete(`${apiBaseUrl}/users/`, {
        headers: {
          Authorization: `Bearer ${tokenInStorage}`,
        },
      });
      setIsLoading(false);
      logOutUser();
      navigate("/");
    } catch (error) {
      console.error("Error deleting profile:", error);
      setIsLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const hasCloudinaryImage = user.image.split("/").length === 2;

  return (
    <div className="card">
      {isEditing ? (
        <CloudinaryUpload
          allowMultiple={false}
          initialMedia={hasCloudinaryImage ? [user.image] : []}
          onMediaUpdated={(updatedMedia) =>
            setEditedUser((prevUser) => ({
              ...prevUser,
              image: updatedMedia[0] ? updatedMedia[0] : "",
            }))
          }
        />
      ) : (
        <UserImage user={user} />
      )}
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              type="text"
              name="username"
              value={editedUser.username}
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="bootcamp"
              value={editedUser.bootcamp}
              onChange={handleChange}
            />
            <input
              type="text"
              name="graduationDate"
              value={editedUser.graduationDate}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <h3 className="user-name">{user.username}</h3>
            <p className="user-email">{user.email}</p>
            <p className="user-graduationDate">{formatDate(user.graduationDate)}</p>
          </>
        )}
        {isEditing ? (
          <>
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : isEditable ? (
          <>
            <button onClick={handleEditClick}>Edit</button>
            <br />
            <br />
            <button onClick={handleDelete}>Delete my account</button>
          </>
        ) : null}
      </div>
    </div>
  );
};
export default UserCard;
