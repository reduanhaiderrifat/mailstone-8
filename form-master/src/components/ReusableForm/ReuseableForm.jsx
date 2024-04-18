const ReuseableForm = ({ handleSubmit, sumbiteBtn, children }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmit} action="">
        <input type="text" name="name" id="text" /> <br />
        <input type="email" name="email" id="email " /> <br />
        <input type="password" name="password" id="email " /> <br />
        <input type="submit" value={sumbiteBtn} />
      </form>
    </div>
  );
};

export default ReuseableForm;
