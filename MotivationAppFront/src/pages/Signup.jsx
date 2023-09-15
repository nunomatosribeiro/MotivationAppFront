import { useState } from 'react';
import '../Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { apiBaseUrl } from "../config";
import CloudinaryUpload from "../components/CloudinaryUpload";
 const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");

    const nav = useNavigate();
  
    const handleSignup = async (e) => {
      e.preventDefault();
  
      try {
        const res = await axios.post(
          `${apiBaseUrl}/auth/signup`,
  
          { username, email, password, image }
        );
        {
          setUsername("");
          setEmail("");
          setPassword("");
          setImage("");
        }
  
        console.log("here is the signup response", res.data);
        nav("/Login");
      } catch (error) {
        console.error(error);
      }
    };
   const updatePhoto = (updatedMedia) => {
        setImage(updatedMedia[0]);
      }; 
    return ( 
        <div className='firstDiv'>
        <div className='signupContainer'>
            <h1>Signup here!</h1>
            <form onSubmit={handleSignup} className='formStyle'>
        <input
          className='inputStyle'
          type="text"
          value={username}
          required
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Username"
        />
        <input
          className='inputStyle'
          type="email"
          value={email}
          required
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          placeholder="Email"
        />
        <input
          className='inputStyle'
          type="password"
          value={password}
          required
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          placeholder="Password"
        />
        
        <CloudinaryUpload allowMultiple={false} initialMedia={[]} onMediaUpdated={updatePhoto} />

        <button className='buttonStyle' type="submit">
          Signup
        </button>
      </form>
      </div>
      </div>
     );
}
 
export default Signup;