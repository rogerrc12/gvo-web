import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import CtaBanner from "@/components/ctaBanner/CtaBanner";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Services />
      <CtaBanner />
      <Testimonials />
      <Contact />
    </main>
  );
}
