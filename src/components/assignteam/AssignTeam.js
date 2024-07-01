import React, { useState } from "react";
import "./AssignTeam.css";

const AssignTeam = () => {
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="assign-team-modal">
      <h2>Assign Team</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="project-name">Add a title</label>
          <input
            type="text"
            id="project-name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="start-date">Starts</label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="end-date">Dead Line</label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Type name or email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Name or email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add some description of the project"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Assign To</label>
          <div className="assigned-to">
            <span>Harrison</span>
            <span>Lauren</span>
          </div>
        </div>
        <div className="form-group">
          <label>Select image</label>
          <div className="image-selection">
            {[...Array(12).keys()].map((index) => (
              <div
                key={index}
                className={`image-option ${
                  selectedImage === index ? "selected" : ""
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={`path-to-image-${index}.png`}
                  alt={`Option ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default AssignTeam; 