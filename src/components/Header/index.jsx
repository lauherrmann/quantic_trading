import "./header.css";
import Logo from "../Logo.jsx";
import Button from "../Button";

function Header() {
    return (
         <div className="header">
            <Logo size={'60px'} />
            <Button primary className="classes" to='/'>Cadastrar-se</Button>
        </div>
    )
}

export default Header;