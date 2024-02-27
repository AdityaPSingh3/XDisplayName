import React, { useState } from "react";

const FullNameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default behavior of form submission (reloading the page)
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setIsSubmitted(true);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div style={{ marginLeft: "10px" }}>
      <h1>Full Name Display</h1> {/* Added top heading */}
      <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
        <label style={{ display: "block" }}>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label style={{ display: "block" }}>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <button type="submit" style={{ display: "block", marginTop: "10px" }}>
          Submit
        </button>
      </form>
      {isSubmitted && (
        <p style={{ display: "block", marginTop: "10px" }}>
          Full Name: {fullName}
        </p>
      )}
    </div>
  );
};

export default FullNameForm;
