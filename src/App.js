import {Routes, Route} from 'react-router-dom';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';


function App() {
  return (
    <div className="container">
      <Routes>
          <Route path='/' element={<Posts></Posts>}></Route>
          <Route path='createPost' element={<CreatePost></CreatePost>}></Route>
      </Routes>
     </div>
  );
}

export default App;
