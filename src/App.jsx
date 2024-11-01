
import './App.css'
import Grandpa from './compoents/Grandpa/Grandpa'
// import AllFormMethods from './compoents/FormAllMethods/AllFormMethods'
// import ReusableForm from './compoents/reusableForm/ReusableForm'
// import CustomHook from './compoents/customHook/CustomHook'
// import HookForm from './compoents/HookFForm/HookForm'
// import RefForm from './compoents/RefForm/RefForm'
// import StateFulForm from './compoents/stateFullForm/StateFulForm'
// import SimpleForm from './compoents/simpleForm/SimpleForm'

function App() {
  // const handleSing2Submit = data =>{
  //  console.log(data)
  // }
  // const handleUpdate2Submit = data =>{
  //   console.log(data)
  // }


  return (
    <>
      
      <h1>Vite + React</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <CustomHook></CustomHook> */}
      {/* <ReusableForm handleSubmit={handleSingSubmit} formTitle="Sing Up"></ReusableForm>
      <ReusableForm handleSubmit={handleUpdateSubmit} formTitle="Update Profile" submitBtnText='Update'></ReusableForm> */}
      
     {/* <AllFormMethods handleSubmit={handleSing2Submit} formTitle="Sing Up"></AllFormMethods>
     <AllFormMethods handleSubmit={handleUpdate2Submit} formTitle="Update Profile" btnText='Update'></AllFormMethods> */}
     
    </>
  )
}

export default App
