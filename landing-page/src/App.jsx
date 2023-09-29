import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home/components/home";
import About from './about/components/about';
import Faq from "./faq/components/faq"
import Affiliate from './affiliate/components/affiliate';
import Contact from './contact/components/contact';

function App() {

    return( <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/affiliate" element={<Affiliate/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    );
}

export default App;