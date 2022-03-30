import { useState } from "react"
import PlayerO from "./player_O.png" 
import PlayerX from "./player_X.png" 
export default function Header (props){


    return(
        <div className="header">
        <div><img src={props.user==='X'? PlayerX:PlayerO}></img></div>
        <div className="output">
        <p> Next player: {props.winner ? `-` : props.user}</p>
        <p> Winner: {props.winner}</p>
      </div></div>
    )
}