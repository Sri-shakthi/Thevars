import React, { useState } from "react";
import "./index.css";

// Import all images
import idlySet from "../../assets/Veg/idly set .JPG";
import miniIdly from "../../assets/Veg/Mini idily.JPG";
import dosa from "../../assets/Veg/Dosa.JPG";
import masalaDosa from "../../assets/Veg/Masala dosa.JPG";
import pongal from "../../assets/Veg/pongal.JPG";
import idiyappamSet from "../../assets/Veg/Idiyappam set .JPG";
import pooriSet from "../../assets/Veg/Poori set.JPG";
import cholaPuri from "../../assets/Veg/chola puri.JPG";
import chapathiSet from "../../assets/Veg/Chapathi set .JPG";
import chilliParatha from "../../assets/Veg/Chilli poratha.JPG";
import kemaParatha from "../../assets/Veg/Kema porata.JPG";
import parathaSet from "../../assets/Veg/paratha set.JPG";
import vegMeals from "../../assets/Veg/Veg meals .JPG";
import sambarRice from "../../assets/Veg/Sambar rice .JPG";
import curdRice from "../../assets/Veg/curd rice .JPG";
import lemonRice from "../../assets/Veg/Lemon rice .JPG";
import coconutRice from "../../assets/Veg/Coconut rice .JPG";
import vegBiryani from "../../assets/Veg/Veg briyani .JPG";
import vegFriedRice from "../../assets/Veg/Veg fried rice .JPG";
import vegNoodles from "../../assets/Veg/veg noodles .JPG";
import mushroom from "../../assets/Veg/Mushroom .JPG";
import mushroomFriedRice from "../../assets/Veg/Mushroom fried rice .JPG";
import mushroomNoodles from "../../assets/Veg/Mushroom noodles .JPG";
import paneer from "../../assets/Veg/Panner.JPG";

// Non-veg imports
import chickenBiryani from "../../assets/Non Veg/chicken briyani .JPG";
import chickenMasala from "../../assets/Non Veg/Chicken masala.JPG";
import chickenLappa from "../../assets/Non Veg/chicken lappa.JPG";
import chickenMajestic from "../../assets/Non Veg/chicken majestic .JPG";
import chickenSplMeals from "../../assets/Non Veg/chicken spl meals .JPG";
import chickenWings from "../../assets/Non Veg/Chicken wings .JPG";
import fishCurry from "../../assets/Non Veg/fish curry .JPG";
import fishFry from "../../assets/Non Veg/fish fry.JPG";
import fishSplMeals from "../../assets/Non Veg/Fish spl meals .JPG";
import kadaiChicken from "../../assets/Non Veg/kadai chicken .JPG";
import kothuPoratha from "../../assets/Non Veg/kothu poratha.JPG";
import muttonBiryani from "../../assets/Non Veg/mutton briyani .JPG";
import muttonMasala from "../../assets/Non Veg/Mutton masala.JPG";
import muttonSplMeals from "../../assets/Non Veg/mutton spl meals .JPG";
import nethiliFishFry from "../../assets/Non Veg/nethili fish fry .JPG";
import paratha from "../../assets/Non Veg/paratha.JPG";

// Combo imports
import combo1 from "../../assets/Combo/2 kothu parotta+ chicken tikka.jpg";
import combo2 from "../../assets/Combo/3 butter kulcha + butter chicken masala.jpg";
import combo3 from "../../assets/Combo/3 butter naan + panner butter masala.jpg";
import combo4 from "../../assets/Combo/6 parotta + chicken hyderabadi.jpg";
import combo5 from "../../assets/Combo/chicken biryani+boiled Egg + Tandoori 1_4.jpg";
 
// Dishes arrays
const vegDishes = [
  // 🍳 Breakfast
  { name: "Idly Set", img: idlySet },
  { name: "Mini Idly", img: miniIdly },
  { name: "Dosa", img: dosa },
  { name: "Masala Dosa", img: masalaDosa },
  { name: "Pongal", img: pongal },
  { name: "Idiyappam Set", img: idiyappamSet },
  { name: "Poori Set", img: pooriSet },
  { name: "Chola Puri", img: cholaPuri },
  { name: "Chapathi Set", img: chapathiSet },
  { name: "Chilli Paratha", img: chilliParatha },
  { name: "Kema Paratha", img: kemaParatha },
  { name: "Paratha Set", img: parathaSet },

  // 🍛 Lunch
  { name: "Veg Meals", img: vegMeals },
  { name: "Sambar Rice", img: sambarRice },
  { name: "Curd Rice", img: curdRice },
  { name: "Lemon Rice", img: lemonRice },
  { name: "Coconut Rice", img: coconutRice },
  { name: "Veg Biryani", img: vegBiryani },

  // 🍽️ Dinner / Specials
  { name: "Veg Fried Rice", img: vegFriedRice },
  { name: "Veg Noodles", img: vegNoodles },
  { name: "Mushroom Dosa", img: mushroom },
  { name: "Mushroom Fried Rice", img: mushroomFriedRice },
  { name: "Mushroom Noodles", img: mushroomNoodles },
  { name: "Paneer Dosa", img: paneer },
];


const nonVegDishes = [
  // 🍗 Chicken
  { name: "Chicken Biryani", img: chickenBiryani },
  { name: "Chicken Lappa", img: chickenLappa },
  { name: "Chicken Majestic", img: chickenMajestic },
  { name: "Chicken Masala", img: chickenMasala },
  { name: "Chicken Special Meals", img: chickenSplMeals },
  { name: "Chicken Wings", img: chickenWings },
  { name: "Kadai Chicken", img: kadaiChicken },
  { name: "Parotta", img: paratha },

  // 🐟 Fish
  { name: "Fish Curry", img: fishCurry },
  { name: "Fish Fry", img: fishFry },
  { name: "Fish Special Meals", img: fishSplMeals },
  { name: "Nethili Fish Fry", img: nethiliFishFry },

  // 🐑 Mutton
  { name: "Mutton Biryani", img: muttonBiryani },
  { name: "Mutton Masala", img: muttonMasala },
  { name: "Mutton Special Meals", img: muttonSplMeals },
];


const comboDishes = [
  { name: "Kothu Parotta + Chicken Tikka", img: combo1 },
  { name: "Butter Kulcha + Butter Chicken Masala", img: combo2 },
  { name: "Butter Naan + Paneer Butter Masala", img: combo3 },
  { name: "Parotta + Chicken Hyderabadi", img: combo4 },
  { name: "Chicken Biryani + Boiled Egg + Tandoori (1/4)", img: combo5 },
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
