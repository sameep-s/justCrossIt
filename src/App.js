import { Route, Routes } from 'react-router-dom';
import { Archives, Login, Notes, Profile, Signup, Trash } from './pages/index';
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
