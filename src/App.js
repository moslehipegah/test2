import './App.css';
import Footer from './component/Footer';
import Content from './component/Content';
import Content2 from './component/Content2';
import Content3 from './component/Content3';
import axios from 'axios'
import { useState,useEffect } from 'react';
import Header from './component/Header';
import Menu from './component/Menu';
import { Routes, Route, Link } from "react-router-dom";


function App() {
//   const [data, setData] = useState([]);


//  useEffect(() => {
//   fetch("https://ganjgah.ir/api/ganjoor/hafez/faal")
//       .then((res) => res.json())
//       .then((data) => {
//           console.log(data);
//           setData(data.recitations);
//       })

// }, [])
  return (
    <div className="App">
       <Header />
      <Content />
      <Content2 />
      <Content3 />
      <Footer />
          <Link to="/Content">hiiii</Link>



   </div>
  );
}

export default App;
