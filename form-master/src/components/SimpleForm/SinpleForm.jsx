const SinpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input type="text" name="name" id="text" /> <br />
        <input type="email" name="email" id="email " /> <br />
        <input type="password" name="password" id="email " /> <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SinpleForm;
