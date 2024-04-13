import './App.css';
import Landingpage from './components/LandingPage'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="">
      <ParallaxProvider>
        <Landingpage />
        {/* <ScrollAnimation/> */}
      </ParallaxProvider>
    </div>
  );
}

export default App;
