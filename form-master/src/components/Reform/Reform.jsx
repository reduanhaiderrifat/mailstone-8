import { useEffect } from "react";
import { useRef } from "react";

const Reform = () => {
  const nameref = useRef(null);
  const emailref = useRef(null);
  const passwordref = useRef(null);

  useEffect(() => {
    nameref.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameref.current.value);
    console.log(emailref.current.value);
    console.log(passwordref.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input ref={nameref} type="text" name="name" id="text" /> <br />
        <input ref={emailref} type="email" name="email" id="email " /> <br />
        <input
          ref={passwordref}
          type="password"
          name="password"
          id="email "
        />{" "}
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Reform;
