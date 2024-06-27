import { useState} from 'react'
import './App.css'
import Card from './component/Card';
import PassWord from './component/PassWord';

function App() {
  let [counter,setCounter] = useState(10);
  const [clr,setclr] = useState("#ada397");
  const addvalue = () =>{
    if(counter === 20){
    return counter;
    }else{
    counter=counter+1;
    setCounter(counter);
    console.log("value added" ,counter);
    }
  }
 const removevalue = () =>{
  if(counter > 0 ){
  setCounter(counter - 1);
  console.log("value removed", counter);
  } else{
    return 0;
  }
 }
  return (
     <div className="w-full h-full duration-200" style={{backgroundColor:clr}}>
      <h1 className='bg-green-400 text-black p-4 rounded-xl ml-2 mr-2 mt-0.45'>coffee and me</h1>
    <PassWord />
      <p className='font-bold font-10 text-black mt-2 p-4'>counter value : {counter}</p>
    <button onClick={addvalue} className='md:bg-slate-800 p-4 rounded-xl ml-2 mt-1 mb-1 text-white'>Add value {counter}</button>
      <br />
      <button onClick={removevalue} className='md:bg-slate-800 p-4 ml-2 rounded-xl mt-1 mb-1 text-white'>remove value {counter}</button>      
        <Card name="git" click="more info" /> 
         <div className="mr-4 p-5"></div> 
        <Card name="hacker" />
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className='fixed flex-wrap justify-center gap-3 shadow-lg bg-gray-500 px-3 py-2 rounded-3xl'>
      <button onClick={() => setclr("red")} className='bg-red-800 outline-none px-4 mr-4 py-1 rounded-full text-white shadow-sm' 
  >red</button>
      <button onClick={() => setclr("blue")} className= 'bg-blue-800 outline-none mr-4 px-4 py-1 rounded-full text-white shadow-sm' 
      >blue</button>
      <button onClick={() => setclr("green")} className=' bg-green-800 outline-none mr-4 px-4 py-1 rounded-full text-white shadow-sm' 
     >Green</button>
      <button onClick={() => setclr("Yellow")} className=' bg-yellow-300 outline-none mr-4 px-4 py-1 rounded-full text-white shadow-sm' 
      >Yellow</button>
      <button onClick={() => setclr("#333")} className=' bg-black outline-none mr-4 px-4 py-1 rounded-full text-white shadow-sm' 
      >black</button>
      <button onClick={() => setclr("pink")} className=' bg-pink-300 outline-none mr-4 px-4 py-1 rounded-full text-white shadow-sm' 
      >Pink</button>
      <button onClick={() => setclr("purple")} className=' bg-purple-800 outline-none mr-4 px-4 py-1 rounded-full text-white shadow-md' 
      >purple</button>
      <button onClick={() => setclr("orange")} className=' bg-orange-700 outline-none mr-4 px-4 py-1 rounded-full text-white shadow-sm' 
      >Orange</button>
    </div>
</div>
        </div>
      

)
}

export default App
