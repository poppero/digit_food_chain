import './App.css';
import ImageBackground from './HomePage/ImageBackground';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import {UserProvider} from './Api/ContextApi';
import { ProductProvider } from './Api/ProductsApi';

function App() {
  return (
    <div className="App bg-black overflow-x-hidden">
   
    <Router>
    <UserProvider>
      <ProductProvider>
      <Routes>
        <Route path="/" element={<ImageBackground />} />
        
         <Route path="/login" element={<LoginPage />} />
    
      </Routes>
      </ProductProvider>
      </UserProvider>
    </Router>
    

    </div>
  );
}

export default App;
