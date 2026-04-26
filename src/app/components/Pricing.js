"use client";
import { useState } from "react";

export default function Pricing() {
  const [activeCard, setActiveCard] = useState(1);
  const [activeTab, setActiveTab] = useState("ios");

  const tabs = [
    { id: "ios", label: "iOS", icon: "/Assets/Prices/Logo.svg" },
    { id: "android", label: "Android", icon: "/Assets/Prices/2.svg" },
    { id: "web", label: "Web", icon: "/Assets/Prices/5.svg" },
    { id: "all", label: "All", icon: "/Assets/Prices/4.svg" },
  ];

  const plans = [
    {
      title: "5 lakhs",
      desc: "3 Years of Experience Team Members",
      features: ["3 Web Developers", "Weekly Reports", "Email Support"],
      img: "/Assets/Prices/card1.svg",
    },
    {
      title: "7 lakhs",
      desc: "3 - 5 Years of Experience Team Members",
      features: ["3 Android Developers", "Weekly Reports", "Email Support"],
      img: "/Assets/Prices/card2.svg",
      popular: true,
    },
    {
      title: "9 lakhs",
      desc: "5 & Above Years of Experience Team Members",
      features: [
        "3 iOS Developers",
        "Weekly Reports",
        "Email Support",
        "Dedicated PM & Architect",
      ],
      img: "/Assets/Prices/card3.svg",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Transparent &{" "}
          <span className="text-blue-600">Flexible Packages</span>
        </h2>

        <p className="text-gray-600 mt-3">
          Choose the perfect package for your needs. Scale up or down with 30 days notice.
        </p>

        {/* 🔥 PREMIUM TABS */}
        <div className="mt-10">
          <div className="w-full bg-gray-100 rounded-2xl p-3 flex items-center">

            {tabs.map((tab, i) => (
              <div key={tab.id} className="flex items-center flex-1">

                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-xl transition-all duration-300 font-medium text-base
                  
                  ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-md scale-[1.02]"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {/* ✅ BIGGER ICON */}
                  <img
                    src={tab.icon}
                    alt={tab.label}
                    className="w-8 h-8 object-contain"
                  />
                  {tab.label}
                </button>

                {i !== tabs.length - 1 && (
                  <div className="w-px h-8 bg-gray-300 mx-3"></div>
                )}

              </div>
            ))}

          </div>
        </div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setActiveCard(index)}
              className={`relative cursor-pointer rounded-2xl p-6 transition duration-300
              
              ${
                activeCard === index
                  ? "border-2 border-blue-500 bg-white shadow-lg"
                  : "border border-gray-200 bg-white shadow-sm"
              }`}
            >

              {plan.popular && (
                <div className="absolute -top-3 right-4 bg-black text-white text-xs px-3 py-1 rounded-md">
                  Most Purchased 👑
                </div>
              )}

              {/* ✅ BIGGER IMAGE */}
              <div className="flex justify-center mb-6">
                <img
                  src={plan.img}
                  alt="plan"
                  className="w-28 h-28 object-contain drop-shadow-lg"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {plan.title}
                <span className="text-sm text-gray-500"> /month</span>
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {plan.desc}
              </p>

              <ul className="mt-4 space-y-2 text-left">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex gap-2 text-gray-700">
                    <span className="text-green-500">✔</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Request Proposal
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}