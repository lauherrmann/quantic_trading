import logo from '../imgs/logo.png';

function Logo({ size }) {
    return (
        <a href="/">
            <img src={logo} alt="Quantic Trading" width={size} length={'auto'}/>
        </a>
    );
  }
  
  export default Logo;