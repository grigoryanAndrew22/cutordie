import { BlotSection } from '../../components/blot-section/blotSection';
import { BottomSection } from '../../components/bottom-section/BottomSection';
import { Footer } from '../../components/footer/Footer';
import { NavBar } from '../../components/navbar/Navbar';
import { Offer } from '../../components/offer/Offer';
import { TopSection } from '../../components/top-section/TopSection';
import { HomeStyles } from './Home.styles';

export const Home = () => {
  return (
    <div className='wrapper'>
      <NavBar />
      <TopSection />
      <BlotSection />
      <Offer flexDirection={'row'} />
      <Offer flexDirection={'row-reverse'} />
      <Offer flexDirection={'row'} />
      <BottomSection />
      <Footer />
    </div>
  );
};

// smallChange
