import './App.css';
import {React,useEffect} from "react";
import Index from './Components/Index';
import AOS from'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
<div>
<div className="">
       
<Index/>
    </div>
    </div>
  );
}

export default App;
