import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import WindowWidth from './components/WindowWidth';
import JsonPlaceholder from './components/JsonPlaceholder';
import Home from './components/Home';

const App = () => {

  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
    
    console.log(resourceType);

    return () => {
      console.log("This return acts as a clean up");
    }
  }, [resourceType]);

  useEffect(() => {
    window.addEventListener('resize', handleResize)

  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  return (
    <BrowserRouter>
      <div>

        <ul>
          <li><Link to='/window-width'>Window Width</Link></li>
          <li><Link to='/json-placeholder'>Json Placeholder</Link></li>
        </ul>
        
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/window-width' element={<WindowWidth getWidth={windowWidth} />} />
          <Route path='/json-placeholder' element={<JsonPlaceholder getResourceType={setResourceType} getItems={items}/>} />
        </Routes>
        
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
