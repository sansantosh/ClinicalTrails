// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { Link, Outlet } from 'react-router';
import './navigation.styles.scss';


const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          {/* <CrwnLogo className='logo' /> */}
          <h1 className='logo'>CT</h1>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;