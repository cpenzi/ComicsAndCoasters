// TeamMember.js
import React from 'react';

function TeamMember({ name, role, description, image }) {
  return (
    <div className="team-member">
      <img src={image} alt={`${name}'s photo`} />
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="description">{description}</p>
    </div>
  );
}

export default TeamMember;
