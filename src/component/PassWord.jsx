import React from 'react'
import { useState,useCallback, useEffect, useRef } from 'react';
function PassWord() {
  
  const [length,setLength] =useState(8);
  const [numAllowed,setnumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordref = useRef(null);

  const passwordGenerator = useCallback(() =>{
    let pass= "";
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) 
    str += "0123456789";

    if(charAllowed) 
    str+= "!@#$%^&*-+=_?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
      
    }
    setPassword(pass)
    
  }, [length,numAllowed,charAllowed,setPassword])

  const copypasswordtoclip = useCallback(() =>{
    passwordref.current?.select();
    //passwordref.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(password);
  },[password]);

  useEffect(() =>{
    passwordGenerator();
  }, [length,numAllowed,charAllowed, passwordGenerator])

  return (
    <div>
        <div className='w-full  max-w-md mx-auto shadow-md rounded-lg my-8
       text-orange-500 px-4 py-3 bg-gray-700'>
    <h2 className='text-xl text-center my-2'>PassWord Generator</h2>
      <div className='flex shadow-md rounded-md overflow-hidden mb-4'>
      <button onClick={passwordGenerator} className='outline-none bg-green-700
       text-white px-3 py-1'>gen</button>
        <input type='text'
        value={password}
        className='outline-none w-full py-1 px-3' 
        placeholder='password' 
        readOnly
        ref={passwordref}></input>
        <button onClick={copypasswordtoclip} 
         className='active:bg-teal-900 hover:bg-cyan-900 outline-none
          bg-blue-700 text-white px-3 py-1'>copy</button>
        </div>
        <div className='flex text-sm gap-2'>
          <div className='flex items-center gap-1'>
            <input type="range" 
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex text-sm gap-2'>
            <input type="checkbox" 
            defaultChecked={numAllowed}
            id='numberInput'
            onChange={() =>{
              setnumAllowed((prev) => !prev );
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex text-sm gap-2'>
            <input type="checkbox" 
            defaultChecked={charAllowed}
            id='numberInput'
            onChange={() =>{
              setCharAllowed((prev) => !prev );
            }}
            />
            <label htmlFor='numberInput'>Characters</label>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default PassWord
