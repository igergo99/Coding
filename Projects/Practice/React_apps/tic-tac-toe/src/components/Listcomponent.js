import React from 'react';

class List extends React.Component{
    constructor(props){
        super(props)

        this.state={
            filterText: ""
        }
    }
    onChangeHandler=(event)=>{
        this.setState({filterText:event.target.value})
    }
    
    render(){
       
        return (
            <>
            <input type="text" onChange={this.onChangeHandler}></input>
            <ul>
            {this.props.array.map((e,i)=>{
                if(e.toLowerCase().includes(this.state.filterText.toLowerCase())){
                    return <li key={i}>{e}</li>
                }else{
                    return null
                }
            })}
            
               
            </ul>
            </>
        )
    }
}
export default List