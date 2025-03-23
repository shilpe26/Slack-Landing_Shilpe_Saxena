import React from "react";

const brands = [
  { name: "FOX", logo: "/public/fox-logo.svg" },
  { name: "Lonely Planet", logo: "/Lonely_Planet-Logo.wine.png" },
  { name: "Intuit", logo: "/Intuit_Logo.png" },
  { name: "Carvana", logo: "/carvana-logo.png" },
  { name: "Kiva", logo: "/Kiva.org_logo_2016.svg.png" },
  { name: "Target", logo: "/Target.png" },
];

const BrandLogos = () => {
  return (
    <div className="bg-[#F9F1EB] py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center space-x-8">
        {brands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.name}
            className="h-10 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
