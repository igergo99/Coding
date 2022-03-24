import { useState, useEffect } from "react"; 


export default function Numbers (){
    const [sum,setSum]=useState(null)
    useEffect(()=>{
        fetch('https://fervent-clarke-e660e0.netlify.app/math.json')
        .then(response=>response.json())
        .then(json=> setSum(json.a+json.b))
    })

    return(
        <h1>Sum: {sum}</h1>
    )
}