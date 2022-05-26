import React from 'react';
import { useNavigate } from "react-router-dom";

const RedirectButton = ({name, redirectsTo}: {name: string, redirectsTo: string}) => {
    let navigate = useNavigate();
  
    function handleClick() {
      navigate(redirectsTo);
    }
  
    return (
      <button 
        className="underline underline-offset-2 hover:text-purple-200 text-[#BB86FC] text-xl my-2 mx-4 px-4 rounded-full"
        type="button" 
        onClick={handleClick}>
        {name}
      </button>
    );
  }

export {RedirectButton};