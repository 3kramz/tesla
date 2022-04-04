import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './Components/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={ <Home></Home>}></Route>
      <Route path="home" element={ <Home></Home>}></Route>
      <Route path="reviews" element={<Reviews></Reviews>}></Route>
      <Route path="dashboard" element={<DashBoard></DashBoard>}></Route>
      <Route path="blogs" element={<Blog></Blog>}></Route>
      
      <Route path="*" element={ <NotFound></NotFound>}></Route>
      </Routes>
      

    </div>
  );
}

export default App;
