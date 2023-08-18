import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Slidebar from './Components/Slidebar';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (<div className='overflow-hidden'>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Slidebar/>
      <Footer/>
    </Router>
  </div>

  )

}

export default App;
