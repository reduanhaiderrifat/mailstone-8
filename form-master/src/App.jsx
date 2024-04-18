import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import ReuseableForm from "./components/ReusableForm/ReuseableForm";
// import Reform from "./components/Reform/Reform";
// import HookForm from "./components/HookForm/HookForm";
// import SinpleForm from "./components/SimpleForm/SinpleForm";
// import StateFull from "./components/StateFull/StateFull";

function App() {
  //   const handleSingupSubmit = (data) => {
  //     console.log("singin data", data);
  //   };
  //   const handleUpdate = (data) => {
  //     console.log("updated", data);
  //   };
  return (
    <>
      <h1>Form master</h1>
      <Grandpa></Grandpa>
      {/* <SinpleForm></SinpleForm> */}
      {/* <StateFull></StateFull> */}
      {/* <Reform></Reform> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formtitle={"sing up"} handleSubmit={handleSingupSubmit}>
        <div>
          <h2>sing up</h2>
          <p>Please sing up</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        handleSubmit={handleUpdate}
        formtitle={"Profile update"}
        sumbiteBtn={"update"}
      >
        <div>
          <h2>update profile</h2>
          <p>always keep your fprofile update</p>
        </div>
      </ReuseableForm> */}
    </>
  );
}

export default App;
