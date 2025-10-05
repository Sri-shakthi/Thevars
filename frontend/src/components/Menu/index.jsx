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
  { name: "Idly Set", img: "https://ik.imagekit.io/qbnsahjpu/assets/idly%20set%20.JPG?updatedAt=1759690985749" },
  { name: "Mini Idly", img: "https://ik.imagekit.io/qbnsahjpu/assets/Mini%20idily.JPG?updatedAt=1759690980024" },
  { name: "Dosa", img: "https://ik.imagekit.io/qbnsahjpu/assets/Dosa.JPG?updatedAt=1759690985977" },
  { name: "Masala Dosa", img: "https://ik.imagekit.io/qbnsahjpu/assets/Masala%20dosa.JPG?updatedAt=1759690987775" },
  { name: "Pongal", img: "https://ik.imagekit.io/qbnsahjpu/assets/pongal.JPG?updatedAt=1759690986145" },
  { name: "Idiyappam Set", img: "https://ik.imagekit.io/qbnsahjpu/assets/Idiyappam%20set%20.JPG?updatedAt=1759690963274" },
  { name: "Poori Set", img: "https://ik.imagekit.io/qbnsahjpu/assets/Poori%20set.JPG?updatedAt=1759690966113" },
  { name: "Chola Puri", img: "https://ik.imagekit.io/qbnsahjpu/assets/chola%20puri.JPG?updatedAt=1759690964621" },
  { name: "Chapathi Set", img: "https://ik.imagekit.io/qbnsahjpu/assets/Chapathi%20set%20.JPG?updatedAt=1759690987166" },
  { name: "Chilli Paratha", img: "https://ik.imagekit.io/qbnsahjpu/assets/Chilli%20poratha.JPG?updatedAt=1759690978285" },
  { name: "Kema Paratha", img: "https://ik.imagekit.io/qbnsahjpu/assets/Kema%20porata.JPG?updatedAt=1759690980081" },
  { name: "Paratha Set", img: "https://ik.imagekit.io/qbnsahjpu/assets/paratha%20set.JPG?updatedAt=1759690988206" },

  // 🍛 Lunch
  { name: "Veg Meals", img: "https://ik.imagekit.io/qbnsahjpu/assets/Veg%20meals%20.JPG?updatedAt=1759690969185" },
  { name: "Sambar Rice", img: "https://ik.imagekit.io/qbnsahjpu/assets/Sambar%20rice%20.JPG?updatedAt=1759690986237" },
  { name: "Curd Rice", img: "https://ik.imagekit.io/qbnsahjpu/assets/curd%20rice%20.JPG?updatedAt=1759690968890" },
  { name: "Lemon Rice", img: "https://ik.imagekit.io/qbnsahjpu/assets/Lemon%20rice%20.JPG?updatedAt=1759690980095" },
  { name: "Coconut Rice", img: "https://ik.imagekit.io/qbnsahjpu/assets/Coconut%20rice%20.JPG?updatedAt=1759690984114" },
  { name: "Veg Biryani", img: "https://ik.imagekit.io/qbnsahjpu/assets/Veg%20briyani%20.JPG?updatedAt=1759690985416" },

  // 🍽️ Dinner / Specials
  { name: "Veg Fried Rice", img: "https://ik.imagekit.io/qbnsahjpu/assets/Veg%20fried%20rice%20.JPG?updatedAt=1759690985475" },
  { name: "Veg Noodles", img: "https://ik.imagekit.io/qbnsahjpu/assets/veg%20noodles%20.JPG?updatedAt=1759690978485" },
  { name: "Mushroom Dosa", img: "https://ik.imagekit.io/qbnsahjpu/assets/Mushroom%20.JPG?updatedAt=1759690982372" },
  { name: "Mushroom Fried Rice", img: "https://ik.imagekit.io/qbnsahjpu/assets/Mushroom%20fried%20rice%20.JPG?updatedAt=1759690982123" },
  { name: "Mushroom Noodles", img: "https://ik.imagekit.io/qbnsahjpu/assets/Mushroom%20noodles%20.JPG?updatedAt=1759690982270" },
  { name: "Paneer Dosa", img: "https://ik.imagekit.io/qbnsahjpu/assets/Panner.JPG?updatedAt=1759690985918" },
];


const nonVegDishes = [
  // 🍗 Chicken
  { name: "Chicken Biryani", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/chicken%20briyani%20.JPG?updatedAt=1759690584841" },
  { name: "Chicken Lappa", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/chicken%20lappa.JPG?updatedAt=1759690582370" },
  { name: "Chicken Majestic", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/chicken%20majestic%20.JPG?updatedAt=1759690587308" },
  { name: "Chicken Masala", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/Chicken%20masala.JPG?updatedAt=1759690581910" },
  { name: "Chicken Special Meals", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/chicken%20spl%20meals%20.JPG?updatedAt=1759690587058" },
  { name: "Chicken Wings", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/Chicken%20wings%20.JPG?updatedAt=1759690562920" },
  { name: "Kadai Chicken", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/kadai%20chicken%20.JPG?updatedAt=1759690587221" },
  { name: "Parotta", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/paratha.JPG?updatedAt=1759690583754" },
  { name: "Kothu Parotta", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/kothu%20poratha.JPG?updatedAt=1759690587483"},

  // 🐟 Fish
  { name: "Fish Curry", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/fish%20curry%20.JPG?updatedAt=1759690586156" },
  { name: "Fish Fry", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/fish%20fry.JPG?updatedAt=1759690578380" },
  { name: "Fish Special Meals", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/Fish%20spl%20meals%20.JPG?updatedAt=1759690584877" },
  { name: "Nethili Fish Fry", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/nethili%20fish%20fry%20.JPG?updatedAt=1759690573237" },

  // 🐑 Mutton
  { name: "Mutton Biryani", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/mutton%20briyani%20.JPG?updatedAt=1759690579964" },
  { name: "Mutton Masala", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/Mutton%20masala.JPG?updatedAt=1759690582060" },
  { name: "Mutton Special Meals", img: "https://ik.imagekit.io/qbnsahjpu/assets/Non%20Veg/mutton%20spl%20meals%20.JPG?updatedAt=1759690586308" },
];


const comboDishes = [
  { name: "Kothu Parotta + Chicken Tikka", img: "https://ik.imagekit.io/qbnsahjpu/assets/Combo/2%20kothu%20parotta+%20chicken%20tikka.jpg?updatedAt=1759688913951" },
  { name: "Butter Kulcha + Butter Chicken Masala", img: "https://ik.imagekit.io/qbnsahjpu/assets/Combo/3%20butter%20kulcha%20+%20butter%20chicken%20masala.jpg?updatedAt=1759688941579" },
  { name: "Butter Naan + Paneer Butter Masala", img: "https://ik.imagekit.io/qbnsahjpu/assets/Combo/3%20butter%20naan%20+%20panner%20butter%20masala.jpg?updatedAt=1759688860615" },
  { name: "Parotta + Chicken Hyderabadi", img: "https://ik.imagekit.io/qbnsahjpu/assets/Combo/6%20parotta%20+%20chicken%20hyderabadi.jpg?updatedAt=1759689571904" },
  { name: "Chicken Biryani + Boiled Egg + Tandoori (1/4)", img: "https://ik.imagekit.io/qbnsahjpu/assets/Combo/chicken%20biryani+boiled%20Egg%20+%20Tandoori%201_4.jpg?updatedAt=1759688694611" },
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
            <img src={dish.img} loading="lazy" alt={dish.name} />
            <div className="overlay">
              <h3>{dish.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
