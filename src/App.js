import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ExploreVidoes from './components/ExploreVidoes';
import RelatedContent from './components/RelatedContent';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />   
        <Route path="/home" element={<Home />} />   
        <Route path="/explore-videos" element={<ExploreVidoes />} />   
        <Route path="/related-content" element={<RelatedContent />} />  
      </Routes>
    </>
  );
}

export default App;
