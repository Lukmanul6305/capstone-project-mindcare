import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import AppLayout from './components/layout/AppLayout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

// Basic placeholder component for missing views
const Placeholder = ({ title }) => (
  <div className="p-8 flex flex-col items-center justify-center h-full text-center">
    <h2 className="text-3xl font-heading font-extrabold mb-4">{title}</h2>
    <p className="text-muted-foreground font-medium">This view is pending implementation.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkin" element={<Placeholder title="Daily Check-In" />} />
          <Route path="/stress-check" element={<Placeholder title="Cek Stress" />} />
          <Route path="/progress" element={<Placeholder title="Progress Tracker" />} />
          <Route path="/journaling" element={<Placeholder title="Journaling" />} />
          <Route path="/exercise" element={<Placeholder title="Exercise Tracker" />} />
          <Route path="/books" element={<Placeholder title="Book Recommendations" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
