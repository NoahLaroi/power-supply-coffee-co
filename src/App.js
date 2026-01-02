import logo from './logo.svg';
import './App.css';
import Nav from "./Landing Page/Nav";
import Dashboard from './Landing Page/Dashboard';
import Footer from './Landing Page/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Dashboard/>
        <Footer />
      </header>
    </div>
  );
}

export default App;
