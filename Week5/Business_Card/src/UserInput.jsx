import React, { useState } from "react";
import "./Userip.css";

const UserInput = ({ onSubmit }) => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [email, setEmail] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const interestsArray = interests
      .split(",")
      .map((interest) => interest.trim());
    onSubmit({
      profilePhoto,
      name,
      description,
      interests: interestsArray,
      linkedin,
      twitter,
      email,
    });
  };

  return (
    <div className="user">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        {profilePhoto && (
          <img
            src={profilePhoto}
            alt="Profile Preview"
            className="profile-preview"
          />
        )}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Interests (comma-separated)"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
        />
        <input
          type="text"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Twitter URL"
          value={twitter}
          onChange={(e) => setTwitter(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Create E-Card</button>
      </form>
    </div>
  );
};

export default UserInput;
