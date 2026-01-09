import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bbq.jpg";

const Hero = () => {
  const scrollToLocation = () => {
    const element = document.querySelector("#contact");
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

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="animate-fade-in">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-4 py-2 mb-6">
            <span className="text-spice-gold text-sm">★★★★★</span>
            <span className="text-cream/90 text-sm font-medium">Trusted by Lahore Food Lovers</span>
          </div>

          {/* Value-First Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-4 text-balance leading-tight">
            Authentic Lahori BBQ & Karahi
            <span className="block text-spice-gold">Fresh, Spicy, Delivered Fast</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-cream/90 font-light max-w-xl mx-auto mb-8">
            Order in seconds. Dine-in or takeaway. 100+ dishes ready for you.
          </p>

          {/* Single Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/923005551789?text=Hi%2C%20I%20want%20to%20order%20from%20Lahori%20Spice%20House"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary group text-lg px-10 py-5"
            >
              <svg className="w-6 h-6 group-hover:animate-float" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order on WhatsApp
            </a>
            
            {/* Secondary - Small Location Link */}
            <button 
              onClick={scrollToLocation} 
              className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors text-sm"
            >
              <MapPin className="w-4 h-4" />
              View Location
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 text-cream/60 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Open Now • 12 PM - 2 AM
            </span>
            <span>🔥 500+ Happy Customers Weekly</span>
            <span>🚚 Fast Delivery Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
