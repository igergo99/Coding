export default function GetItem(props){
    return (
        <div>
            {props.getItem(props.array,props.selectedIndex)}
        </div>
    )
}