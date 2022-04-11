import { NavLink } from "react-router-dom";

const ReferenceScreen = () => {
    return (
        <>
        <div>
            <div className="stackbox"><NavLink to='/reference/webshop'>Webshop</NavLink></div>
            <div className="stackbox"><NavLink to='/reference/pmachat'>PMA Chat</NavLink></div>
            <div className="stackbox"><NavLink to='/reference/valami'>Valami</NavLink></div>
        </div>
        </>
    )
};

export default ReferenceScreen;