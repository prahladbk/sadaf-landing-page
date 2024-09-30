import About from './components/about.container';
import NavbarSimple from './components/navbar.container';

function App() {
  return (
    <div className="App h-screen bg-[#E9E9FF]">
      <NavbarSimple/>
      <About />
    </div>
  );
}

export default App;
