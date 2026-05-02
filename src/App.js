import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import { ThemeProvider } from './context/ThemeContext';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Experience />
      <Projects/>    
    </ThemeProvider>
  );
}

export default App;
