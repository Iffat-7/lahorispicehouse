const testimonials = [
  {
    text: "Best karahi in the area! Authentic Lahori taste that reminds me of home.",
    author: "Ahmed R.",
    rating: 5,
  },
  {
    text: "Loved the BBQ platter — real smoky flavor and generous portions!",
    author: "Sara K.",
    rating: 5,
  },
  {
    text: "Fast delivery, hot food, and amazing deals. My go-to for family dinners!",
    author: "Usman M.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-charcoal text-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-1 text-spice-gold text-2xl mb-4">
            ★★★★★
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            What Our <span className="text-spice-gold">Customers</span> Say
          </h2>
          <p className="text-cream/70 text-lg">
            Serving Hundreds of Happy Customers Weekly
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-xl p-6 hover:border-spice-gold/30 transition-colors"
            >
              <div className="flex gap-1 text-spice-gold mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-cream/90 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="text-spice-gold font-semibold">— {testimonial.author}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/923005551789?text=Hi%2C%20I%20want%20to%20order%20from%20Lahori%20Spice%20House"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-spice text-cream px-8 py-4 rounded-full font-semibold text-lg shadow-warm hover:shadow-glow transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join Happy Customers — Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
