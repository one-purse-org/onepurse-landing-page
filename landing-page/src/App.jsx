import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home/components/home";
import About from './about/components/about';
import Faq from "./faq/components/faq"
import Affliate from './affliate/components/affliate';
import Contact from './contact/components/contact';

function App() {

    return( <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/affliate" element={<Affliate/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    );
}

export default App;