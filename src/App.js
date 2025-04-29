import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Screen3 from './components/Screen3';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />   
        <Route path="/home" element={<Home />} />   {/* Home route */}
        <Route path="/screen3" element={<Screen3 />} />   {/* ExploreVideos route */}
      </Routes>
    </>
  );
}

export default App;
