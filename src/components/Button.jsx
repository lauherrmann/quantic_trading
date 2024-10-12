import className from "classnames";
import { twMerge } from 'tailwind-merge';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ 
    children,
    primary,
    secondary,
    ...rest}) {
    
    // Para um objeto do Button, podemos passar as caracteristicas dele.
    const classes = twMerge ( 
        className(rest.className, {
        'px-3 py-1 rounded-md bg-primary_purple hover:bg-secondary_purple text-white cursor-pointer relative': primary,
        'px-3 py-2 rounded-md shadow-2xl bg-primary_purple hover:bg-secondary_purple text-white text-lg cursor-pointer relative mt-5 mr-auto': secondary,
    }));

    return (
        <Link {...rest} className={classes}>{children}</Link>
    );
}

Button.propTypes = {
    children: PropTypes.string,
};

export default Button;