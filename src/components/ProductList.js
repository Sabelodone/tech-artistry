import React, { useState, useRef, useEffect } from 'react';

const products = [

  {
    id: 1,
    name: 'Web Design',
    description: 'Create stunning and user-friendly websites that captivate visitors.',
    imageUrl: 'robot.png',
    tags: ['Design', 'UI/UX', 'Responsive'],
    rating: 4.5,
    price: 'R 7,499',
    features: ['Custom Layout', 'SEO Optimized', 'Mobile-Friendly', 'Fast Load Times'],
    testimonials: [
      {
        id: 1,
        text: 'The web design exceeded our expectations! Very professional and sleek.',
        customer: 'Sarah K.',
      },
      {
        id: 2,
        text: 'Our conversion rates improved significantly after revamping our site.',
        customer: 'John M.',
      },
    ],
  },
  {
    id: 2,
    name: 'Web Development',
    description: 'Build dynamic and interactive websites using modern technologies.',
    imageUrl: 'robot2.png',
    tags: ['Development', 'Frontend', 'Backend'],
    rating: 4.8,
    price: 'R 12,499',
    features: ['API Integration', 'Database Management', 'Responsive Design', 'Real-time Updates'],
    testimonials: [
      {
        id: 1,
        text: 'Fantastic development team! They delivered on time and with great quality.',
        customer: 'Lisa T.',
      },
    ],
  },
  {
    id: 3,
    name: 'Software Creation',
    description: 'Develop custom software solutions tailored to your business needs.',
    imageUrl: 'robot3.png',
    tags: ['Software', 'Custom Solutions'],
    rating: 4.2,
    price: 'R 15,999',
    features: ['Cloud-Based', 'Scalable Solutions', 'Multi-Platform Support', 'User Management'],
    testimonials: [
      {
        id: 1,
        text: 'The custom software has streamlined our processes immensely.',
        customer: 'Mike P.',
      },
    ],
  },
  {
    id: 4,
    name: 'Mobile App Development',
    description: 'Create engaging mobile applications for both iOS and Android platforms.',
    imageUrl: 'robot4.png',
    tags: ['Mobile', 'Apps', 'Development'],
    rating: 4.7,
    price: 'R 9,999',
    features: ['Cross-Platform', 'User Authentication', 'Push Notifications', 'In-App Purchases'],
    testimonials: [
      {
        id: 1,
        text: 'The app works flawlessly! Our users love the new features.',
        customer: 'Emily R.',
      },
    ],
  },
  // New products added below
  {
    id: 5,
    name: 'E-commerce Solutions',
    description: 'Launch your online store with robust e-commerce platforms.',
    imageUrl: 'robot6.jpeg',
    tags: ['E-commerce', 'Online Store'],
    rating: 4.6,
    price: 'R 10,999',
    features: ['Payment Gateway Integration', 'Inventory Management', 'Customer Analytics', 'User-friendly Interface'],
    testimonials: [
      {
        id: 1,
        text: 'Our online sales have doubled since implementing their e-commerce solutions!',
        customer: 'Diana S.',
      },
    ],
  },
  {
    id: 6,
    name: 'Digital Marketing',
    description: 'Enhance your online presence with targeted marketing strategies.',
    imageUrl: 'robot5.jpeg',
    tags: ['Marketing', 'SEO', 'Social Media'],
    rating: 4.9,
    price: 'R 8,499',
    features: ['Content Creation', 'SEO Strategies', 'Social Media Management', 'Email Marketing'],
    testimonials: [
      {
        id: 1,
        text: 'The marketing strategy they implemented transformed our brand awareness!',
        customer: 'Kevin W.',
      },
    ],
  },
];
  // Your product data here...


const ProductsList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [startIndex, setStartIndex] = useState(0); // Track start index of visible cards
  const scrollContainerRef = useRef(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  // Close modal on "Escape" key press
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const scroll = (direction) => {
    const newIndex = direction === 'left' ? startIndex - 1 : startIndex + 1;
    if (newIndex >= 0 && newIndex <= products.length - 3) {
      setStartIndex(newIndex); // Update start index
    }
  };

  // Define responsive breakpoints
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
  };

  // Calculate number of cards to display based on screen size
  const getCardsPerView = () => {
    const width = window.innerWidth;
    if (width < breakpoints.sm) return 1; // Show 1 card on small screens
    if (width < breakpoints.md) return 2; // Show 2 cards on medium screens
    return 3; // Show 3 cards on large screens
  };

  const cardsPerView = getCardsPerView();

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen py-10">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Our Premium Products</h1>
        <p className="text-gray-600 mt-4 text-base md:text-lg">Explore our innovative technology solutions designed for the future.</p>
      </header>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
          onClick={() => scroll('left')}
          disabled={startIndex === 0} // Disable button if at the start
        >
          &#9664;
        </button>

        <div ref={scrollContainerRef} className="flex overflow-x-hidden gap-6 scrollbar-hide">
          {products.slice(startIndex, startIndex + cardsPerView).map((product) => (
            <div
              key={product.id}
              className={`relative flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 min-w-[${Math.floor(
                100 / cardsPerView
              )}%]`}
            >
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-transparent opacity-30 pointer-events-none rounded-lg"></div>

              <div className="flex flex-col justify-between flex-grow p-4 sm:p-6">
                <div>
                  <h3 className="text-lg sm:text-2xl font-semibold text-purple-700">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-500 mr-1">{'★'.repeat(Math.floor(product.rating))}</span>
                    <span className="text-gray-500">({product.rating})</span>
                  </div>
                  <p className="text-gray-500 mt-2 text-sm sm:text-base">{product.description}</p>
                  <p className="text-lg font-bold text-purple-600 mt-2">{product.price}</p>
                  <div className="mt-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="inline-block bg-purple-200 text-purple-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 transition duration-300"
                  onClick={() => openModal(product)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
          onClick={() => scroll('right')}
          disabled={startIndex >= products.length - cardsPerView} // Disable button if at the end
        >
          &#9654;
        </button>
      </div>

      {selectedProduct && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/3 p-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">{selectedProduct.name}</h2>
            <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <p className="text-lg font-bold text-purple-600">Price: {selectedProduct.price}</p>
            <h3 className="mt-4 text-lg font-semibold text-purple-800">Key Features:</h3>
            <ul className="list-disc list-inside mt-2">
              {selectedProduct.features.map((feature) => (
                <li key={feature} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <h3 className="mt-4 text-lg font-semibold text-purple-800">Testimonials:</h3>
            <ul className="list-disc list-inside mt-2">
              {selectedProduct.testimonials.map((testimonial) => (
                <li key={testimonial.id} className="text-gray-600 italic">"{testimonial.text}" - <strong>{testimonial.customer}</strong></li>
              ))}
            </ul>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 transition duration-300 mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
