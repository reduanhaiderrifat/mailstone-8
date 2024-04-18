import { useState } from "react";

const StateFull = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must 6 characters or longer");
    } else {
      setError("");
    }
    console.log(name, email, password);
  };

  const handleNamechange = (e) => {
    setName(e.target.value);
  };
  const handleEmailchange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input onChange={handleNamechange} type="text" name="name" id="text" />{" "}
        <br />
        <input
          onChange={handleEmailchange}
          type="email"
          name="email"
          id="email "
        />{" "}
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id="email "
        />{" "}
        <br />
        <input type="submit" value="submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StateFull;
