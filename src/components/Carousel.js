import React from 'react';

const tags = [
  { name: 'Web Development', icon: 'fas fa-code' },
  { name: 'Front-End Development', icon: 'fas fa-laptop-code' },
  { name: 'Back-End Development', icon: 'fas fa-server' },
  { name: 'Full-Stack Development', icon: 'fas fa-layer-group' },
  { name: 'UI/UX Design', icon: 'fas fa-paint-brush' },
  { name: 'Responsive Design', icon: 'fas fa-mobile-alt' },
  { name: 'E-commerce Solutions', icon: 'fas fa-shopping-cart' },
  { name: 'Content Management Systems', icon: 'fas fa-file-alt' },
  { name: 'API Development', icon: 'fas fa-plug' },
  { name: 'Website Optimization', icon: 'fas fa-tachometer-alt' },
  { name: 'Mobile App Development', icon: 'fas fa-mobile' },
  { name: 'JavaScript Frameworks', icon: 'fab fa-js' },
  { name: 'React Development', icon: 'fab fa-react' },
  { name: 'Node.js Development', icon: 'fab fa-node-js' },
  { name: 'HTML/CSS', icon: 'fab fa-html5' },
  { name: 'SEO Services', icon: 'fas fa-search' },
  { name: 'Website Maintenance', icon: 'fas fa-wrench' },
  { name: 'Database Management', icon: 'fas fa-database' },
  { name: 'Cloud Computing', icon: 'fas fa-cloud' },
  { name: 'DevOps Practices', icon: 'fas fa-cogs' },
];

const Carousel = () => {
  return (
    <div className="bg-navy text-black py-6 overflow-hidden relative">
      <div className="whitespace-nowrap animate-marquee flex items-center space-x-4 md:space-x-6">
        {tags.concat(tags).map((tag, index) => (
          <div
            key={index}
            className="inline-block p-4 md:p-6 text-center transition-transform transform hover:scale-105"
          >
            <i className={`${tag.icon} text-2xl md:text-3xl mb-2`}></i>
            <div className="text-base md:text-lg font-semibold">{tag.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
