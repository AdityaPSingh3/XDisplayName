import React, { useState } from "react";

const FullNameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setIsSubmitted(true);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        <label>
          First Name:
          <br />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <br />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <p style={{ display: "inline-block", marginLeft: "10px" }}>
          Full Name: {fullName}
        </p>
      )}
    </div>
  );
};

export default FullNameForm;
