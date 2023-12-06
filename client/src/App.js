import Components from './components/Components';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import './styles.css'

function App() {
  return (
    <div className="App">
      <Components />
      <div className='app-wrapper'>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
