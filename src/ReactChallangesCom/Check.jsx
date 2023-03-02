import React from "react";

const UseEffect = () => {
  const content = {};

  const time = new Date(2022, 9, 19, 13);
  const curHour = time.getHours();

  var greeting = " ";

  if (curHour >= 1 && curHour < 12) {
    greeting = "Good Morning";
    content.color = "green";
  } else if (curHour > 12 && curHour < 18) {
    greeting = "Good Afternoon";
    content.color = "organe";
  } else {
    greeting = "Good night";
    content.color = "Black";
  }

  return (
    <>
      <div>
        <h1>
          {" "}
          Hello,Sir <span style={content}>{greeting}</span>
        </h1>
      </div>{" "}
    </>
  );
};

export default UseEffect;

//     const[num, setNam] = useState(0);
//     const[num1, setNam1] = useState(0);
//     const image1="https://picsum.photos/200/300";
//     const heading =
//     {
//         color: "#fa9191",
//         textTransform: "capitalize",
//         textAlign: "center",
//         fontWeight: "bold",
//         textShadow: '0px 2px 4px #ffe9c5',
//         margine:'70px 0',
//         fontFamily: 'Josefin Sans sans-serif'
//     };

//     // useEffect(()=>{

//     //     alert('you Click Button')

//     // },[])
//     const state = useState()
//   return(<><h1 style={heading}>My name is</h1>
//   <img src={image1} alt ="randomImages"/>

//   <button onClick={()=>{setNam(num + 1)}}>Click Me{num}</button>
//   <button onClick={()=>{setNam1(num1 + 1)}}>Click Me{num1}</button>
//   </>
//   )}

// const [value1, setValue1] = useState("VALUE 1");
//   const [value2, setValue2] = useState("VALUE 2");
//   const [value3, setValue3] = useState("VALUE 3");

//   useEffect(() => {
//     console.log("effect");
//   }, [value1, value2]);

//   const clickHandler1 = () => {
//     setValue1((prevState) => prevState + "VALUE 1");
//   };
//   const clickHandler2 = () => {
//     setValue2((prevState) => prevState + "VALUE 2");
//   };
//   const clickHandler3 = () => {
//     setValue3((prevState) => prevState + "VALUE 3");
//   };
//   return (
//     <div>
//       <p onClick={clickHandler1}>{value1}</p>
//       <p onClick={clickHandler2}>{value2}</p>
//       <p onClick={clickHandler3}>{value3}</p>
//     </div>
// );
//  const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);

//   useEffect(() => {
//     alert("hy bro")
//     console.log("count2 changed!");
//   }, [count1,count2,count3]);

//   return (
//     <div>
//       {count1} {count2} {count3}
//       <br />
//       <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
//       <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
//       <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
//     </div>
//   );

//useEffect(({ a, b }) => {

//     const [count1, setCount1] = useState(0);
//     const [count2, setCount2] = useState(0);

//     useEffect(() => {
//         console.log("value of 'a' changed to", a);
//       }, [a]);

//   return (
//     <div>
//              I've got 2 props: a={a} and b={b}

//           <useEffect a={count1} b={count2} />
//           <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
//           <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
//         </div>
//   );
//   });
