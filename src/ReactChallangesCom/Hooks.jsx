import React from "react";
import { useState } from "react";
//React js Form logIn
const Hooks = () => {
  const [fulname, setfName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const inputEvent = (event) => {
    const { value, name } = event.target;

    setfName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
      // console.log(preValue)
      //   if (name === "fname") {
      //     return {
      //       fname: value,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //     };
      //   } else if (name === "lname") {
      //     return {
      //       fname: preValue.fname,
      //       lname: value,
      //       email: preValue.email,
      //       phone: preValue.phone,
      //     };
      //   } else if (name === "email") {
      //     return {
      //       fname: preValue.fname,
      //       lname: preValue.lname,
      //       email: value,
      //       phone: preValue.phone,
      //     };
      //   } else if (name === "phone") {
      //     return {
      //       fname: preValue.fname,
      //       lname: preValue.lname,
      //       email: preValue.email,
      //       phone: value,
      //     };
      //   }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      fulname.fname === "" ||
      fulname.lname === "" ||
      fulname.email === "" ||
      fulname.phone === ""
    ) {
      alert("your Form is incomplete");
    } else {
      alert("your form is submitted");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>Hello{fulname.fname}</h1>
          <p>{fulname.email}</p>
          <p>{fulname.phone}</p>
          <h3>{fulname.lname}</h3>
          <input
            style={{ width: "300px", height: "60px", margin: "30px" }}
            type=" text"
            placeholder="Enter your Name"
            name="fname"
            onChange={inputEvent}
            value={fulname.fname}
          />
          <input
            style={{ width: "300px", height: "60px", margin: "30px" }}
            type="email"
            placeholder="Enter your Email"
            name="email"
            onChange={inputEvent}
            value={fulname.email}
          />
          <input
            style={{ width: "300px", height: "60px", margin: "30px" }}
            type="number"
            placeholder="Enter Phone Number"
            name="phone"
            onChange={inputEvent}
            value={fulname.phone}
          />
          <input
            style={{ width: "300px", height: "60px", margin: "20px" }}
            type="password"
            placeholder="Password"
            name="lname"
            onChange={inputEvent}
            value={fulname.lname}
          />

          <button onClick={onSubmit}>Click Me 👍 </button>
        </div>
      </form>
    </>
  );
};

export default Hooks;

// //React js Form logIn
// const Hooks =()=>{
// const[name,changeValue]=useState("")
// const[fulname,setFullName]= useState("");
// const[lastName,setlastName]=useState('');
// const[lastNameNew,setlastNameNew]=useState('');
// const inputEvent =(event)=>{
//     // event.preventdefault();
//  changeValue(event.target.value)

// }
// const inputEventwo =(event)=>{
//     setlastName(event.target.value)
//    }

// const onSubmit=(event )=>{
//    event.preventDefault();
//    setFullName(name)
//    setlastNameNew(lastName)

// if ((name=='') && (lastName=='')){
// alert("Check your Name/Password");
// }

// else{
//     setFullName(name)

// }
// }

// return(

// <>
// <form>
// <div>
// <h1>Hello { fulname} {lastNameNew}</h1>
//     <input style={{width:"300px",height:"60px",margin:"30px"}} type="text" placeholder="Enter your Name" onChange={inputEvent} value={name}/>
//     <input style={{width:"300px",height:"60px",margin:"20px" }} type="password" placeholder="Password" onChange={inputEventwo}  value={lastName}/>

//    <button onClick={onSubmit}>Click Me 👍 </button>
//     </div></form></>

// )

// }

// export default Hooks;

//click and change background and button text
// const Hooks =()=>{
//     const purple = "#8e44ad";
//     const [bg,setbg]=useState(purple)
//     const [name, newName]=useState('Click Me')

// const bgChange=()=>{
//      let newBg = "#34495e";
//      setbg(newBg)
//      newName("OUCH!! 🚶‍♂️ ")
// }
// const bgBack =()=>{

//     setbg(purple)
//     newName("usman!!🛩")
// }
//  return(

// <>
// <div style={{backgroundColor:bg}}>
// <button onClick= {bgChange}  onDoubleClick={bgBack}>{name}</button>

// </div>

// </>

//  )

// }

// export default Hooks;

// const state= useState();
// var[time,]=useState(time);

//update Time by Using Hooks(UseState)
//const Hooks =()=>{

//     let Newtime= new Date().toLocaleTimeString()
//     const[uptime,cutime]=useState(Newtime)
//  let updatetime=()=>{
//     let time= new Date().toLocaleTimeString()
//     cutime(time)
//  }
// //  setInterval(updatetime,1000)
// return(
//     <>
//         <h1>{uptime}</h1>
//    <button onClick={updatetime}>Time Update</button>    </>
// )

//}

//export default Hooks;
