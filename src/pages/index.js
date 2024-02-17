import Navbar from "@/components/NavBar/Navbar";
import { Layout } from "../layout/Layout";
import Hero from "@/components/Hero/Hero";
import Offercard from "@/components/offerscard/Offercard";
import WorldHotel from "@/components/hotels/WorldHotel";
import SaudiHotel from "@/components/saudiHotels/SaudiHotel";
import Giude from "@/components/giude/Giude";
import TheBest from "@/components/TheBest/TheBest";
import FooterBar from "@/components/FooterBar/FooterBar";


const Home = () => {
  return (
    <Layout>
      <Hero/>
      <Navbar/>
      <Offercard/>
      <WorldHotel/>
      <SaudiHotel/>
      <Giude/>
      <TheBest/>
      <FooterBar/>
    </Layout>
  );
};

export default Home;
