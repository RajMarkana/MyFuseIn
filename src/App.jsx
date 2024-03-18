import React,{useEffect} from 'react'
import HomePage from './pages/HomePage'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
     <HomePage/>
    </>
  )
}

export default App
