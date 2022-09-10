import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About'
import NoteState from './Context/notes/NoteState'
import Addnote from './Components/Addnote';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/add' element={<Addnote/>} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
            </Routes>
          </div>
        </Router>
      </NoteState>

    </>
  );
}

export default App;
