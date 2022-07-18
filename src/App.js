 
 
 
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import {BrowserRouter as Router,   Routes,   Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      
      <Routes>
        <Route path='/' element={  <Home/>} />
        <Route path='/detail/:id' element={ <Detail/> }/>
        <Route path='/login' element={ <Login/>} />
                      
      </Routes>

    
      </Router>
    
    </div>
  );
}

export default App;

 
// Exteral Packages

// Setup Tailwind with React
// npm install --save styled-components
// npm i react-slick
//npm i react-redux
// npm i @reduxjs/toolkit
// npm install @reduxjs/toolkit
// npm i react-router-dom
// npm install firebase