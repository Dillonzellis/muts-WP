import Cards from './components/Cards';
import Container from './components/Container';

export default function Home() {
  return (
    <main>
      <Container>
        <div>Nav</div>
        <div>Hero</div>
        <Cards />
        <div>CTA</div>
        <div>Footer</div>
      </Container>
    </main>
  );
}
