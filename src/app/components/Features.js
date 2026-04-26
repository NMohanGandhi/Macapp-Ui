export default function Features() {

  const features = [
    {
      title: "Faster Delivery",
      desc: "Accelerate your project timelines with efficient, dedicated teams.",
      icon: "⏱",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      title: "Flexible Solutions",
      desc: "Adapt to evolving needs with scalable and versatile team structures.",
      icon: "📦",
      color: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      title: "Transparent Collaboration",
      desc: "Gain full visibility and foster clear communication throughout your partnership.",
      icon: "👁",
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section className="bg-white px-6 py-12">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Unlock Your Potential with Our
        </h2>

        <h3 className="text-3xl md:text-4xl font-bold text-blue-700 mt-1">
          Extended Tech Team
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
          Our extended tech team brings a wealth of benefits designed to streamline your<br/>
operations and accelerate your success. Having built over 120+ apps, we know<br/>
what works.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {features.map((item, index) => (
            
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 text-center shadow-md hover:shadow-lg transition duration-300"
            >
              
              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div
                  className={`${item.color} w-14 h-14 flex items-center justify-center rounded-xl text-white text-xl shadow-lg`}
                >
                  {item.icon}
                </div>
              </div>

              {/* TITLE */}
              <h4 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h4>

              {/* DESC */}
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>

            </div>

          ))}
        </div>

      </div>
    </section>
  );
}