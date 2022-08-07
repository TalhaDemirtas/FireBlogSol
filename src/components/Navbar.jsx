import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logocw from '../assets/boot.png';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { AuthContext } from '../contexts/AuthContext';
import { logOut } from '../helpers/firebase';

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <img src={Logocw} alt="cwLogo" onClick={() => navigate('/')} />
          <h3 className="navbar-brand" onClick={() => navigate('/')}>
            SH*T BLOG
          </h3>

          <div className="d-flex text-white align-items-center ">
            {currentUser ? (
              <>
                <DropdownButton id="dropdown-item-button" title="{currentUser}">
                  <Dropdown.Item
                    as="button"
                    onClick={() => navigate('/profile')}
                  >
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item as="button" onClick={() => logOut}>
                    Logout
                  </Dropdown.Item>
                </DropdownButton>
              </>
            ) : (
              <>
                <DropdownButton id="dropdown-item-button" title="Profile">
                  <Dropdown.Item as="button" onClick={() => navigate('/login')}>
                    Login
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    onClick={() => navigate('/register')}
                  >
                    Register
                  </Dropdown.Item>
                </DropdownButton>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
