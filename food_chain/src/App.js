import './App.css';
import ImageBackground from './HomePage/ImageBackground';
import Main from './HomePage/Main';
import NavBar from './Navigation/NavBar';
import Navigation from './Navigation/Navigation';
import SearchBar from './Navigation/SearchBar';

function App() {
  return (
    <div className="App bg-black overflow-x-hidden">
      <Navigation />
      <Main />
      {/* <ImageBackground /> */}
    </div>
  );
}

export default App;
