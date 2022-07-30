import { Banner } from "../components/styles/Banner.styled";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Animated from "../components/Animated";



const Home = () => {
    return (
      <Animated>
      <div>
      <Banner>
        <Navbar />
        <Hero />
      </Banner>
      </div>
      </Animated>
    );
  }
  
  export default Home;