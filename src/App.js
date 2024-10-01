import Footer from './Components/Footer';
import Hearder from './Components/Hearder';
import HomePage from './Components/HomePage';
import ContactUs from './Components/Project/ContactUs';
import Projects from './Components/Project/Projects';
import Skills from './Components/Skills';

export default function App() {
  return (
    <div>
      <Hearder />
      <HomePage />
      <Projects />
      <Skills />
      <ContactUs />
      <Footer />
    </div>
  );
}
