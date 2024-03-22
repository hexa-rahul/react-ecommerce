import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import Header from './components/Header';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/add-product" element={<AddProduct />}></Route>
          <Route path="/update-product" element={<UpdateProduct />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
