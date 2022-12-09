import './App.css';

import Navigation from './components/nav/nav';
import Hero from './components/hero/hero';
import OpeningParagraph from './components/openingParagraph/openingParagraph';
import BootstrapComponent from './components/bootstrapComp/bootstrapComp';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='App'>
      <Navigation></Navigation>
      <Hero></Hero>
      <OpeningParagraph></OpeningParagraph>
      <BootstrapComponent></BootstrapComponent>
      <Footer></Footer>
    </div>
  );
}

export default App;
