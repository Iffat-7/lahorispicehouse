import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyOrderCTA from "@/components/StickyOrderCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      
      {/* Conversion Tools */}
      <WhatsAppButton />
      <ChatWidget />
      <StickyOrderCTA />
    </div>
  );
};

export default Index;
