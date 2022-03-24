import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ImageComponent from './components/ImageComponent';
import ProfilePicture from './components/ProfilePicture';
function App() {


  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
        <ImageComponent propsComponent={<ProfilePicture/ >}/>
    </div>
  );
}

export default App;
