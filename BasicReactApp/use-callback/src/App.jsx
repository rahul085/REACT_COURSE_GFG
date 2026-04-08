import React from 'react'
import { useState } from 'react'
import Search from './components/Search';
import { useCallback } from 'react';

const allBrands=[{id:"1",brandName:"Puma"},
  {id:"2",brandName:"Adidas"},
  {id:"3",brandName:"Nike"},
  {id:"4",brandName:"Reebok"},
  {id:"5",brandName:"Diesel"},
]

const App = () => {
  const [brands,setBrands]=useState(allBrands);

  const handleChange=useCallback((value)=>{
    console.log(brands[0]);
    
    const updatedBrands=value?.length>0? brands.filter(brand=> brand.brandName.toLowerCase().includes(value.toLowerCase(  ))):allBrands;
    setBrands(updatedBrands);
    
  },[brands]);




  const handleSort=()=>{
    const sortedBrands=[...allBrands].sort((a,b)=>{
      const nameA=a.brandName.toUpperCase();
      const nameB=b.brandName.toUpperCase();
      if(nameA<nameB){
        return -1;
      }
      if(nameA>nameB){
        return 1;
      }

      return 0;
    });
    setBrands(sortedBrands);
  }
  return (
    <div>
      <h2>UseCallback Hook</h2>
        <div>
          <div>
            <button onClick={handleSort} >Sort By Name</button>
            <Search handleChange={handleChange}/>
            <div>
              {
                brands.map(brand=><p>{brand.brandName}</p>)
              }
            </div>
            
              
            
          </div>

          <div>
            
          </div>
        </div>


    </div>
  )
}

export default App