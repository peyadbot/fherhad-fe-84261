import Header from "../components/Header";
import { MovieProvider } from "../api/MovieContext";
import Footer from "../components/Footer";
import Hero from "./Hero";
import Content from "./ContentMovie";

function AllMoviesPage() {
  return (
    <div>
      <MovieProvider>
        <Header />
        <Hero />
        <Content />
        <Footer />
      </MovieProvider>
    </div>
  );
}

export default AllMoviesPage;
