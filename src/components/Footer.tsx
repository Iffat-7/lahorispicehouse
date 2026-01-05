import { Facebook, Instagram, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Phone, href: "https://wa.me/923005551789", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-charcoal text-cream py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold">
              Lahori <span className="text-spice-gold">Spice</span> House
            </h3>
            <p className="text-cream/60 text-sm mt-1">
              Authentic Lahori Flavors, Right at Your Table
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gradient-spice transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-cream/10 mt-8 pt-8 text-center">
          <p className="text-cream/60 text-sm">
            © {currentYear} Lahori Spice House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
