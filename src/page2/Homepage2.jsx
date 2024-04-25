import Header from '../components/Header';
import Hero from './HeroByTheater';
import { SearchProvider } from '../api/SearchContext';
import Content from './ContentTheater';
import Footer from '../components/Footer';

function MoviesPage() {
  return (
    <div>
      <SearchProvider>
        <Header />
        <Hero />
        <Content />
        <Footer />
      </SearchProvider>
    </div>
  );
}

export default MoviesPage;
