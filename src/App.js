import logo from './logo.svg';
import './App.scss';
import {Button} from 'react-bootstrap';
import Header from './Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
