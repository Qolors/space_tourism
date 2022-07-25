import { Banner } from "../components/styles/Banner.styled";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";



const Home = () => {
    return (
      <div>
      <Banner>
        <Navbar />
        <Hero />
      </Banner>
      </div>
    );
  }
  
  export default Home;