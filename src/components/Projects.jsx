import React from "react";
import { Github, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import shopfu from '../assets/images/projects/shopFu.png';
import jchaw from '../assets/images/projects/jchaw.png';
import jchawDash from '../assets/images/projects/jchaw-dashboard.png';
import teache from '../assets/images/projects/teache.png';
import curr from '../assets/images/projects/curr.png';
import bluetv from '../assets/images/projects/bluetv.png';

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: "J-Chaw Shopping",
      description:
        "J-Chaw offers a stylish online shopping experience for gold and jewelry lovers. Browse a wide range of premium rings, necklaces, and earrings, and enjoy easy, secure shopping",
      tags: ["react", "typescript", "tailwind css", 'rest api', 'Laravel'],
      links: {
        github: "https://github.com/samsouta/jchaw-shopping-frontend",
        demo: "https://j-chaw.netlify.app/home",
      },
      image: jchaw,
      featured: true,
    },
    {
      title: "FeatureShop UI",
      description:
        "Feautreshop offers a sleek, easy-to-use design with vibrant visuals and smooth navigation. Shop effortlessly across all devices with a simple, fast checkout process",
      tags: ["react", "typescript", "tailwind css"],
      links: {
        github: "https://github.com/samsouta/chaw-shopping",
        demo: "https://chaw-shopping.netlify.app/",
      },
      image: shopfu,
      featured: true,
    },
    {
      title: "Admin Dashboard",
      description:
        "An admin dashboard helps manage and monitor system functions, including user management, content control, and data analytics",
      tags: ["react", "javascript", "tailwind css", 'vite'],
      links: {
        github: "https://github.com/samsouta/jchaw-dashboard",
        demo: "https://jchaw-dashboard.netlify.app/dashboard/home",
      },
      image: jchawDash,
      featured: true,
    },
    {
      title: "teache Clone",
      description:
        "learning website",
      tags: ["react", "javascript", "Styled Components", 'GSAP'],
      links: {
        github: "https://github.com/samsouta/teacheclone?tab=readme-ov-file#show-your-support",
        demo: "https://teache-clone.netlify.app/",
      },
      image: teache,
      featured: true,
    },
    {
      title: "Currency Converter",
      description:
        " currency converter app that allows users to convert between different currencies and track their exchange rates in real-time using the latest currency exchange rates ",
      tags: ["react", "Typescript", "Tailwind css", 'API'],
      links: {
        github: "https://github.com/samsouta/currency-exchange",
        demo: "https://currency-j.netlify.app/",
      },
      image: curr,
      featured: false,
    },
    {
      title: "BLueTv",
      description:
        "STEAMING TV APPLICATION",
      tags: ["react", "Typescript", "Tailwind css", 'REST API' , 'Laravel','MYSQL'],
      links: {
        github: "https://github.com/samsouta",
        demo: "https://bluetv.xyz",
      },
      image: bluetv,
      featured: false,
    },
  ];

  return (
    <div
      className="pt-40 min-h-screen bg-[#121312]
 p-8 text-slate-100"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-[#121312] via-[#a67d43] to-[#ad0013] bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
          >
            {/* Image Section */}
            <div className="md:w-1/2 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br border border-[#ad0013]/80 from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                      Featured Project
                    </div>
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
