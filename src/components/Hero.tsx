import { Phone, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bbq.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.querySelector("#menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious Lahori BBQ"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-spice-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-spice-red/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="animate-fade-in">
          <span className="inline-block text-spice-gold font-medium text-lg mb-4 tracking-wider uppercase">
            Welcome to
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-cream mb-6 text-balance">
            Lahori Spice House
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 font-light max-w-2xl mx-auto mb-10">
            Authentic Lahori Flavors, Right at Your Table!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/923005551789"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary group"
            >
              <Phone className="w-5 h-5 group-hover:animate-float" />
              Order on WhatsApp
            </a>
            <button onClick={scrollToMenu} className="btn-hero-secondary">
              View Menu
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToMenu}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/60 hover:text-spice-gold transition-colors animate-float"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
