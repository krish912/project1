import './App.css';
import Home from './pages/home';
import Contact from './pages/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Demo from './pages/login';
import { Dogs } from './pages/dogs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Dogs' element={<Dogs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<Contact />}></Route>
          <Route path='/ngo' element={<Contact />}></Route>
          <Route path='/donate' element={<Contact />}></Route>
          <Route path='/login' element={<Demo />}></Route>
        </Routes>



      </div>
    </BrowserRouter>
  );
}

export default App;
