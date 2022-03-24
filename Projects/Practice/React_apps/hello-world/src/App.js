import Parag from'./components/Paragraphs';
import Title from'./components/Title';
import Image from './components/Image';
import './App.css';
import AnimalCard from './components/AnimalCard';
import Array from './components/Array';
import DateComponent from './components/DateComponent';
import GetItem from './components/GetItem';
function App() {
  const dateNow=()=>Date.now()
  const dateFunc=()=>new Date(Date.now()).toString()
  const array =['alma',1,2,3,4,"szaisztoc"]
  const getItem=(array,i)=>array[i]
  console.log(dateFunc())
  return (
    <div className="App">
      <Title />
      <Image />
      <Parag />
      <AnimalCard obj={{
        id: 1,
        name:"Béla",
        age:32,
        pedigree:true,
        species:"cica",
        other:true
      }}
       />
      <Array array={['jóska','pista','mari','géza','béla']} winners="winners" losers="losers"/>
      <DateComponent date={dateNow}  dateFunc={dateFunc} />
      <GetItem selectedIndex={0} getItem={getItem} array={array} />
    </div>
  );
}

export default App;
