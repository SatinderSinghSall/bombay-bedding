import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Products } from "@/components/products";
import { Reviews } from "@/components/reviews";
import { About } from "@/components/about";
import { VisitUs } from "@/components/visit-us";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";
import { WelcomeModal } from "@/components/welcome-modal";

export default function Page() {
  return (
    <main className="w-full bg-neutral-50">
      <WelcomeModal />

      <Header />
      <Hero />
      <WhyChooseUs />
      <Products />
      <Reviews />
      <About />
      <VisitUs />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
