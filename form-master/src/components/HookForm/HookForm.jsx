import useInputState from "../../hooks/Useinputstate";

const HookForm = () => {
  // const [name, handleNamechange] = useInputState("Rifat");
  const emailstate = useInputState("Rifat");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailstate.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        {/* <input
          value={name}
          onChange={handleNamechange}
          type="text"
          name="name"
          id="text"
        />{" "} */}
        <br />
        <input {...emailstate} type="email" name="email" id="email " /> <br />
        <input type="password" name="password" id="email " /> <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
