// CateringQuotation.jsx
import React, { useState } from "react";
import "./index.css";

const packs = {
  pack1: {
    name: "Pack 1",
    dessert: ["Bread Halwa (பிரட் ஹல்வா)"],
    main: [
      "Chicken Biriyani (சிக்கன் பிரியாணி) (2pc Chicken 50gm)",
      "Boiled Egg (1 No.)",
      "Chicken 65 / Chicken Gravy (60gm)",
      "Thaalcha (தால்ச்சா)",
      "Curd Rice (தயிர் சாதம்)",
    ],
    sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
    starters: [],
  },
  pack2: {
    name: "Pack 2",
    dessert: ["Bread Halwa (பிரட் ஹல்வா)"],
    main: [
      "Mutton Biriyani (மட்டன் பிரியாணி) 100 gm mutton",
      "Egg Masala (முட்டை மசாலா) - 1 No.",
      "Chicken 65 / Chicken Gravy (60gm)",
      "Thaalcha (தால்ச்சா)",
      "Curd Rice (தயிர் சாதம்)",
    ],
    sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
    starters: [],
  },
  pack3: {
    name: "Pack 3",
    dessert: ["Bread Halwa (பிரட் ஹல்வா)"],
    main: [
      "Mutton Biriyani (100 gm mutton)",
      "Egg Masala (1 No.)",
      "Chicken 65 / Chicken Gravy (60gm)",
      "Mutton Soup (மட்டன் சூப்)",
      "Thaalcha (தால்ச்சா)",
      "Curd Rice (தயிர் சாதம்)",
    ],
    sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
    starters: [],
  },
  pack4: {
    name: "Pack 4",
    dessert: [
      "Bread Halwa Or Jam (பிரட் ஹல்வா Or ஜாம்)",
      "Mixed Fruits and Nuts Jam (பழ ஜாம்)",
      "Phirni Payasam (பிர்னி பாயாசம்)",
    ],
    main: [
      "Mutton Soup (மட்டன் சூப்)",
      "Mutton Biriyani (100 gm mutton)",
      "Egg Masala (1 No.)",
      "Chicken 65 / Chicken Gravy (60gm)",
      "Viral Fish Fry (1 No.)",
      "Thaalcha (தால்ச்சா)",
      "Curd Rice (தயிர் சாதம்)",
    ],
    sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
    starters: [],
  },
  pack5: {
    name: "Pack 5",
    dessert: [
      "Bread Halwa Or Jam (பிரட் ஹல்வா Or ஜாம்)",
      "Mixed Fruits and Nuts Jam (பழ ஜாம்)",
      "Rasamalai (ரசமலாய்)",
      "Phirni Payasam (பிர்னி பாயாசம்)",
    ],
    main: [
      "Mutton Soup (மட்டன் சூப்)",
      "Mutton Biriyani (100 gm mutton)",
      "Egg Masala (1 No.)",
      "Chicken 65 / Chicken Gravy (60gm)",
      "Viral Fish Fry (1 No.)",
      "Prawn Thokku (இறால் தோக்கு) 30gm",
      "Mutton Sukka (மட்டன் சுக்கா) 50gm",
      "Sadham (சாதம்)",
      "Rasam (ரசம்)",
      "Butter Milk (மோர்)",
    ],
    sides: ["Oorukai (ஊறுகாய்)"],
    starters: [],
  },
};

export default function CateringQuotation() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    eventDate: "",
    eventType: "",
    guests: "",
    selectedPack: "",
    customDishes: [],
    manualDishes: [],
  });

  const [manualDish, setManualDish] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Collect all dishes across packs for custom pack (no duplicates)
  const allCategories = { Starters: [], Main: [], Sides: [], Dessert: [] };
  Object.values(packs).forEach((pack) => {
    Object.keys(pack).forEach((cat) => {
      if (Array.isArray(pack[cat])) {
        if (cat.toLowerCase() === "starters") allCategories.Starters.push(...pack[cat]);
        if (cat.toLowerCase() === "main") allCategories.Main.push(...pack[cat]);
        if (cat.toLowerCase() === "sides") allCategories.Sides.push(...pack[cat]);
        if (cat.toLowerCase() === "dessert") allCategories.Dessert.push(...pack[cat]);
      }
    });
  });
  Object.keys(allCategories).forEach(
    (cat) => (allCategories[cat] = [...new Set(allCategories[cat])])
  );

  const handleCheckboxChange = (dish) => {
    setFormData((prev) => {
      const exists = prev.customDishes.includes(dish);
      return {
        ...prev,
        customDishes: exists
          ? prev.customDishes.filter((d) => d !== dish)
          : [...prev.customDishes, dish],
      };
    });
  };

  const addManualDish = () => {
    if (manualDish.trim() && !formData.manualDishes.includes(manualDish)) {
      setFormData((prev) => ({
        ...prev,
        manualDishes: [...prev.manualDishes, manualDish],
      }));
      setManualDish("");
    }
  };

  const removeManualDish = (dish) => {
    setFormData((prev) => ({
      ...prev,
      manualDishes: prev.manualDishes.filter((d) => d !== dish),
    }));
  };

//   const handleSubmit = async () => {
//     const selectedPackData =
//       formData.selectedPack === "Custom"
//         ? {
//             customDishes: formData.customDishes,
//             manualDishes: formData.manualDishes,
//           }
//         : packs[formData.selectedPack];
  
//     const finalData = { ...formData, selectedPackData };
  
//     try {
//       // 1️⃣ Send data to Google Sheet (replace YOUR_API_ENDPOINT with your Sheet API URL)
//       await fetch("YOUR_GOOGLE_SHEET_API_ENDPOINT", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(finalData),
//       });
  
//       // 2️⃣ Send WhatsApp notification to restaurant owner
//       await fetch("YOUR_BACKEND_API_SEND_WHATSAPP", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           to: "whatsapp:+91 6383892024", // restaurant owner number
//           message: `New Catering Quotation Request:\nName: ${finalData.name}\nMobile: ${finalData.mobile}\nEvent Date: ${finalData.eventDate}\nGuests: ${finalData.guests}\nSelected Pack: ${formData.selectedPack}`,
//         }),
//       });
  
//       alert("Quotation submitted successfully!");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to submit quotation. Please try again.");
//     }
//   };
  
// Example in a React component
const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);
  
    const selectedPackData =
      formData.selectedPack === "Custom"
        ? { customDishes: formData.customDishes, manualDishes: formData.manualDishes }
        : packs[formData.selectedPack];
  
    const finalData = { ...formData, selectedPackData };
  
    try {
      // 1️⃣ Send to backend proxy to avoid CORS
      const res = await fetch("/api/submitQuotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      const result = await res.json();
      if (res.ok && result.status === "success") {
        setIsSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }
  
      // 2️⃣ Open WhatsApp
      const ownerNumber = "916383892024"; // restaurant owner number without +
      const message = encodeURIComponent(
        `Hello, I'd like a catering quote.
  Name: ${finalData.name}
  Mobile: ${finalData.mobile}
  Event Date: ${finalData.eventDate}
  Event Type: ${finalData.eventType}
  Guests: ${finalData.guests}
  Selected Pack: ${formData.selectedPack}`
      );
  
      window.open(`https://wa.me/${ownerNumber}?text=${message}`, "_blank");
    } catch (error) {
      alert("Failed to submit quotation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="catering-section">
      <h1 className="catering-title">Request Catering Quotation</h1>

      {/* User Info */}
      <div className="catering-form">
        <label>Full Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <label>Mobile Number</label>
        <input
          type="tel"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />

        <label>Event Date</label>
        <input
          type="date"
          value={formData.eventDate}
          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
        />

        <label>Event Type</label>
        <input
          type="text"
          value={formData.eventType}
          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
        />

        <label>No. of Guests</label>
        <input
          type="number"
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        />

        {/* Pack Selection */}
        <label>Select Package</label>
        <select
          value={formData.selectedPack}
          onChange={(e) => setFormData({ ...formData, selectedPack: e.target.value })}
        >
          <option value="">-- Select --</option>
          {Object.keys(packs).map((pack) => (
            <option key={pack} value={pack}>
              {packs[pack].name}
            </option>
          ))}
          <option value="Custom">Custom Pack</option>
        </select>

        {/* Show selected pack dishes */}
        {formData.selectedPack && formData.selectedPack !== "Custom" && (
          <div className="pack-display">
            {Object.entries(packs[formData.selectedPack]).map(
              ([category, dishes]) =>
                Array.isArray(dishes) && dishes.length > 0 ? (
                  <div key={category}>
                    <h3>{category.toUpperCase()}</h3>
                    <ul>
                      {dishes.map((dish, i) => (
                        <li key={i}>{dish}</li>
                      ))}
                    </ul>
                  </div>
                ) : null
            )}
          </div>
        )}

        {/* Custom Pack */}
        {formData.selectedPack === "Custom" && (
          <div className="custom-pack">
            <h3>Choose Your Dishes</h3>
            {Object.keys(allCategories).map((cat, idx) => (
              <details key={idx}>
                <summary>{cat}</summary>
                {allCategories[cat].map((dish, i) => (
                  <label key={i} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.customDishes.includes(dish)}
                      onChange={() => handleCheckboxChange(dish)}
                    />
                    {dish}
                  </label>
                ))}
              </details>
            ))}

            <div className="manual-add">
              <input
                type="text"
                placeholder="Add custom dish"
                value={manualDish}
                onChange={(e) => setManualDish(e.target.value)}
              />
              <button type="button" onClick={addManualDish}>
                Add
              </button>
            </div>
            <ul>
              {formData.manualDishes.map((dish, i) => (
                <li key={i}>
                  {dish}
                  <button type="button" onClick={() => removeManualDish(dish)}>
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {isSubmitted && (
          <div className="submission-success" style={{ marginTop: 16 }}>
            <p>Thank you! Your quotation was submitted successfully.</p>
            <button
              type="button"
              onClick={() => {
                setFormData({
                  name: "",
                  mobile: "",
                  eventDate: "",
                  eventType: "",
                  guests: "",
                  selectedPack: "",
                  customDishes: [],
                  manualDishes: [],
                });
                setIsSubmitted(false);
              }}
            >
              Get another quotation
            </button>
          </div>
        )}

        <button className="submit-btn" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Quotation"}
        </button>
      </div>
    </div>
  );
}
