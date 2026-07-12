import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import DestinationGrid from '../components/DestinationGrid';
import LatestProperties from '../components/LatestProperties';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import ChatIA from '../components/ChatIA';

// CORRECTION ICI : Importation de 'destinations' au lieu de 'cities'
import { destinations, properties, services } from '../data/citiesData';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <SearchBar />

      {/* Section Destinations */}
      <DestinationGrid destinations={destinations} />

      {/* Section Logements */}
      <LatestProperties properties={properties} />

      {/* Section Services */}
      <ServicesSection services={services} />

      <Testimonials />
      <ChatIA />
    </MainLayout>
  );
}