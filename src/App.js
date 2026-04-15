import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Experience />
      {/* ... other sections */}
    </ThemeProvider>
  );
}

export default App;
