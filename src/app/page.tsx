import CardSection from "./(home)/(cards-section)/CardsSection";
import Services from "./(home)/(services)/Services";
import CTA from "./(home)/CTA";
import Hero from "./(home)/Hero";
import Container from "./components/(layout)/Container";

export default function Home() {
  return (
    <main>
      <Hero />
      <CardSection />
      <Container>
        <CTA />
        <Services />
      </Container>
    </main>
  );
}
