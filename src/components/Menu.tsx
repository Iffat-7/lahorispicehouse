import { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { menuData, MenuCategory } from "@/data/menuData";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  const filteredCategories = useMemo(() => {
    let categories = activeCategory === "all"
      ? menuData
      : menuData.filter((cat) => cat.name === activeCategory);

    if (searchQuery.trim()) {
      categories = categories
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description?.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((cat) => cat.items.length > 0);
    }

    return categories;
  }, [activeCategory, searchQuery]);

  const categoryGroups = useMemo(() => {
    return {
      karahi: ["Chicken Karahi", "Mutton Karahi", "Beef Karahi", "Chicken Handi"],
      desi: ["Biryani / Pulao", "B.B.Q", "Daal / Sabzi", "Tandoor Items", "Chargha / Sajji"],
      fastFood: ["Burgers", "Shawarma", "Sandwiches", "Paratha Rolls", "Fries", "Appetizers"],
      pizza: ["Special Pizzas", "Regular Pizzas"],
      deals: ["Deals", "Burger Deals", "Pizza Deals"],
      beverages: ["Beverages"],
    };
  }, []);

  const quickFilters = [
    { label: "All", value: "all" },
    { label: "🍲 Karahi & Handi", value: "karahi" },
    { label: "🔥 Desi Specials", value: "desi" },
    { label: "🍔 Fast Food", value: "fastFood" },
    { label: "🍕 Pizzas", value: "pizza" },
    { label: "🎁 Deals", value: "deals" },
    { label: "🥤 Beverages", value: "beverages" },
  ];

  const [quickFilter, setQuickFilter] = useState("all");

  const displayCategories = useMemo(() => {
    if (quickFilter === "all") return filteredCategories;
    const categoryNames = categoryGroups[quickFilter as keyof typeof categoryGroups] || [];
    return filteredCategories.filter((cat) => categoryNames.includes(cat.name));
  }, [quickFilter, filteredCategories, categoryGroups]);

  return (
    <section id="menu" className="section-padding bg-gradient-warm">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Discover Our
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
            Delicious <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From sizzling karahis to wood-fired pizzas, explore our 100+ authentic dishes
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {quickFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => {
                setQuickFilter(filter.value);
                setActiveCategory("all");
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                quickFilter === filter.value
                  ? "bg-gradient-spice text-cream shadow-warm"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            All Categories
          </button>
          {displayCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid - Accordion Style for Mobile, Grid for Desktop */}
        <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
          {displayCategories.map((category) => {
            const isExpanded = expandedCategories.has(category.name);
            const shouldShowAll = activeCategory === category.name || isExpanded;
            const displayItems = shouldShowAll ? category.items : category.items.slice(0, 4);

            return (
              <div key={category.name} className="menu-card">
                <button
                  onClick={() => toggleCategory(category.name)}
                  className="w-full text-left md:cursor-default"
                >
                  <h3 className="text-xl font-display font-bold text-foreground mb-4 pb-3 border-b border-border flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      {category.name}
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                        {category.items.length}
                      </span>
                    </span>
                    <span className="md:hidden text-muted-foreground">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </h3>
                </button>
                
                <div className="space-y-3">
                  {displayItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-start gap-3 group p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </span>
                          {item.popular && (
                            <span className="text-[10px] bg-spice-gold/20 text-spice-gold px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                              🔥 Hot
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <span className="text-primary font-bold text-sm whitespace-nowrap shrink-0">
                        Rs. {item.price}
                      </span>
                    </div>
                  ))}
                  
                  {/* Show More Button for Mobile */}
                  {category.items.length > 4 && !shouldShowAll && (
                    <button
                      onClick={() => toggleCategory(category.name)}
                      className="w-full text-center text-sm text-primary font-medium py-2 hover:underline md:hidden"
                    >
                      +{category.items.length - 4} more items
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {displayCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No items found for "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
                setQuickFilter("all");
              }}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Order CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to order? Contact us directly!
          </p>
          <a
            href="https://wa.me/923005551789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order Now on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
