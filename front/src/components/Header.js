import './App.css';
import { BrowserRouter as Link } from "react-router-dom";


function App() {
  return (
    <div >
        <Link to="/">Home Page</Link>
        <Link to="/create-post">Create A Post</Link>
    </div>
  );
}

export default Header;
