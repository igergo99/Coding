import { useState } from "react";
import './imgToggle.css';
export default function ImgShow(){
    const [toggle, setToggle]=useState(false)
    const clickHandler= function (){
        setToggle(prevToggleValue=>!prevToggleValue)
    }
    return(
        <div>
            
            <button onClick={clickHandler}>Change Visibility</button>
            {toggle&& <img src="https://placekitten.com/200/200"></img>}
        </div>
    )

}