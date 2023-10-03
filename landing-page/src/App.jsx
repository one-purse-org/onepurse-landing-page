import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./home/components/home";
import About from './about/components/about';
import Faq from "./faq/components/faq"
import Affiliate from './affiliate/components/affiliate';
import Contact from './contact/components/contact';
import PrivacyPolicy from './privacyPolicy/privacyPolicy';
import TermsOfUse from './termsOfUse/termsOfUse';

function App() {

    return( <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/affiliate" element={<Affiliate/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/terms-of-use' element={<TermsOfUse/>}/>
      </Routes>
    </Router>
    );
}

export default App;