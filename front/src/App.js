
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home Page</Link>
        <Link to="/create-post">Create A Post</Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/post/:id' element={<Post/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
