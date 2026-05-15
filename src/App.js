import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
    </ThemeProvider>
  );
}

export default App;