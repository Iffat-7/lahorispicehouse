export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  popular?: boolean;
  badge?: "bestseller" | "chefpick" | "spicy" | "new";
}

export interface MenuCategory {
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    name: "Chicken Karahi",
    icon: "🍲",
    items: [
      { name: "Chicken Karahi", price: "1,000 - 2,000", popular: true, badge: "bestseller" },
      { name: "Chicken White Karahi", price: "1,200 - 2,400" },
      { name: "Chicken Achari Karahi", price: "1,200 - 2,400", badge: "spicy" },
      { name: "Chicken Black Pepper Karahi", price: "1,200 - 2,400" },
      { name: "Chicken Desi Ghee Karahi", price: "1,400 - 2,800", popular: true, badge: "chefpick" },
    ],
  },
  {
    name: "Mutton Karahi",
    icon: "🍖",
    items: [
      { name: "Mutton Karahi", price: "2,200 - 4,200", popular: true, badge: "bestseller" },
      { name: "Mutton White Karahi", price: "2,400 - 4,700" },
      { name: "Mutton Achari Karahi", price: "2,400 - 4,700", badge: "spicy" },
      { name: "Mutton Black Pepper Karahi", price: "2,400 - 4,700" },
      { name: "Mutton Desi Ghee Karahi", price: "2,500 - 5,000", popular: true, badge: "chefpick" },
    ],
  },
  {
    name: "Beef Karahi",
    icon: "🥘",
    items: [
      { name: "Beef Karahi", price: "1,600 - 3,000" },
      { name: "Beef Karahi Desi Ghee", price: "1,800 - 3,500", popular: true, badge: "chefpick" },
    ],
  },
  {
    name: "Chicken Handi",
    icon: "🫕",
    items: [
      { name: "Makhni Handi", price: "1,600 - 3,000", popular: true, badge: "bestseller" },
      { name: "Achari Handi", price: "1,600 - 3,000", badge: "spicy" },
      { name: "Badami Handi", price: "1,600 - 3,000" },
      { name: "Boneless Handi", price: "1,600 - 3,000" },
      { name: "White Handi", price: "1,600 - 3,000" },
      { name: "Black Pepper Handi", price: "1,600 - 3,000" },
    ],
  },
  {
    name: "Biryani / Pulao",
    icon: "🍚",
    items: [
      { name: "Chicken Biryani (H/F)", price: "350 - 650", popular: true, badge: "bestseller" },
      { name: "Sada Biryani (H/F)", price: "250 - 450" },
      { name: "Chicken Pulao (H/F)", price: "350 - 650" },
      { name: "Sada Pulao (H/F)", price: "250 - 450" },
      { name: "Mutton Biryani (H/F)", price: "500 - 900", popular: true, badge: "chefpick" },
      { name: "Beef Biryani (H/F)", price: "400 - 750" },
    ],
  },
  {
    name: "B.B.Q",
    icon: "🔥",
    items: [
      { name: "Chicken Tikka Boti", price: "600", popular: true, badge: "bestseller" },
      { name: "Chicken Malai Boti", price: "650", popular: true, badge: "bestseller" },
      { name: "Chicken Kastori Boti", price: "650" },
      { name: "Beef Seekh Kabab", price: "150/pc" },
      { name: "Chicken Seekh Kabab", price: "120/pc" },
      { name: "Beef Boti", price: "700", badge: "spicy" },
      { name: "Mutton Chops", price: "250/pc", popular: true, badge: "chefpick" },
      { name: "Lamb Chops", price: "300/pc" },
    ],
  },
  {
    name: "Daal / Sabzi",
    icon: "🥗",
    items: [
      { name: "Daal Chana", price: "250" },
      { name: "Daal Chana Desi Ghee", price: "450", badge: "chefpick" },
      { name: "Daal Mash", price: "300" },
      { name: "Sabzi", price: "250" },
      { name: "Sabzi with Chicken", price: "300" },
      { name: "Mix Vegetable", price: "350" },
    ],
  },
  {
    name: "Deals",
    icon: "🎁",
    items: [
      {
        name: "Family Deal 1",
        price: "3,800",
        description: "1 Makhni Handi + 5 Naan + Half Biryani + 1.5L Drink + Raita & Salad",
        popular: true,
        badge: "bestseller",
      },
      {
        name: "Family Deal 2",
        price: "4,500",
        description: "1 Chicken Karahi + 1 Handi + 6 Naan + Full Biryani + 2L Drink + Raita & Salad",
        popular: true,
        badge: "bestseller",
      },
      {
        name: "BBQ Deal",
        price: "2,500",
        description: "6 Tikka + 4 Seekh Kabab + 4 Naan + Raita + Salad + Drink",
        badge: "chefpick",
      },
      {
        name: "Couple Deal",
        price: "1,800",
        description: "Half Karahi + 2 Naan + Half Biryani + 2 Drinks",
      },
      { name: "Student Deal", price: "540", description: "Biryani + Drink + Raita", badge: "new" },
    ],
  },
  {
    name: "Tandoor Items",
    icon: "🫓",
    items: [
      { name: "Roghni Naan", price: "50" },
      { name: "Garlic Naan", price: "80", popular: true, badge: "bestseller" },
      { name: "Cheese Naan", price: "150", popular: true, badge: "bestseller" },
      { name: "Butter Naan", price: "60" },
      { name: "Plain Naan", price: "30" },
      { name: "Kulcha", price: "40" },
      { name: "Tandoori Roti", price: "25" },
      { name: "Laccha Paratha", price: "60" },
    ],
  },
  {
    name: "Chargha / Sajji",
    icon: "🐔",
    items: [
      { name: "Full Chargha", price: "2,200", popular: true, badge: "bestseller" },
      { name: "Half Chargha", price: "1,200" },
      { name: "Chargha Leg Piece", price: "350" },
      { name: "Full Sajji", price: "2,500", popular: true, badge: "chefpick" },
      { name: "Half Sajji", price: "1,400" },
      { name: "Sajji with Rice", price: "2,800" },
    ],
  },
  {
    name: "Beverages",
    icon: "🥤",
    items: [
      { name: "Regular Drink (500ml)", price: "80" },
      { name: "Large Drink (1.5L)", price: "180" },
      { name: "Mineral Water (500ml)", price: "60" },
      { name: "Mineral Water (1.5L)", price: "120" },
      { name: "Fresh Lime", price: "150" },
      { name: "Lassi (Sweet/Salty)", price: "120", popular: true, badge: "bestseller" },
      { name: "Doodh Patti", price: "80" },
      { name: "Green Tea", price: "100" },
    ],
  },
  {
    name: "Burgers",
    icon: "🍔",
    items: [
      { name: "Zinger Burger", price: "450", popular: true, badge: "bestseller" },
      { name: "Beef Burger", price: "500" },
      { name: "Chicken Cheese Burger", price: "480" },
      { name: "Double Decker Burger", price: "650", popular: true, badge: "chefpick" },
      { name: "Crunchy Burger", price: "400" },
      { name: "Mighty Burger", price: "700", badge: "spicy" },
    ],
  },
  {
    name: "Shawarma",
    icon: "🌯",
    items: [
      { name: "Chicken Shawarma", price: "250", popular: true, badge: "bestseller" },
      { name: "Beef Shawarma", price: "300" },
      { name: "Shawarma Platter", price: "550", popular: true, badge: "chefpick" },
      { name: "Double Shawarma", price: "450" },
      { name: "Cheese Shawarma", price: "350" },
    ],
  },
  {
    name: "Sandwiches",
    icon: "🥪",
    items: [
      { name: "Club Sandwich", price: "400", popular: true, badge: "bestseller" },
      { name: "Chicken Sandwich", price: "350" },
      { name: "Beef Sandwich", price: "400" },
      { name: "Cheese Sandwich", price: "250" },
      { name: "Grilled Sandwich", price: "320" },
    ],
  },
  {
    name: "Paratha Rolls",
    icon: "🌮",
    items: [
      { name: "Chicken Tikka Roll", price: "300", popular: true, badge: "bestseller" },
      { name: "Seekh Kabab Roll", price: "280" },
      { name: "Malai Boti Roll", price: "350", popular: true, badge: "chefpick" },
      { name: "Beef Boti Roll", price: "380" },
      { name: "Egg Roll", price: "180" },
      { name: "Vegetable Roll", price: "200" },
    ],
  },
  {
    name: "Fries",
    icon: "🍟",
    items: [
      { name: "Plain Fries", price: "150" },
      { name: "Masala Fries", price: "200", popular: true, badge: "spicy" },
      { name: "Loaded Fries", price: "350", popular: true, badge: "bestseller" },
      { name: "Cheese Fries", price: "280" },
      { name: "Chili Cheese Fries", price: "320", badge: "spicy" },
    ],
  },
  {
    name: "Appetizers",
    icon: "🍗",
    items: [
      { name: "Chicken Wings (6pc)", price: "450", popular: true, badge: "bestseller" },
      { name: "Chicken Wings (12pc)", price: "800" },
      { name: "Chicken Nuggets (8pc)", price: "350" },
      { name: "Fish Fingers", price: "400" },
      { name: "Chicken Strips", price: "450", popular: true, badge: "chefpick" },
      { name: "Onion Rings", price: "200" },
      { name: "Mozzarella Sticks", price: "380", badge: "new" },
    ],
  },
  {
    name: "Special Pizzas",
    icon: "🍕",
    items: [
      { name: "Tikka Pizza (M/L)", price: "900 - 1,400", popular: true, badge: "bestseller" },
      { name: "BBQ Pizza (M/L)", price: "950 - 1,500", popular: true, badge: "bestseller" },
      { name: "Fajita Pizza (M/L)", price: "900 - 1,400" },
      { name: "Supreme Pizza (M/L)", price: "1,000 - 1,600", badge: "chefpick" },
      { name: "Meat Lovers (M/L)", price: "1,100 - 1,700", popular: true, badge: "spicy" },
      { name: "Malai Boti Pizza (M/L)", price: "1,000 - 1,600" },
    ],
  },
  {
    name: "Regular Pizzas",
    icon: "🍕",
    items: [
      { name: "Cheese Pizza (M/L)", price: "600 - 900" },
      { name: "Pepperoni Pizza (M/L)", price: "750 - 1,100" },
      { name: "Vegetable Pizza (M/L)", price: "700 - 1,000" },
      { name: "Chicken Pizza (M/L)", price: "750 - 1,100" },
      { name: "Margherita Pizza (M/L)", price: "650 - 950" },
    ],
  },
  {
    name: "Burger Deals",
    icon: "🍔",
    items: [
      {
        name: "Burger Deal 1",
        price: "650",
        description: "1 Zinger Burger + Fries + Drink",
        popular: true,
        badge: "bestseller",
      },
      {
        name: "Burger Deal 2",
        price: "850",
        description: "1 Beef Burger + Loaded Fries + Drink",
      },
      {
        name: "Double Burger Deal",
        price: "1,100",
        description: "2 Zinger Burgers + 2 Fries + 2 Drinks",
        popular: true,
        badge: "bestseller",
      },
      {
        name: "Family Burger Deal",
        price: "1,800",
        description: "4 Burgers + 2 Large Fries + 1.5L Drink",
      },
    ],
  },
  {
    name: "Pizza Deals",
    icon: "🍕",
    items: [
      {
        name: "Pizza Deal 1",
        price: "1,200",
        description: "1 Medium Pizza + 1 Drink + Garlic Bread",
        popular: true,
        badge: "bestseller",
      },
      {
        name: "Pizza Deal 2",
        price: "1,800",
        description: "1 Large Pizza + 2 Drinks + Garlic Bread + Fries",
        popular: true,
        badge: "bestseller",
      },
      {
        name: "Party Deal",
        price: "3,500",
        description: "2 Large Pizzas + 1.5L Drink + Wings + Fries",
        badge: "chefpick",
      },
      {
        name: "Mega Deal",
        price: "5,000",
        description: "3 Large Pizzas + 2 Large Drinks + Wings + Loaded Fries",
      },
    ],
  },
];
