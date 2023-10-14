import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About"
import CV from './pages/CV';
import IntroductionLetter from './pages/IntroductionLetter';
import Leadership from './pages/Leadership';
import Miscellaneous from './pages/Miscellaneous';
import 'bootstrap/dist/css/bootstrap.css';
import Projects from './pages/Projects';


function App() {
  return (
      <Routes>
        <Route path = "/" element = {<About/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/IntroductionLetter" element = {<IntroductionLetter/>}/>
        <Route path = "/CV" element = {<CV/>}/>
        <Route path = "/Projects" element = {<Projects/>}/>
        <Route path = "/Leadership" element = {<Leadership/>}/>
        <Route path = "/Miscellaneous" element = {<Miscellaneous/>}/>
      </Routes>
  );
}

export default App;
