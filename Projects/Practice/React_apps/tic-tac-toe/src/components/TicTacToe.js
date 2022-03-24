import { useEffect, useState } from 'react';
const TicTacToe = () => {
  const [user, setUser] = useState('X');
  const [position, setPosition] = useState(
    [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]
  )
  const [winner, setWinner] = useState("")

  const clickHandler = (rowIndex, columnIndex) => {
    return (event) => {
      if (!winner) {
        if (!position[rowIndex][columnIndex]) {
          if (user === "X") {
            setPosition(
              prev => {
                const newarr = [...prev]
                newarr[rowIndex][columnIndex] = "X"
                
                return newarr
              }
            )
            setUser("O")
          }
          if (user === "O") {
            setPosition(
              prev => {
                const newarr = [...prev]
                newarr[rowIndex][columnIndex] = "O"
                
                return newarr
              }
            )
            setUser("X")
          }
        }
      }
    }
  };
  useEffect(() => {
    position.map((outeritem, outerindex) => {
      if (outeritem[0] && outeritem[0] === outeritem[1] && outeritem[0] === outeritem[2]) {
        setWinner(outeritem[0])
      }
      outeritem.map((inneritem, innerindex) => {
        if (position[outerindex][innerindex] && position[0][innerindex] === position[1][innerindex] && position[0][innerindex] === position[2][innerindex]) {
          setWinner(outeritem[innerindex])
        }
        if (position[outerindex][innerindex] && position[0][0] === position[1][1] && position[0][0] === position[2][2]) {
          setWinner(position[0][0])
        }
        if (position[outerindex][innerindex] && position[0][2] === position[1][1] && position[0][2] === position[2][0]) {
          setWinner(position[0][2])
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
    setWinner("")
    setUser("X")
  }
  return (
    <div className="container">
      <div className="output">
        <p> Next player: {winner ? `-` : user}</p>
        <p> Winner: {winner}</p>
      </div>
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