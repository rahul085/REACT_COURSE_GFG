import React, { useState } from "react";
const allBrands = [
  { id: "1", brandName: "puma" },
  { id: "2", brandName: "adidas" },
  { id: "3", brandName: "nike" },
  { id: "4", brandName: "fila" },
  { id: "5", brandName: "reebok" },
];
const App = () => {
  const[selectedBrand,setSelectedBrand]=useState([]);
  const addToCart=(id)=>{
    const selectedItem=allBrands.find(item=>item.id===id);
    setSelectedBrand([...selectedBrand,selectedItem]);

  }

  const removeFromCart=(id)=>{
    const filteredItems=selectedBrand.filter(brand=> brand.id!==id);
    setSelectedBrand(filteredItems)
  }
  return (
    <>
      <h1>ADD TO CART</h1>

      {allBrands.map((brand) => (
        <div>
          <span>{brand.brandName}</span>
          <button key={brand.id} onClick={()=>addToCart(brand.id)}>Add To Cart</button>
        </div>
      ))}

      <div>
        <h1>YOUR CART</h1>
        {selectedBrand.map(brand=>(
          <div>
            <span>{brand.brandName}</span>
            <button key={brand.id} onClick={()=>removeFromCart(brand.id)}>Remove </button>
          </div>
        ))}

      </div>
    </>
  );
};

export default App;

//---------------------------------------------------Intro to useStateHook-------------------------------------------------

// import React, { useState } from 'react'

// const App = () => {

//   const [value,setValue]=useState(0);

//   const onIncrementClick=()=>{
//     // if you want to increment using the previous value then we have to do the following
//     setValue(prev=>prev+1);
//     setValue(prev=>prev+1);
//     setValue(prev=>prev+1);
//     setValue(prev=>prev+1);
//   //  setValue(value+1);

//   }
//   const onDecrementClick=()=>{
//     if(value>0){
//        setValue(value-1);
//     }

//   }
//   return (
//     <>
//     <h1>JSX</h1>
//     <button onClick={onIncrementClick}>Increment</button>
//     <span style={{marginLeft:"8px"}}>{value}</span>
//     <button onClick={onDecrementClick}>Decrement</button>

//     </>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const AddButton=({count,setCount})=>{

//   const onIncrementClick=()=>{
//     setCount(count+1);
//   }
//   return(
//     <button onClick={onIncrementClick}>Increment</button>
//   )
// }

// const DecrementButton=({count,setCount})=>{

//   const onDecrementClick=()=>{
//     setCount(count-1)
//   }
//   return(
//     <button onClick={onDecrementClick}>Decrement</button>
//   )
// }
// const App = () => {
//   // State Lifting
//   const [count,setCount]=useState(0);
//   return (
//     <>
//     <AddButton count={count} setCount={setCount}/>
//     {count}
//     <DecrementButton count={count} setCount={setCount}/>
//     </>

//   )
// }

// export default App

//import React, { useState } from 'react'

// const App = () => {
//   const initialState={
//     name:"",
//     email:"",
//     password:"",
//     mobile:"",
//     altNumber:""
//   }
//   const [form,setForm]= useState(initialState);

//   const onNameChange=(e)=>{
//     setForm({...form,name: e.target.value});

//   }
//   const onEmailChange=(e)=>{
//     setForm({...form,email:e.target.value});

//   }
//   const onPasswordChange=(e)=>{
//     setForm({...form,password:e.target.value});

//   }
//   const onMobileChange=(e)=>{
//     setForm({...form,mobile:e.target.value});

//   }
//   const onAltNumberChange=(e)=>{
//     setForm({...form,altNumber:e.target.value});

//   }

//   console.log(form);

//   return (
//     <>
//     <div>
//       <label >Name:</label>
//       <input type="text" onChange={onNameChange} placeholder='Please enter your name' />
//     </div>

//     <div>
//       <label >Email:</label>
//       <input type="text" onChange={onEmailChange} placeholder='Please enter your email' />
//     </div>

//     <div>
//       <label >Password:</label>
//       <input onChange={onPasswordChange} type="text"  placeholder='Please enter your password' />
//     </div>

//     <div>
//       <label >Mobile Number:</label>
//       <input onChange={onMobileChange} type="text"  placeholder='Please enter your name' />
//     </div>

//     <div>
//       <label >Alt Number:</label>
//       <input onChange={onAltNumberChange} type="text"  placeholder='Please enter your name' />
//     </div>

//     </>
//   )
// }

// export default App

//----------------------------------------Filtering based on the Search--------------------------------------------

// const allBrands=[
//   {id:"1",brandName:"puma"},
//   {id:"2",brandName:"adidas"},
//   {id:"3",brandName:"nike"},
//   {id:"4",brandName:"fila",},
//   {id:"5",brandName:"reebok"}
// ];

// const App = () => {
//   const [search,setSearch]=useState("");
//  const filteredBrands=allBrands.filter(brand=>(
//   brand.brandName.includes(search?.toLowerCase())
//  ));

//  const onSearchChange=(event)=>{
//   setSearch(event.target.value);

//  }
//   return (
//     <>
//     <input onChange={onSearchChange} type="text" placeholder='Search for a brand' value={search} size={50} />
//     <ul>
//       {filteredBrands.length>0 ?(
//         filteredBrands.map(brand=>(
//           <li key={brand.id}>{brand.brandName}</li>
//         ))
//       ):(
//         <p>No brands found with "{search}"</p>
//       )}
//     </ul>

//     </>
//   )
// }

// export default App

//------------------------------------ADD TO CART && REMOVE FROM CART FUNCTIONALITY------------------------------------
// import React, { useState } from "react";

// const allBrands = [
//   { id: "1", brandName: "puma" },
//   { id: "2", brandName: "adidas" },
//   { id: "3", brandName: "nike" },
//   { id: "4", brandName: "fila" },
//   { id: "5", brandName: "reebok" },
// ];

// const App = () => {
//   const [selectedBrand,setSelectedBrand]=useState([]);
//   const onAddToCartClick=(id)=>{
//     const selectedItem=allBrands.find(item=> item.id===id);
//     setSelectedBrand([...selectedBrand,selectedItem])

//   }

//   const onRemoveClick=(id)=>{
//     const filteredItems=selectedBrand.filter(item=>item.id!==id);
//     setSelectedBrand(filteredItems)
//   }

//   return (<>
//   <div>
//     <p>Add brand to your Cart</p>
//     {
//       allBrands.map(brand=>(
//         <div>
//           <span >{brand.brandName}</span>
//           <button key={brand.id} onClick={()=> onAddToCartClick(brand.id)}>Add to Cart</button>
//         </div>
//       ))
//     }
//   </div>

//   <div>
//     <p>Your Cart</p>
//    {
//     selectedBrand && selectedBrand.map(brand=>
//       <p>{brand.brandName}- <button onClick={()=> onRemoveClick(brand.id)}>Remove</button></p>
//     )
//    }
//   </div>

//   </>);
// };

// export default App;
