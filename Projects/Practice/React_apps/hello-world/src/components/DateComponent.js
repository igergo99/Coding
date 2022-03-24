export default function DateComponent (props){
    return(
        <div>
            { props.date() }<br />
            { props.dateFunc() }
        </div>
    )
}