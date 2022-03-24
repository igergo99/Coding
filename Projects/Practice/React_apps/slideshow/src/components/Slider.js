import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faBacterium } from '@fortawesome/free-solid-svg-icons';

export default function Slider(props){
    const[index, setIndex]=useState(props.defaultIndex)

    const onClickLeft = (event) => {
        if (index > 0) {
          setIndex(index-1)
        }
        else{
            setIndex(props.images.length-1)
        }
      }
      const onClickRight = (event) => {
        if (index < props.images.length-1) {
          setIndex(index+1)
        }
        else{
            setIndex(0)
        }
      }
      const dotClickHandler=(i)=>{
        return (event)=>{
            setIndex(i)
        }
      }
      const dotCreater =()=>{
          return props.images.map((e,i)=>{
            
            return <FontAwesomeIcon icon={faBacterium} onClick={dotClickHandler(i)}/>
          })
      }
      
    return (
        <>
            <FontAwesomeIcon icon={faChevronLeft} onClick={onClickLeft}/>
            <img src={props.images[index]}/>
            <FontAwesomeIcon icon={faChevronRight} onClick={onClickRight}/>
            <br/>
            <div>{dotCreater()}</div>
        </>
    )
}