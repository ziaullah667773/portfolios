import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";

let x = 3;
const Li = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const [toggle,setToggle]=useState(false);
  useEffect(()=>{
    window.toggle=()=>setToggle((toggle)=>!toggle)
  },[]);

  function addItem() {
    x++;
    setItems((items) => [...items, x]);
  }
  function removeItem(item) {
    setItems((items) => items.filter((i) => i !== item));
  }
  return (
    <div className="p-20  ">
      <div className="text-right">
        <button
          onClick={addItem}
          className="border-2 border-blue-600 bg-gray-800 text-white text-2xl rounded px-3 py-1"
        >
          Add
        </button>
      </div>
      <table cellPadding={0} className="border w-full mt-8">
        <thead>
          <tr>
            <th>col 1</th>
            <th>col 2</th>
            <th>col 3</th>
          </tr>
        </thead>
        <tbody className="relative">
          <AnimatePresence>
            {items.map((item) => (
             <TR key={item} item={item} removeItem={removeItem}/>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
      {/* <ul  className="mt-8 border-2 border-gray-400 rounded-lg overflow-hidden bg-slate-200/60 p-8">
        <AnimatePresence initial={false}>
          {items.map((item) => (
            <motion.li
              
              initial={{ opacity: 0,height:0 }}
              animate={{ opacity: 1,height:'auto' }}
              exit={{ opacity: 0,height:0 }}
              transition={{opacity:{duration:0.3},height:{duration:0.4}}}
              key={item}
             
            >
             <div  className=" flex items-center justify-between py-2 border-b border-slate-400">
             <span>item{item}</span>
              <button
                onClick={() => removeItem(item)}
                className="border-2 border-blue-600 bg-gray-800 text-white text-2xl rounded px-3 py-1"
              >
                &times;
              </button>
             </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul> */}
    </div>
  );
};
 
function TR({item,removeItem}){
  let isPresent=useIsPresent()
  return <motion.tr
 
  layout
  inherit={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{opacity:{duration:0.2}}}
  style={{
    position:isPresent ?"relative":"absolute",
    display:isPresent?"table-row":"flex",
    alignItems:isPresent?"":"center"
  }}
  className="w-full"
>
  <td className="w-1/3">1:item{item}</td>
  <td className="w-1/3">2:item{item}</td>
  <td className="w-1/3 text-center">
    <button
      onClick={() => removeItem(item)}
      className="w-8 h-8 border rounded"
    >
      &times;
    </button>
  </td>
</motion.tr>
}
export default Li;
