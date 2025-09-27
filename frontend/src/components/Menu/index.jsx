import React, { useState } from "react";
import "./index.css";
 
// Dishes arrays  /Users/sri/Thevars/frontend/src/assets/Veg/idly set .JPG
const vegDishes = [
  // 🍳 Breakfast
  { name: "Idly Set", img: "/Veg/idly set .JPG" },
  { name: "Mini Idly", img: "/Veg/Mini idily.JPG" },
  { name: "Dosa", img: "/Veg/Dosa.JPG" },
  { name: "Masala Dosa", img: "/Veg/Masala dosa.JPG" },
  { name: "Pongal", img: "/Veg/pongal.JPG" },
  { name: "Idiyappam Set", img: "/Veg/Idiyappam set .JPG" },
  { name: "Poori Set", img: "/Veg/Poori set.JPG" },
  { name: "Chola Puri", img: "/Veg/chola puri.JPG" },
  { name: "Chapathi Set", img: "/Veg/Chapathi set .JPG" },
  { name: "Chilli Paratha", img: "/Veg/Chilli poratha.JPG" },
  { name: "Kema Paratha", img: "/Veg/Kema porata.JPG" },
  { name: "Paratha Set", img: "/Veg/paratha set.JPG" },

  // 🍛 Lunch
  { name: "Veg Meals", img: "/Veg/Veg meals .JPG" },
  { name: "Sambar Rice", img: "/Veg/Sambar rice .JPG" },
  { name: "Curd Rice", img: "/Veg/curd rice .JPG" },
  { name: "Lemon Rice", img: "/Veg/Lemon rice .JPG" },
  { name: "Coconut Rice", img: "/Veg/Coconut rice .JPG" },
  { name: "Veg Biryani", img: "/Veg/Veg briyani .JPG" },

  // 🍽️ Dinner / Specials
  { name: "Veg Fried Rice", img: "/Veg/Veg fried rice .JPG" },
  { name: "Veg Noodles", img: "/Veg/veg noodles .JPG" },
  { name: "Mushroom Dosa", img: "/Veg/Mushroom .JPG" },
  { name: "Mushroom Fried Rice", img: "/Veg/Mushroom fried rice .JPG" },
  { name: "Mushroom Noodles", img: "/Veg/Mushroom noodles .JPG" },
  { name: "Paneer Dosa", img: "/Veg/Panner.JPG" },
];


const nonVegDishes = [
  // 🍗 Chicken
  { name: "Chicken Biryani", img: "/Non Veg/chicken briyani .JPG" },
  { name: "Chicken Lappa", img: "/Non Veg/chicken lappa.JPG" },
  { name: "Chicken Majestic", img: "/Non Veg/chicken majestic .JPG" },
  { name: "Chicken Masala", img: "/Non Veg/Chicken masala.JPG" },
  { name: "Chicken Special Meals", img: "/Non Veg/chicken spl meals .JPG" },
  { name: "Chicken Wings", img: "/Non Veg/Chicken wings .JPG" },
  { name: "Kadai Chicken", img: "/Non Veg/kadai chicken .JPG" },
  { name: "Parotta", img: "/Non Veg/paratha.JPG" },

  // 🐟 Fish
  { name: "Fish Curry", img: "/Non Veg/fish curry .JPG" },
  { name: "Fish Fry", img: "/Non Veg/fish fry.JPG" },
  { name: "Fish Special Meals", img: "/Non Veg/Fish spl meals .JPG" },
  { name: "Nethili Fish Fry", img: "/Non Veg/nethili fish fry .JPG" },

  // 🐑 Mutton
  { name: "Mutton Biryani", img: "/Non Veg/mutton briyani .JPG" },
  { name: "Mutton Masala", img: "/Non Veg/Mutton masala.JPG" },
  { name: "Mutton Special Meals", img: "/Non Veg/mutton spl meals .JPG" },
];


const comboDishes = [
  { name: "Kothu Parotta + Chicken Tikka", img: "/Combo/2 kothu parotta+ chicken tikka.jpg" },
  { name: "Butter Kulcha + Butter Chicken Masala", img: "/Combo/3 butter kulcha + butter chicken masala.jpg" },
  { name: "Butter Naan + Paneer Butter Masala", img: "/Combo/3 butter naan + panner butter masala.jpg" },
  { name: "Parotta + Chicken Hyderabadi", img: "/Combo/6 parotta + chicken hyderabadi.jpg" },
  { name: "Chicken Biryani + Boiled Egg + Tandoori (1/4)", img: "/Combo/chicken biryani+boiled Egg + Tandoori 1_4.jpg" },
];


export default function Menu() {
  const [activeTab, setActiveTab] = useState("veg");

  const getDishes = () => {
    if (activeTab === "veg") return vegDishes;
    if (activeTab === "nonveg") return nonVegDishes;
    return comboDishes;
  };

  const dishes = getDishes();

  return (
    <div className="menu-wrapper">
      <h1 className="menu-title">Our Signature Menu</h1>

      {/* Tabs */}
      <div className="menu-tabs">
        <button
          className={activeTab === "veg" ? "active" : ""}
          onClick={() => setActiveTab("veg")}
        >
          Veg
        </button>
        <button
          className={activeTab === "nonveg" ? "active" : ""}
          onClick={() => setActiveTab("nonveg")}
        >
          Non-Veg
        </button>
        <button
          className={activeTab === "combo" ? "active" : ""}
          onClick={() => setActiveTab("combo")}
        >
          Combo
        </button>
      </div>

      {/* Dish cards */}
      <div className="menu-container">
        {dishes.map((dish, idx) => (
          <div key={idx} className="menu-card">
            <img src={dish.img} alt={dish.name} />
            <div className="overlay">
              <h3>{dish.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
