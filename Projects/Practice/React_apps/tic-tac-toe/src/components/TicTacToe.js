import { useEffect, useState } from 'react';
const TicTacToe = (props) => {
  
  const [position, setPosition] = useState(
    [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
  )
  

  const clickHandler = (rowIndex, columnIndex) => {
    return (event) => {
      if (!props.winner) {
        if (!position[rowIndex][columnIndex]) {
          if (props.user === "X") {
            setPosition(
              prev => {
                const newarr = [...prev]
                newarr[rowIndex][columnIndex] = "X"
                console.log(newarr)
                return newarr
              }
            )
            
            props.parentCallback("O")
          }
          if (props.user === "O") {
            setPosition(
              prev => {
                const newarr = [...prev]
                newarr[rowIndex][columnIndex] = "O"
                console.log(newarr)
                return newarr
              }
            )
            
            props.parentCallback("X")
          }
        }
      }
    }
  };
  useEffect(() => {
    position.map((outeritem, outerindex) => {
      if (outeritem[0] && outeritem[0] === outeritem[1] && outeritem[0] === outeritem[2]) {
        props.setWinnerCb(outeritem[0])
      }
      outeritem.map((inneritem, innerindex) => {
        if (position[outerindex][innerindex] && position[0][innerindex] === position[1][innerindex] && position[0][innerindex] === position[2][innerindex]) {
          props.setWinnerCb(outeritem[innerindex])
        }
        if (position[outerindex][innerindex] && position[0][0] === position[1][1] && position[0][0] === position[2][2]) {
          props.setWinnerCb(position[0][0])
        }
        if (position[outerindex][innerindex] && position[0][2] === position[1][1] && position[0][2] === position[2][0]) {
          props.setWinnerCb(position[0][2])
        }
      })
    })
  }, [position])
  const resetHandler = (event) => {
    event.preventDefault()
    setPosition([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])
    props.setWinnerCb("")
    props.parentCallback("X")
  }
  return (
    <div className="container">
      
      <div className="board">
        {position.map((row, rowIndex) =>
          row.map((column, columnIndex) => (
            <button
              type="button"
              className="button"
              onClick={clickHandler(rowIndex, columnIndex)}
              value={position[rowIndex][columnIndex]}
              key={`${rowIndex}_${columnIndex}`}
            >{position[rowIndex][columnIndex]}</button>
          ))
        )}
      </div>
      <button className='resetbtn' onClick={resetHandler}>Reset</button>
    </div>
  );
};
export default TicTacToe;