import { useState } from "react";
import { Flame } from "lucide-react";

interface MenuItem {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    name: "Chicken Karahi",
    items: [
      { name: "Chicken Karahi", price: "1,000 - 2,000", popular: true },
      { name: "Chicken White Karahi", price: "1,200 - 2,400" },
      { name: "Chicken Achari Karahi", price: "1,200 - 2,400" },
      { name: "Chicken Black Pepper Karahi", price: "1,200 - 2,400" },
      { name: "Chicken Desi Ghee Karahi", price: "1,400 - 2,800", popular: true },
    ],
  },
  {
    name: "Mutton Karahi",
    items: [
      { name: "Mutton Karahi", price: "2,200 - 4,200", popular: true },
      { name: "Mutton White Karahi", price: "2,400 - 4,700" },
      { name: "Mutton Achari Karahi", price: "2,400 - 4,700" },
      { name: "Mutton Black Pepper Karahi", price: "2,400 - 4,700" },
      { name: "Mutton Desi Ghee Karahi", price: "2,500 - 5,000", popular: true },
    ],
  },
  {
    name: "Beef Karahi",
    items: [
      { name: "Beef Karahi", price: "1,600 - 3,000" },
      { name: "Beef Karahi Desi Ghee", price: "1,800 - 3,500", popular: true },
    ],
  },
  {
    name: "Handi Specials",
    items: [
      { name: "Makhni Handi", price: "1,600 - 3,000", popular: true },
      { name: "Achari Handi", price: "1,600 - 3,000" },
      { name: "Badami Handi", price: "1,600 - 3,000" },
      { name: "Boneless Handi", price: "1,600 - 3,000" },
    ],
  },
  {
    name: "Tandoor & BBQ",
    items: [
      { name: "Chicken Cheese Kabab", price: "Per Piece" },
      { name: "Chicken Reshmi Kabab", price: "Per Piece" },
      { name: "Beef Kabab", price: "Per Piece" },
      { name: "Chicken Tikka Boti", price: "Per Portion", popular: true },
      { name: "Chicken Malai Boti", price: "Per Portion", popular: true },
      { name: "Chicken Kastori Boti", price: "Per Portion" },
      { name: "Leg & Chest Pieces", price: "Per Piece" },
    ],
  },
  {
    name: "Biryani & Pulao",
    items: [
      { name: "Chicken Biryani", price: "350 - 650", popular: true },
      { name: "Sada Biryani", price: "250 - 450" },
      { name: "Chicken Pulao", price: "350 - 650" },
      { name: "Sada Pulao", price: "250 - 450" },
    ],
  },
  {
    name: "Daal & Sabzi",
    items: [
      { name: "Daal Chana", price: "250" },
      { name: "Daal Chana Desi Ghee", price: "450" },
      { name: "Sabzi", price: "250" },
      { name: "Sabzi with Chicken", price: "300" },
    ],
  },
  {
    name: "Special Deals",
    items: [
      {
        name: "Deal 1",
        price: "3,800",
        description: "1 Makhni Handi, 5 Naan, Half Biryani, 1.5L Drink, Raita & Salad",
        popular: true,
      },
      { name: "Deal 2", price: "540" },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? menuData
      : menuData.filter((cat) => cat.name === activeCategory);

  return (
    <section id="menu" className="section-padding bg-gradient-warm">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Discover Our
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
            Delicious <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From sizzling karahis to tender BBQ, explore our authentic Lahori specialties
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-gradient-spice text-cream shadow-warm"
                : "bg-card text-muted-foreground hover:bg-muted"
            }`}
          >
            All Items
          </button>
          {menuData.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-gradient-spice text-cream shadow-warm"
                  : "bg-card text-muted-foreground hover:bg-muted"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div key={category.name} className="menu-card">
              <h3 className="text-xl font-display font-bold text-foreground mb-6 pb-3 border-b border-border flex items-center gap-2">
                <Flame className="w-5 h-5 text-primary" />
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start gap-4 group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                        {item.popular && (
                          <span className="text-xs bg-spice-gold/20 text-spice-gold px-2 py-0.5 rounded-full font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <span className="text-primary font-bold whitespace-nowrap">
                      PKR {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/923005551789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary"
          >
            Order Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
