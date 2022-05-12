import { Route, Routes } from 'react-router-dom';
import { Archives, Notes, Profile, Trash } from './pages/index';
import { LandingPage } from "./components";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>

      <div className="App">
      </div>
    </>
  );
}

export default App;
