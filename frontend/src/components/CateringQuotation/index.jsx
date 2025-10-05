import React, { useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import "./index.css";


const packs = {
  briyaniPack: {
      name: "Briyani Pack - Customize",
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
          "Javvarisi Payasam (ஜவ்வரிசி பாயசம்)",
      ],
  },

  meals: {
      name: "Meals Pack - Customize",
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
          "Javvarisi Payasam (ஜவ்வரிசி பாயசம்)",
      ],
  },

  dinner: {
      name: "Dinner Pack - Customize",
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
    name: "Classic Chicken",
    starters: [
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
    name: "Classic Mutton",
    starters: [
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
    name: "Silver",
    starters: [
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
    name: "Gold",
    starters: [
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
    name: "Diamond",
    starters: [
        "Mutton Soup (மட்டன் சூப்)",
        "Chicken 65 / Chicken Gravy (60gm)",
        "Viral Fish Fry (1 No.)",
        "Prawn Thokku (இறால் தோக்கு) 30gm",
        "Mutton Sukka (மட்டன் சுக்கா) 50gm",
    ],
    main: [
        "Mutton Biriyani (100 gm mutton)",
        "Egg Masala (1 No.)",
        "Sadham (சாதம்)",
        "Rasam (ரசம்)",
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
comfort : {
  name: "Comfort Classic - Veg",
  category: "special",
  items: [
    "கேசரி / Kesari",
    "இட்லி / Idli - 3 pc",
    "பொங்கல் / Pongal",
    "வடை / Vada",
    "காபி / Coffee",
    "சாம்பார் / Sambar",
    "தேங்காய் சட்னி / Coconut Chutney",
    "தண்ணீர் பாட்டில் / Water bottle"
  ]
},
premium: {
  name: "Premium Indulgence - Veg",
  category: "special",
  items: [
    "கேசரி / Beetroot Kesari",
    "இட்லி / Idli - 2 pc",
    "பொங்கல் / Pongal",
    "போடி ஊத்தாப்பம் / Podi Uthappam",
    "பூரி / Poori",
    "பூரி கிழங்கு / Poori Kilangu",
    "இடியாப்பம் / Idiyappam",
    "பால் குருமா / Paal Kuruma",
    "வடை / Vada",
    "காபி / Coffee",
    "சாம்பார் / Sambar",
    "சட்னி / Chutney (2)",
    "தண்ணீர் பாட்டில் / Water bottle"
  ]
},
luxury: {
  name: "Luxury Platter - Veg",
  category: "special",
  items: [
    "அசோகா அல்வா / Ashoka Alwa",
    "மினி ஜாங்கிரி / Mini Jangiri",
    "வடகறி / Vadacurry",
    "இட்லி / Idli - 2 pc",
    "பொங்கல் / Pongal",
    "பூரி / Poori",
    "பூரி கிழங்கு / Poori Kilangu",
    "ஆனியன் ஊத்தாப்பம் / Onion Uthappam",
    "இடியாப்பம் / Idiyappam",
    "பால் குருமா / Paal Kuruma",
    "சேமியா கிச்சடி / Semiya Kichadi",
    "வடை / Vada",
    "சாம்பார் / Sambar",
    "தேங்காய் சட்னி / Coconut Chutney",
    "தக்காளி சட்னி / Tomato Chutney",
    "தண்ணீர் பாட்டில் / Water bottle"
  ]
}
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

    const GOOGLE_FORM_ACTION_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLSczZTHELkyIBe1hODphjx1xzoBePl-mayl6AODDpHfTcsBtww/formResponse";
    const formToSubmit = new FormData();

    formToSubmit.append("entry.899158893", formData.name);
    formToSubmit.append("entry.1901871314", formData.mobile);
    formToSubmit.append("entry.2011433870", formData.eventDate);
    formToSubmit.append("entry.872583325", formData.eventType);
    formToSubmit.append("entry.1156745552", formData.guests);
    formToSubmit.append("entry.1956964136", packs[formData.selectedPack]?.name);
    formToSubmit.append(
      "entry.1942749611",
      formData.customDishes.join(", ")
    );

    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        body: formToSubmit,
        mode: "no-cors",
      });
      setIsSubmitted(true);
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
      console.error(error);
      alert("Failed to submit quotation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
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
  };

  // Helper to render pack details (same as your code)
  const renderPackDetails = () => {
    if (!formData.selectedPack) return null;

    const selectedPackData = packs[formData.selectedPack];

    if (selectedPackData.category === "special") {
      return (
        <div>
          <h3>Menu Items</h3>
          <ul>
            {selectedPackData.items.map((dish, i) => (
              <li key={i}>{dish}</li>
            ))}
          </ul>
        </div>
      );
    }

    return Object.entries(selectedPackData).map(([category, dishes]) =>
      Array.isArray(dishes) && dishes.length > 0 ? (
        <div key={category}>
          <h3>{category.toUpperCase()}</h3>
          {["briyaniPack", "meals", "dinner"].includes(formData.selectedPack)
            ? dishes.map((dish, i) => (
                <label key={i} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.customDishes.includes(dish)}
                    onChange={() => handleCheckboxChange(dish)}
                  />
                  {dish}
                </label>
              ))
            : dishes.map((dish, i) => <li key={i}>{dish}</li>)}
        </div>
      ) : null
    );
  };

  return (
    <div className="catering-section">
      <h1 className="catering-title">Request Catering Quotation</h1>

      {/* SUBMITTING STATE */}
      {isSubmitting && (
        <div className="center-wrap">
          <div className="spinner"></div>
          <p className="center-text">Submitting your quotation...</p>
        </div>
      )}

      {/* SUCCESS STATE */}
      {isSubmitted && !isSubmitting && (
        <div className="center-wrap">
          <p className="success-text">
            Thank you! Your quotation was submitted successfully.
          </p>
          <DotLottieReact
            src="https://lottie.host/d059a4a7-12af-43ab-8aa7-7fad534caa7f/HsFEsfoSHn.lottie"
            loop
            autoplay
          />
          <button className="submit-btn secondary" onClick={handleResetForm}>
            Submit Another Quotation
          </button>
        </div>
      )}

      {/* IDLE STATE */}
      {!isSubmitting && !isSubmitted && (
        <form className="catering-form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <label>Mobile Number</label>
          <input
            required
            type="tel"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
          />

          <label>Event Date</label>
          <input
            required
            type="date"
            value={formData.eventDate}
            onChange={(e) =>
              setFormData({ ...formData, eventDate: e.target.value })
            }
          />

          <label>Event Type</label>
          <input
            required
            type="text"
            value={formData.eventType}
            onChange={(e) =>
              setFormData({ ...formData, eventType: e.target.value })
            }
          />

          <label>No. of Guests</label>
          <input
            required
            type="number"
            value={formData.guests}
            onChange={(e) =>
              setFormData({ ...formData, guests: e.target.value })
            }
          />

          <label>Select Package</label>
          <select
            required
            value={formData.selectedPack}
            className="select-input"
            onChange={(e) =>
              setFormData({
                ...formData,
                selectedPack: e.target.value,
                customDishes: [],
              })
            }
          >
            <option value="">-- Select --</option>
            {Object.entries(packs).map(([key, value]) => (
              <option key={key} value={key}>
                {value.name}
              </option>
            ))}
          </select>

          {formData.selectedPack && (
            <div className="pack-display">{renderPackDetails()}</div>
          )}

          <button type="submit" className="submit-btn">
            Submit Quotation
          </button>
        </form>
      )}
    </div>
  );
}