import React from "react";
import { CloudinaryContext, Image } from "cloudinary-react";
import { Link } from "react-router-dom";

const UserImage = ({ user, width = "150" }) => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const defaultImageUrl = `${
    import.meta.env.BASE_URL
  }images/userImage.png`;

  const hasCloudinaryImage = user && user.image && user.image.startsWith("image/");

  return (
    <Link className="nav-link" style={{width: 30}} to={`/Profile${("/"+(user && user._id))}`}>
      {hasCloudinaryImage ? (
        <div
          className={`user-profile-image  ${user.isAdmin ? "admin-border" : ""}`}
          style={{ minWidth: width + "px" }}
        >
          <CloudinaryContext cloudName={cloudName}>
              <div className="image-container">
                <Image
                  publicId={user.image.split("/")[1]}
                  width={width}
                  height={width}
                  crop="thumb"
                />
              </div>
          </CloudinaryContext>
        </div>
      ) : (
        <img
          src={defaultImageUrl}
          className="user-profile-image"
          alt="User image"
          /* style={{ width: width + "px" }} */
          style={{width: 30, height: 30, borderRadius: 400/ 2, margin: -5}} 
        />
      )}
    </Link>
  );
};
export default UserImage;