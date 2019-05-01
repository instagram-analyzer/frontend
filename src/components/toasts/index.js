import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toasts = () => {
  return (
    <div>
      <ToastContainer pauseOnHover={false}/>
    </div>
  )
}

export default Toasts;