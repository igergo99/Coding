export default function AnimalCard(props){ 
    return(
        <>
    <div>
        Megakpott id: {props.obj.id}<br/>
        Megakpott név: {props.obj.name}<br/>
        Megakpott fajta: {props.obj.species}<br/>
        Megakpott kor: {props.obj.age}<br/>
        Megakpott törzskönyv: {String(props.obj.pedigree)}<br/>
        {props.obj.other&&<>Megkapott egyéb: {String(props.obj.other)}</>}
    </div>
    </>
    )

}
