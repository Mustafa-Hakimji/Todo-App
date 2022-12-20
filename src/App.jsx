import Footer from './Components/Footer';
import About from './Components/Abut';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />



      {/* <Footer/> */}
    </div>
  );
}

export default App;