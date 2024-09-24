"use client";

import { useState, useEffect } from 'react';

export default function BlogPage() {
  // Sample blog data (can replace this with dynamic API fetch if needed)
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'The Future of Electric Cars',
      image: 'carcards/6.jpg',
      excerpt: 'Discover the next-gen electric cars and their impact on the environment.',
      content: 'Electric cars are becoming increasingly popular as more people realize the benefits of using sustainable energy sources. This shift is transforming the automotive industry...',
    },
    {
      id: 2,
      title: 'Tesla Model X Review',
      image: 'carcards/2.jpg',
      excerpt: 'A deep dive into the Tesla Model X and its performance.',
      content: 'The Tesla Model X stands out as a performance-oriented electric vehicle. With its cutting-edge technology and sleek design, it offers a unique driving experience...',
    },
    {
      id: 3,
      title: 'Why Hybrid Cars Are Still Relevant',
      image: 'carcards/5.jpg',
      excerpt: 'Even with electric cars on the rise, hybrid cars hold strong.',
      content: 'Hybrid cars provide the best of both worlds. By combining gasoline engines with electric power, they reduce emissions while still delivering the range and convenience of conventional cars...',
    },
  ]);

  const [selectedPost, setSelectedPost] = useState(null);

  // Handler to show blog post details
  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  // Animation when transitioning between blog list and single post
  useEffect(() => {
    const body = document.body;
    body.classList.remove('fade-in');
    void body.offsetWidth; // Trigger reflow
    body.classList.add('fade-in');
  }, [selectedPost]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Conditional rendering: show either blog list or single blog post */}
        {!selectedPost ? (
          <div>
            <h1 className="text-5xl font-bold text-center mb-12 animate-fade-in-down">
              Latest Blog Posts
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="group relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => handleReadMore(post)}
                >
                  <img
                    className="w-full h-56 object-cover"
                    src={post.image}
                    alt={post.title}
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedPost(null)}
              className="text-blue-600 font-semibold mb-4 transition ease-in-out duration-300 hover:text-blue-800"
            >
              &larr; Back to Blog
            </button>
            <article className="bg-white shadow-lg rounded-lg p-8">
              <img
                className="w-full h-64 object-cover rounded-lg mb-8"
                src={selectedPost.image}
                alt={selectedPost.title}
              />
              <h1 className="text-4xl font-bold text-gray-800 mb-6">{selectedPost.title}</h1>
              <p className="text-gray-600 text-lg">{selectedPost.content}</p>
            </article>
          </div>
        )}
      </main>
      {/* Animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-down {
          animation: fade-in-down 1.2s ease-out;
        }

        .fade-in {
          animation: fade-in 0.8s ease-in-out;
        }
      `}</style>
    </div>
  );
}
