import { useEffect, useState } from "react";
import { FaBeer } from 'react-icons/fa';
import useTitle from "../public/Scripts/useTitle";

let value = false;

function App() {
  useTitle("App")
  const [state, setState] = useState([]);



  useEffect(()=>{

      fetch("./allProducts.json")
    .then(res=>res.json())
    .then(data=>setState(data))
    .catch(err=>console.error(err.message))
  },[])

  function eachItem(){
    const flatData = state;
    console.log(flatData)
  }

  eachItem()
  return (
    <>
      <h1 className="h-full w-full grid place-items-center text-red-500 text-5xl font-semibold bg-gray-700">Gadget Heaven <FaBeer size='20px' color="yellow"/></h1>
    </>
  )
}

export default App