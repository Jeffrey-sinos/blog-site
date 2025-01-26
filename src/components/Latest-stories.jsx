import React from 'react';
import golf from '../assets/images/golf.webp'; // Import images
import pool from '../assets/images/pool.webp';
import restaurant from '../assets/images/restaurant.jpg';


const LatestStories = () => {

  const stories = [
    {
      id: 1,
      title: 'New Golf Course Opened',
      excerpt: 'The new golf course opened in the city attracted plenty of visitors. Amazing day filled with good vibes and everyone enjoyed the game.',
      image: golf,
    },
    {
      id: 2,
      title: 'Swimming Pool Inauguration at the Club',
      excerpt: 'The social club opened up a new swimming pool to add to the many activities that they already offer.',
      image: pool,
    },
    {
      id: 3,
      title: 'Restaurant Opening',
      excerpt: 'A new Mediterranean restaurant was opened in the city with vibrant dishes and accompanying music.',
      image: restaurant,
    },
  ];

  return (
    <section className="p-8 bg-white m-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Latest Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title and Excerpt */}
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-700 mb-2">{story.title}</h3>
              <p className="text-gray-600">{story.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestStories;