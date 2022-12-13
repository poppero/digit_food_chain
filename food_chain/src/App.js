import './App.css';
import ImageBackground from './HomePage/ImageBackground';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import {UserProvider} from './Api/ContextApi';

function App() {
  return (
    <div className="App bg-black overflow-x-hidden">
   
    <Router>
    <UserProvider>
      <Routes>
        <Route path="/" element={<ImageBackground />} />
        <Route path="/login" element={<LoginPage />} />
    
      </Routes>
      </UserProvider>
    </Router>
    

    </div>
  );
}

export default App;
