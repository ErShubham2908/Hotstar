import ContextApi from "./Components/ContextApi";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
        <NavBar />
        <Slider />
        <ContextApi >
          <Home />
        </ContextApi>
    </>
  );
}

export default App;
