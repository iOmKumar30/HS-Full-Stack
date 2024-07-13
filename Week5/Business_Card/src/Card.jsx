import React from "react";
import "./CardWrapper.css";

export function CardWrapper({ children }) {
  return (
    <div className="card-wrapper">
      {children.profilePhoto && (
        <img
          src={children.profilePhoto}
          alt="Profile"
          className="profile-photo"
        />
      )}
      <h2>{children.name}</h2>
      <span>{children.description}</span>
      <h3>Interests</h3>
      <ul>
        {children.interests.map((interest) => (
          <li key={interest}>{interest}</li>
        ))}
      </ul>
      <h3>Connect with me</h3>
      <button onClick={() => window.open(children.linkedin, "_blank")}>
        LinkedIn
      </button>
      <button onClick={() => window.open(children.twitter, "_blank")}>
        Twitter
      </button>
      <button onClick={() => window.open(`mailto:${children.email}`, "_blank")}>
        Send Email
      </button>
    </div>
  );
}

export default CardWrapper;
