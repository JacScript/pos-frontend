import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const BackButton = () => {

    
const history = useHistory();

  return (
    <button
    onClick={() => history(-1)}
    className='bg-[#025cca] p-3 text-xl text-white rounded-full font-bold'>
        <IoArrowBackOutline />
    </button>
  )
}

export default BackButton