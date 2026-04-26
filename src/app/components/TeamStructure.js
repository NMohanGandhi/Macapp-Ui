export default function TeamStructure() {
  const cards = [
    {
      title: "Core Development",
      desc: "Essential team members for your project foundation",
      icon: "💻",
      color: "bg-gradient-to-r from-blue-500 to-purple-500",
      tags: [
        "QA Engineer",
        "UI/UX Designer",
        "Project Manager",
        "iOS Developer",
        "Android Developer",
        "Web Developer",
      ],
    },
    {
      title: "Specialized Roles",
      desc: "Expert professionals for advanced requirements",
      icon: "👥",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      tags: [
        "Business Analyst",
        "System Architect",
        "Backend Developer",
        "DevOps Engineer",
      ],
    },
    {
      title: "Advanced Tech",
      desc: "Cutting-edge specialists for innovation",
      icon: "⚡",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      tags: [
        "AI/ML Specialists",
        "Data Scientists",
        "Cloud Architects",
        "Security Experts",
      ],
    },
  ];

  return (
    <section className="bg-white px-6 py-14">
      
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Complete <span className="text-blue-600">Team Structure</span>
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          From core development to specialized expertise, we provide complete teams tailored to your project requirements.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {cards.map((item, index) => (
            
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition duration-300"
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
              <h4 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h4>

              {/* DESC */}
              <p className="text-gray-600 text-sm mt-2">
                {item.desc}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          ))}
        </div>

        {/* BOTTOM BOX */}
        <div className="bg-blue-100 rounded-xl p-6 mt-12">
          <h4 className="font-semibold text-gray-900">
            All roles work seamlessly with your existing team
          </h4>
          <p className="text-gray-600 text-sm mt-2">
            Our extended team members integrate directly into your workflow, using your tools, processes, and communication channels for maximum efficiency.
          </p>
        </div>

      </div>
    </section>
  );
}