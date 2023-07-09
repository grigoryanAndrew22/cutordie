import { Footer } from '../../components/footer/Footer';
import { NavBar } from '../../components/navbar/Navbar';
import { TopSection } from '../../components/top-section/TopSection';
import { HomeStyles } from './Home.styles';

export const Home = () => {
  return (
    <div className='wrapper'>
      <NavBar />
      <TopSection />
      <Footer />
    </div>
  );
};
