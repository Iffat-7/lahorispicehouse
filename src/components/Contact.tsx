import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["23, Usman Block", "Al Kabir Town Phase II", "Raiwind Rd, Lahore, Pakistan"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92 300-555-7189"],
      link: "tel:+923005557189",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+92 300-555-7189"],
      link: "https://wa.me/923005557189",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Open Daily", "Till 2:00 AM"],
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-warm">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us or order online for the authentic Lahori BBQ experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="menu-card group">
                <div className="w-12 h-12 rounded-full bg-gradient-spice flex items-center justify-center mb-4 group-hover:animate-glow">
                  <info.icon className="w-6 h-6 text-cream" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </a>
                ) : (
                  info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))
                )}
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="menu-card p-0 overflow-hidden h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.7684372421646!2d74.24944531513018!3d31.382759981413987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919055c07be5c7d%3A0xb6c8e5f0d75d7e5a!2sAl%20Kabir%20Town%20Phase%202%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lahori Spice House Location"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to order?</p>
          <a
            href="https://wa.me/923005557189"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary"
          >
            <MessageCircle className="w-5 h-5" />
            Order via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
