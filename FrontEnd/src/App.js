import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import About from './Components/OtherComponents/About/About'
import Project from './Components/OtherComponents/Project/Project'
import Resume from './Components/OtherComponents/Resume/Resume'
import Feedback from './Components/OtherComponents/Feedback/Feedback'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  console.log(process.env.React_APP_Name);
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/feedback' element={<Feedback/>}/>

      </Routes>
      <Footer/>
    </Router>
    
    
  );
}

export default App;
