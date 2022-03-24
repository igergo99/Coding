import{ useState }from "react"

export default function CreateStates(){
    const [state, setState]= useState('kezdo ertek')

    console.log(state, setState)
    return (
        <div>
            Hello State {state}
        </div>
    )
}