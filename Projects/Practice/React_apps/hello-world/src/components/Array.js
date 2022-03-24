export default function Array(props){
    return(
        <div>
            {props.array.map((e,index)=>{
                if(index===0||index===1||index===2){
                    return <>
                    <strong key ={index} className={props.winners}>{`${index+1}. helyezés: ${e}`}</strong>
                    <br ></br>
                    </>
                }else{
                    return <>
                    <span key ={index} className={props.losers}>{`${index+1}. helyezés: ${e}`}</span> 
                    <br ></br>
                    </>
                }
            })}
            
        </div>
    )
}