import { Flame, Clock, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Flame,
      title: "Authentic Recipes",
      description: "Traditional Lahori recipes passed down through generations",
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Ingredients prepared fresh every day for maximum flavor",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Premium meats and spices sourced from trusted suppliers",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Our Story
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-6">
            About <span className="text-primary">Lahori Spice House</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lahori Spice House brings the rich taste of traditional Lahori BBQ, karahis, and handis 
            to your table. Fresh, spicy, and irresistible — just like the streets of Lahore.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="menu-card text-center group hover:-translate-y-2 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-spice flex items-center justify-center group-hover:animate-glow">
                <feature.icon className="w-8 h-8 text-cream" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
