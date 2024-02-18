import Layout from "./components/Layouts/Layout.js";
import About from "./pages/About/About.js";
import Contact from "./pages/Contact/Contact.js";
import Education from "./pages/Education/Education.js";
import Projects from "./pages/Projects/Projects.js";
import Techstack from "./pages/Techstack/Techstack.js";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext.js";
import Tada from 'react-reveal/Tada';
import MobileNav from "./components/MobileNav/MobileNav.js";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App () {
  const [theme] = useTheme()
  return (
   <>
   <div id={theme}>
   <ToastContainer />
    <MobileNav />
      <Layout />
      <div className="container">
      <About />
      <Education />
      <Techstack />
      <Projects />
      <Contact />
    </div>
    <div className="footer pb-3 ms-3">
      <Tada>
      <h4 className="text-center">
        Made with ❤️ Madhuri &copy; 2024
      </h4>
      </Tada>
    </div>
    </div>
    <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  )
}

export default App;


// aur kuch nahi dekh raha hai
// image hi nhi aa rha y dekhao