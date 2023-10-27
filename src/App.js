import logo from './logo.svg';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import './App.css';

function App() {
  const name = 'Daniel Mutuku'
  return (
    <div className='bg-white'>
     <Navbar></Navbar>
     <Landing name={name}></Landing>
     <Footer></Footer>
    </div>
  );
}

export default App;
