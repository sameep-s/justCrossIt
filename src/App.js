import { Route, Routes } from 'react-router-dom';
import { Archives, Login, Notes, Profile, Signup, Trash } from './pages/index';
import { LandingPage, RequireAuth } from "./components";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />


        <Route path="/profile" element={<RequireAuth> <Profile /></RequireAuth>} />
        <Route path="/notes" element={<RequireAuth> <Notes /></RequireAuth>} />
        <Route path="/archives" element={<RequireAuth> <Archives /></RequireAuth>} />
        <Route path="/trash" element={<RequireAuth> <Trash /></RequireAuth>} />
      </Routes>
    </>
  );
}

export default App;
