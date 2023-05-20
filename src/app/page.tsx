import CardSection from './(home)/(cards-section)/CardsSection';
import Services from './(home)/(services)/Services';
import CTA from './(home)/CTA';
import Container from './components/(layout)/Container';
import Nav from './components/(layout)/nav/Nav';

export default function Home() {
  return (
    <main>
      <Nav />
      <Container>
        <div>Hero</div>
        <CardSection />
        <CTA />
        <Services />
        <div>Footer</div>
      </Container>
    </main>
  );
}
