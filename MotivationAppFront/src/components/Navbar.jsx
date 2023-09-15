import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/Auth.context'
import UserImage from './UserImage'
import '../Navbar.css'


const Navbar = () => {
  // Access isLoggedIn state from the AuthContext
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext)
const nav = useNavigate()
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to={'/'}>
          Motivation App
        </Link>
        

        {isLoggedIn ? (
          <>
          <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav  ml-auto'>
                <li className='nav-item'>
                  <Link className='nav-link active' aria-current='page' to={'/mainpage'}>
                    Main Page
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/profile'}>
                    Profile
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to={'/Users'}>
                    Check results
                  </Link>
                </li>
                
              </ul>
            </div>
            <span className='navbar-text'>
              <div className='userStatus'>
                <UserImage user={user} width='30'   />
                <button onClick={logOutUser}>Logout</button>
              </div>
            </span>
            
          </>
        ) : (
          
          <div>
            <div className='userStatus'>
              <Link to={'/Login'}>
                <button >Login</button>
              </Link>
              <Link to={'/Signup'}>
                <button >Signup</button>
              </Link>
          </div>
          
        </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar