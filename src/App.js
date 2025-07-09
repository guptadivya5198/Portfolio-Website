import Footer from './Components/Footer';
import Hearder from './Components/Hearder';
import HomePage from './Components/HomePage';
import ContactUs from './Components/Project/ContactUs';
import Projects from './Components/Project/Projects';
import Skills from './Components/Skills';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <Hearder />
      <HomePage />
      <Projects />
      <Skills />
      <ContactUs />
      <Footer />
      <ToastContainer />
    </div>
  );
}
