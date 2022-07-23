import { Banner } from "./components/styles/Banner.styled";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


function App() {
  return (
    <>
    <Banner>
      <Navbar />
      <Hero />
    </Banner>
    </>
  );
}

export default App;
