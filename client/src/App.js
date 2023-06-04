import './App.css';
import Cards from './components/Cards/Cards'
import MusicCards from './components/MusicCard/MusicCards'
import {Header, Footer, Container, Hero} from './components/index'
function App() {
  return (
    <>
      <Header />
      <Container>
          <Hero>
            <Cards />
          </Hero>
          <MusicCards />

      </Container>
      <Footer />
      
    </>
  );
}

export default App;
