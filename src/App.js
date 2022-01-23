import { Box } from "@chakra-ui/react"
import Navbar from "./components/Navbar";
import Header from "./components/Header"
import About from "./components/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";

function App() {
  return (
    <Box bg="white" color="black">
      <Header />
      <Navbar />
      <About />
      <Education />
      <Skills />
      <MyProjects />
      <Footer />
    </Box>
  );
}

export default App;
