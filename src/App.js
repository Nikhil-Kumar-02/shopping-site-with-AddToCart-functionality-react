import { Route, Routes } from 'react-router-dom';
import './App.css';
import ItemCollection from './ItemCollection';
import Navbar from './Navbar';
import OpenCart from './OpenCart';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<ItemCollection></ItemCollection>}></Route>
        <Route path='/gotocart' element={<OpenCart></OpenCart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
