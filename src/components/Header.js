import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () =>
{

    const [buttonText,setButtonText] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button type="button" onClick={()=>{
                       
                       setButtonText(buttonText=="Login" ? "Logout" : "Login");

                    }}>{buttonText}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;