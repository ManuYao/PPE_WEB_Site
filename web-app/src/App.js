import './App.css';
import Menu from './components/Menu';
import ProjetGlobal from './components/ProjetGlobal';
import Footer from './components/Footer';
function App() {

  return (
    <div className="App">
      <header className="App-header">    
        <Menu />
        <ProjetGlobal />
        <Footer />
      </header>
    </div>
  );
}

export default App;
