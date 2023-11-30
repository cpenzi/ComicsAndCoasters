// AboutUsPage.js
import React from 'react';
import TeamMember from '../Components/TeamMember';
import '../Styles/AboutUs.css'; // Import your CSS file

const teamMembers = [
  {
    name: 'John Doe',
    role: 'Co-Founder',
    description: 'A coffee lover and comic enthusiast, John founded Comics and Coasters to combine his two passions.',
    image: 'ComicsAndCoasters/Assets/StockImage.jpeg',
  },
  {
    name: 'Jane Smith',
    role: 'Barista',
    description: 'Jane brews the finest coffee in town and recommends comic books to pair with your favorite brew.',
    image: 'ComicsAndCoasters/Assets/StockImage.jpeg',
  },
  {
    name: 'Alice Brown',
    role: 'Comic Curator',
    description: 'Alice is our comic book expert, ensuring we have a diverse collection for all comic lovers.',
    image: 'ComicsAndCoasters/Assets/StockImage.jpeg',
  },
];

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <h2>Welcome to Comics and Coasters</h2>
      <p className="intro">
        At Comics and Coasters, we believe in the perfect blend of two worlds: comics and coffee. Our team is dedicated
        to bringing you the best coffee and the most exciting comic books in a cozy and welcoming environment.
      </p>
      <h2>Meet Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default AboutUsPage;
