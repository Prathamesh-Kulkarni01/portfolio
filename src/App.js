
import './App.css';
import './common.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import Contacts from './Contacts';
import Work from './Work';
import Nav from './components/Nav';

function App(){
  return (
    <div className="App">
 <Nav></Nav>
      {/* <BrowserRouter>
      <Routes>
        <Nav></Nav>
        <Route exact path="/" element={<Home></Home>}/>
        
          <Route path="blogs" element={<Blog></Blog>} />
          <Route path="contact" element={<Contacts></Contacts>} />
          <Route path="work" element={<Work></Work>} />

     
      
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
