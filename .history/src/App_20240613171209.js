import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Technical from "./components/Technical";
import 
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>  
       <Technical/>
      <Portfolio/>
      <About/>
      <SocialLinks/>
    </div>
  );
}

export default App;