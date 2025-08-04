import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Videos from "../components/Videos";

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Videos />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;
