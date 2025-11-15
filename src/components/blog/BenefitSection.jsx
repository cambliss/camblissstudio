import React from 'react';
import { FaLightbulb, FaRocket, FaHandshake, FaUsers, FaStar, FaGlobe } from 'react-icons/fa';

const BenefitsSection = () => {
  const leftCards = [
    {
      icon: <FaLightbulb size={30} color="#ffbd39" />,
      title: 'Innovation',
      description: 'We embrace creativity to deliver groundbreaking solutions.',
      offset: '10px', // Offset for this card
    },
    {
      icon: <FaRocket size={30} color="#ffbd39" />,
      title: 'Growth',
      description: 'Empowering our team to reach new heights.',
      offset: '-10px', // Offset for this card
      marginBottom: '10px', // Add extra space between Growth and Team Spirit
    },
    {
      icon: <FaHandshake size={30} color="#ffbd39" />,
      title: 'Team Spirit',
      description: 'Collaboration is the key to our success.',
      offset: '15px', // Offset for this card
    },
    {
      icon: <FaUsers size={30} color="#ffbd39" />,
      title: 'Diversity',
      description: 'Inclusive culture with global perspectives.',
      offset: '-15px', // Offset for this card
    },
    {
      icon: <FaStar size={30} color="#ffbd39" />,
      title: 'Excellence',
      description: 'Striving for excellence in everything we do.',
      offset: '5px', // Offset for this card
    },
    {
      icon: <FaGlobe size={30} color="#ffbd39" />,
      title: 'Global Impact',
      description: 'Making a difference worldwide.',
      offset: '-5px', // Offset for this card
    },
  ];

  return (
    <div className="fm-about-area bg-common-black section-spacing">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Side Cards */}
          <div className="col-xl-6 col-lg-6">
            <div className="row g-4">
              {leftCards.map((card, index) => (
                <div
                  key={index}
                  className="col-md-6 col-sm-12 zigzag-card"
                  style={{
                    marginTop: card.offset,
                    marginBottom: card.marginBottom || '0', // Apply marginBottom if specified
                  }}
                >
                  <div className="icon mb-3">{card.icon}</div>
                  <h5 className="text-white">{card.title}</h5>
                  <p className="text-light">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-xl-6 col-lg-6">
            <div className="motivational-content">
              <h2 className="section-main-title text-white mb-25 title-anim">Why Cambliss Studio?</h2>
              <p className="mb-20">             
                   At Cambliss Studio, we are more than just a workplace – we are a community of innovators, dreamers, and
                creators. Our mission is to inspire and empower our team to build exceptional solutions that make a
                global impact.
              </p>
              <p className="mb-20">                Join us to work on cutting-edge projects, embrace a culture of diversity and inclusion, and thrive in an
                environment that celebrates creativity and growth. Together, let's create a brighter future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .container {
         
        }
        .zigzag-card {
          width: 260px;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          padding: 1.5rem;
        }
        .zigzag-card:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.7);
        }
     
       .mb-20{
       color: var(--clr-body-text4);

    margin-bottom: 20px;
}
p {
    font-family: "Montserrat", sans-serif;
    font-size: 18px !important;
    font-weight: 500;}
        .motivational-content h2 {
          font-size: 28px;
          font-weight: bold;
          line-height: 1.6
        }
        .motivational-content p {
          font-size: 16px;
          line-height: 1.8;
        }
        .row.g-4 {
          row-gap: 1.5rem; /* Adds vertical space between rows of cards */
          column-gap: 1rem; /* Adds horizontal space between cards */
        }
        .fm-about-area {
          padding: 4rem 1rem;
        }
      `}</style>
    </div>
  );
};

export default BenefitsSection;
