// CateringQuotation.jsx
import React, { useState } from "react";
import "./index.css";


const packs = {
  briyaniPack: {
      name: "Briyani Pack",
      starters: [
          "Chicken 65 (50gm)",
          "Chicken Gravy (60gm)",
          "Chicken Chettinad Gravy (60gm)",
          "Pallipalayam Chicken (60gm)",
          "Nattu Kozhi Peratal (60gm)",
          "Viral Fish Fry (1 No.)",
          "Vanjaram Fish Fry (1 No.)",
          "Kendai Meen Fry (1 No.)",
          "Prawn Thokku (30gm)",
          "Mutton Sukka (50gm)",
          "Kadai 65 1/2",
      ],
      main: [
          // Mutton Soup is listed here in the original 'main' but is often a starter/appetizer
          "Mutton Soup (மட்டன் சூப்)", 
          "Mutton Biriyani (100 gm mutton)",
          "Chicken Biriyani (2pc Chicken 50gm)",
          "Boiled Egg (வேகவைத்த முட்டை) - 1 No.",
          "Egg Masala (முட்டை மசாலா) - 1 No.",
          "Karandi Omelette (கரண்டி ஆம்லெட்)",
          "Sadham (சாதம்)",
          "Rasam (ரசம்)",
          "Butter Milk (மோர்)",
          "Curd Rice (தயிர் சாதம்)",
      ],
      sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
      dessert: [
          "Bread Halwa Or Jam (பிரட் ஹல்வா Or ஜாம்)",
          "Mixed Fruits and Nuts Jam (பழ ஜாம்)",
          "Rasamalai (ரசமலாய்)",
          "Phirni Payasam (பிர்னி பாயாசம்)",
          "Kauni Rice Payasam (கோவ்னி அரிசி பாயசம்)",
          "Wheat Samba Payasam (சம்பா கோதுமை பாயசம்)",
          "Javvarisi Payasam (ஜவ்வரிசி பாயாசம்)",
      ],
  },

  meals: {
      name: "Meals Pack",
      starters: [
          "Chicken 65 (50gm)",
          "Chicken Gravy (60gm)",
          "Chicken Chettinad Gravy (60gm)",
          "Pallipalayam Chicken (60gm)",
          "Nattu Kozhi Peratal (60gm)",
          "Viral Fish Fry (1 No.)",
          "Vanjaram Fish Fry (1 No.)",
          "Kendai Meen Fry (1 No.)",
          "Prawn Thokku (30gm)",
          "Mutton Sukka (50gm)",
          "Kadai 65 1/2",
      ],
      main: [
          "Mutton Kuzhambu (70 gm)",
          "Viral Fish Curry (1 pc)",
          "Vanjaram Fish Curry (1 pc)",
          "Kendai Fish Curry (1 pc)",
          "Country Chicken Curry (70 gm)",
          "Prawn Gravy (30 gm)",
          "Kadai Gravy (1/2)",
          "Boiled Egg (1 No.)",
          "Egg Masala (1 No.)",
          "Karandi Omelette",
          "Sadham (சாதம்)",
          "Rasam (ரசம்)",
          "Butter Milk (மோர்)",
      ],
      sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
      dessert: [
          "Phirni Payasam (பிர்னி பாயாசம்)",
          "Kauni Rice Payasam (கோவ்னி அரிசி பாயசம்)",
          "Wheat Samba Payasam (சம்பா கோதுமை பாயசம்)",
          "Javvarisi Payasam (ஜவ்வரிசி பாயாசம்)",
      ],
  },

  dinner: {
      name: "Dinner Pack",
      starters: [
          "Country Chicken Curry (70gm)",
          "Prawn Gravy (30gm)",
          "Kadai Gravy (1/2)",
          "Boiled Egg (1 No.)",
          "Egg Masala (1 No.)",
          "Karandi Omelette",
          "Chicken 65 (50gm)",
          "Chicken Gravy (60gm)",
          "Chicken Chettinad Gravy (60gm)",
          "Pallipalayam Chicken (60gm)",
          "Nattu Kozhi Peratal (60gm)",
          "Viral Fish Fry (1 No.)",
          "Vanjaram Fish Fry (1 No.)",
          "Kendai Meen Fry (1 No.)",
          "Prawn Thokku (30gm)",
          "Mutton Sukka (50gm)",
          "Kadai 65 1/2",
      ],
      main: [
          "Idli",
          "Chapathi",
          "Chilli Parotta",
          "Romaniya Rotti",
          "Butter Naan",
          "Chicken Kothu Parotta",
          "Mutton Kothu Parotta",
          "Prawn Kothu Parotta",
          "Mix Kothu Parotta",
          "Egg Kothu Parotta",
          "Chicken Dosa",
          "Mutton Dosa",
          "Podi Uthappam",
          "Onion Uthappam",
          "Chicken Fried Rice",
          "Mutton Fried Rice",
          "Prawn Fried Rice",
          "Egg Fried Rice",
          "Chicken Noodles",
          "Mutton Noodles",
          "Prawn Noodles",
          "Egg Noodles",
          "Sadham (சாதம்)",
          "Rasam (ரசம்)",
          "Butter Milk (மோர்)",
      ],
      sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
      dessert: [
          "Bread Halwa (பிரட் ஹல்வா)",
          "Kesari",
          "Fruit Kesari",
          "Ashoka",
          "Rasamalai (ரசமலாய்)",
          "பாதாம் பால்",
          "கற்கண்டு பால்",
      ],
  },

  pack1: {
    name: "Pack 1",
    starters: [
        // Moved from 'main':
        "Chicken 65 / Chicken Gravy (60gm)", 
    ],
    main: [
        "Chicken Biriyani (சிக்கன் பிரியாணி) (2pc Chicken 50gm)",
        "Boiled Egg (1 No.)",
        "Thaalcha (தால்ச்சா)",
        "Curd Rice (தயிர் சாதம்)",
    ],
    sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
    dessert: ["Bread Halwa (பிரட் ஹல்வா)"],
},

pack2: {
    name: "Pack 2",
    starters: [
        // Moved from 'main':
        "Chicken 65 / Chicken Gravy (60gm)", 
    ],
    main: [
        "Mutton Biriyani (மட்டன் பிரியாணி) 100 gm mutton",
        "Egg Masala (முட்டை மசாலா) - 1 No.",
        "Thaalcha (தால்ச்சா)",
        "Curd Rice (தயிர் சாதம்)",
    ],
    sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
    dessert: ["Bread Halwa (பிரட் ஹல்வா)"],
},

pack3: {
    name: "Pack 3",
    starters: [
        // Moved from 'main':
        "Mutton Soup (மட்டன் சூப்)",
        "Chicken 65 / Chicken Gravy (60gm)",
    ],
    main: [
        "Mutton Biriyani (100 gm mutton)",
        "Egg Masala (1 No.)",
        "Thaalcha (தால்ச்சா)",
        "Curd Rice (தயிர் சாதம்)",
    ],
    sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
    dessert: ["Bread Halwa (பிரட் ஹல்வா)"],
},

pack4: {
    name: "Pack 4",
    starters: [
        // Moved from 'main':
        "Mutton Soup (மட்டன் சூப்)",
        "Chicken 65 / Chicken Gravy (60gm)",
        "Viral Fish Fry (1 No.)",
    ],
    main: [
        "Mutton Biriyani (100 gm mutton)",
        "Egg Masala (1 No.)",
        "Thaalcha (தால்ச்சா)",
        "Curd Rice (தயிர் சாதம்)",
    ],
    sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
    dessert: [
        "Bread Halwa Or Jam (பிரட் ஹல்வா Or ஜாம்)",
        "Mixed Fruits and Nuts Jam (பழ ஜாம்)",
        "Phirni Payasam (பிர்னி பாயாசம்)",
    ],
},

pack5: {
    name: "Pack 5",
    starters: [
        // Moved from 'main':
        "Mutton Soup (மட்டன் சூப்)",
        "Chicken 65 / Chicken Gravy (60gm)",
        "Viral Fish Fry (1 No.)",
        "Prawn Thokku (இறால் தோக்கு) 30gm",
        "Mutton Sukka (மட்டன் சுக்கா) 50gm",
    ],
    main: [
        "Mutton Biriyani (100 gm mutton)",
        "Egg Masala (1 No.)",
        "Sadham (சாதம்)", // Rice items are generally 'main'
        "Rasam (ரசம்)",   // Rasam and Buttermilk are common post-meal/main additions
        "Butter Milk (மோர்)",
    ],
    sides: ["Oorukai (ஊறுகாய்)", "Onion Pacchadi (வெங்காய பச்சடி)"],
    dessert: [
        "Bread Halwa Or Jam (பிரட் ஹல்வா Or ஜாம்)",
        "Mixed Fruits and Nuts Jam (பழ ஜாம்)",
        "Rasamalai (ரசமலாய்)",
        "Phirni Payasam (பிர்னி பாயாசம்)",
    ],
},
};

const allCategories = {
  starters: [
      "Chicken 65 (50gm)",
      "Chicken Gravy (60gm)",
      "Chicken Chettinad Gravy (60gm)",
      "Pallipalayam Chicken (60gm)",
      "Nattu Kozhi Peratal (60gm)",
      "Viral Fish Fry (1 No.)",
      "Vanjaram Fish Fry (1 No.)",
      "Kendai Meen Fry (1 No.)",
      "Prawn Thokku (30gm)",
      "Mutton Sukka (50gm)",
      "Kadai 65 1/2",
      "Country Chicken Curry (70gm)", // Found in 'dinner' starters (though often a main)
      "Prawn Gravy (30gm)",          // Found in 'dinner' starters (though often a main)
      "Kadai Gravy (1/2)",           // Found in 'dinner' starters (though often a main)
      "Boiled Egg (1 No.)",          // Found in 'dinner' starters (though often a main)
      "Egg Masala (1 No.)",          // Found in 'dinner' starters (though often a main)
      "Karandi Omelette",             // Found in 'dinner' starters (though often a main)
  ],
  main: [
      "Mutton Soup (மட்டன் சூப்)",
      "Mutton Biriyani (100 gm mutton)",
      "Chicken Biriyani (2pc Chicken 50gm)",
      "Sadham (சாதம்)",
      "Rasam (ரசம்)",
      "Butter Milk (மோர்)",
      "Curd Rice (தயிர் சாதம்)",
      "Mutton Kuzhambu (70 gm)",
      "Viral Fish Curry (1 pc)",
      "Vanjaram Fish Curry (1 pc)",
      "Kendai Fish Curry (1 pc)",
      "Country Chicken Curry (70 gm)",
      "Prawn Gravy (30 gm)",
      "Kadai Gravy (1/2)",
      "Idli",
      "Chapathi",
      "Chilli Parotta",
      "Romaniya Rotti",
      "Butter Naan",
      "Chicken Kothu Parotta",
      "Mutton Kothu Parotta",
      "Prawn Kothu Parotta",
      "Mix Kothu Parotta",
      "Egg Kothu Parotta",
      "Chicken Dosa",
      "Mutton Dosa",
      "Podi Uthappam",
      "Onion Uthappam",
      "Chicken Fried Rice",
      "Mutton Fried Rice",
      "Prawn Fried Rice",
      "Egg Fried Rice",
      "Chicken Noodles",
      "Mutton Noodles",
      "Prawn Noodles",
      "Egg Noodles",
      "Thaalcha (தால்ச்சா)",
  ],
  dessert: [
      "Bread Halwa Or Jam (பிரட் ஹல்வா Or ஜாம்)",
      "Mixed Fruits and Nuts Jam (பழ ஜாம்)",
      "Rasamalai (ரசமலாய்)",
      "Phirni Payasam (பிர்னி பாயாசம்)",
      "Kauni Rice Payasam (கோவ்னி அரிசி பாயசம்)",
      "Wheat Samba Payasam (சம்பா கோதுமை பாயசம்)",
      "Javvarisi Payasam (ஜவ்வரிசி பாயாசம்)",
      "Bread Halwa (பிரட் ஹல்வா)", // Unique version of Bread Halwa
      "Kesari",
      "Fruit Kesari",
      "Ashoka",
      "பாதாம் பால்",
      "கற்கண்டு பால்",
  ],
  sides: [
      "Oorukai (ஊறுகாய்)",
      "Onion Pacchadi (வெங்காய பச்சடி)",
  ]
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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Collect all dishes across packs for Custom pack (no duplicates)
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ---- SEND TO BACKEND / GOOGLE FORM ----
      const payload = {
        ...formData,
        customDishes: formData.customDishes.join(", "),
      };

      const res = await fetch("/api/submitQuotation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log("Form response:", result);

      if (res.ok && result.status === "success") {
        setIsSubmitted(true);
      } else {
        alert("Submission failed. Please try again.");
      }

      // ---- SEND TO WHATSAPP ----
        const ownerNumber = "918148862142"; // ✅ only digits, no +
        const message = encodeURIComponent(
        `Hello, I'd like a catering quote.\n\n` +
          `Name: ${formData.name}\n` +
          `Mobile: ${formData.mobile}\n` +
          `Event Date: ${formData.eventDate}\n` +
          `Event Type: ${formData.eventType}\n` +
          `Guests: ${formData.guests}\n` +
          `Selected Pack: ${formData.selectedPack}\n` +
          (formData.customDishes.length > 0
            ? `Custom Dishes: ${formData.customDishes.join(", ")}`
            : "")
      );

      // More reliable than window.open
      window.location.href = `https://wa.me/${ownerNumber}?text=${message}`;
    } catch (error) {
      console.error("Submit error:", error);
      alert("Failed to submit quotation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setIsSubmitted(false);

  //   try {
  //     // Send to backend
  //     const res = await fetch("/api/submitQuotation", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const result = await res.json();
  //     console.log(result, "response");

  //     if (res.ok && result.status === "success") {
  //       setIsSubmitted(true);
  //     } else {
  //       alert("Submission failed. Please try again.");
  //     }

  //     // WhatsApp message
  //     const ownerNumber = "918148862142"; // ✅ only digits, no +
  //     const message = encodeURIComponent(
  //       `Hello, I'd like a catering quote.\n\n` +
  //         `Name: ${formData.name}\n` +
  //         `Mobile: ${formData.mobile}\n` +
  //         `Event Date: ${formData.eventDate}\n` +
  //         `Event Type: ${formData.eventType}\n` +
  //         `Guests: ${formData.guests}\n` +
  //         `Selected Pack: ${formData.selectedPack}\n` +
  //         (formData.customDishes.length > 0
  //           ? `Custom Dishes: ${formData.customDishes.join(", ")}`
  //           : "")
  //     );
  //     window.location.href = `https://wa.me/${ownerNumber}?text=${message}`;
  //   } catch (error) {
  //     console.error(error);
  //     alert("Failed to submit quotation. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <div className="catering-section">
      <h1 className="catering-title">Request Catering Quotation</h1>

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
          className="select-input"
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
                  <label  key={i} className="checkbox-label">
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
          </div>
        )}

        {isSubmitted && (
          <div className="submission-success" style={{ marginTop: 16 }}>
            <p>Thank you! Your quotation was submitted successfully.</p>
            <button
              type="button"
              className="submit-btn"
              onClick={() => {
                setFormData({
                  name: "",
                  mobile: "",
                  eventDate: "",
                  eventType: "",
                  guests: "",
                  selectedPack: "",
                  customDishes: [],
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
