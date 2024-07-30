import "./App.css";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Woman from "./Woman";
import Services from "./Services";
import Work from "./Work";
import Hire from "./Hire";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Idea from "./Idea";
import Tape from "./Tape";
import Blog from "./Blog";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Work />
      <Hire />
      <Portfolio />
      <Testimonials />
      <Idea />
      <Tape />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
