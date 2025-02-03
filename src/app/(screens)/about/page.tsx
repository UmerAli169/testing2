import React from "react";
import { Instagram, Twitter, Linkedin, BadgeCheck, HeadphonesIcon, Truck } from "lucide-react";
import { stats, teamMembers } from "./data";

const OurStory = () => {
     const features = [
        { icon: <Truck className="w-6 h-6" />, text: "FREE AND FAST DELIVERY" },
        { icon: <HeadphonesIcon className="w-6 h-6" />, text: "24/7 CUSTOMER SERVICE" },
        { icon: <BadgeCheck className="w-6 h-6" />, text: "MONEY BACK GUARANTEE" },
      ];
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">Our Story</h1>
          <p className="text-gray-600 leading-relaxed">
            Launched in 2015, Exclusive is South Asia's premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
        </div>
        <div>
          <img
            src="/aboutMain.jpeg"
            alt="Shopping Friends"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 border rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-2">{stat.number}</h3>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image || "/placeholder.png"}
                alt={member.name}
                className="w-48 h-48 mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-3">{member.role}</p>
              <div className="flex justify-center gap-4">
                <Twitter className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-400" />
                <Instagram className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600" />
                <Linkedin className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-3 p-4 border rounded-lg"
          >
            <div className="bg-gray-100 p-3 rounded-full">{feature.icon}</div>
            <span className="font-semibold">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;
