import React from 'react';
import farm from '../assets/images/farm.jpg'; // Import images
import cinema from '../assets/images/cinema.jpeg';
import phone from '../assets/images/phone.jpg';


const StaffPicks = () => {

  const picks = [
    {
      id: 1,
      title: 'Farming',
      excerpt: 'Agriculture continues to grow in the country with hopes of increased crop production.',
      image: farm,
    },
    {
      id: 2,
      title: 'Gladiator Movie Premiere',
      excerpt: 'The new gladiator movie, a sequel to the first one released in 2000, premiered with the movie receiving glowing reviews on opening night',
      image: cinema,
    },
    {
      id: 3,
      title: 'Iphone launch',
      excerpt: 'The new Iphone was launched with a new design and features expected to improve user experience.',
      image: phone,
    },
  ];
  
  return (
    <section className="p-8 bg-white m-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Staff's Picks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {picks.map((pick) => (
          <div
            key={pick.id}
            className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <img
                src={pick.image}
                alt={pick.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title and Excerpt */}
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-700 mb-2">{pick.title}</h3>
              <p className="text-gray-600">{pick.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StaffPicks;