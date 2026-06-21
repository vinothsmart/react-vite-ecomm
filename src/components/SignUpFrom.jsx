import React, { useCallback } from "react";

const SignUpFrom = () => {
  const [usersData, setUsersData] = React.useState({
    email: "",
    password: "",
  });

  const handleUserDataChange = useCallback((e) => {
    const { name, value } = e.target;
    setUsersData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    console.log("User Data:", usersData);
  }, [usersData]);

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h1>Sign Up</h1>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Email:{" "}
          <input
            type="email"
            id="email"
            name="email"
            value={usersData.email}
            onChange={handleUserDataChange}
          />
        </label>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>
          Password:{" "}
          <input
            type="password"
            id="password"
            name="password"
            value={usersData.password}
            onChange={handleUserDataChange}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
};

export default SignUpFrom;
