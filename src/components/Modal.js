import React from 'react';

import { motion } from 'framer-motion'

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null)
        }
    }

  return (
    <motion.div onClick={handleClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="backdrop">
      <motion.img src={selectedImg} initial={{ y: '-100vh' }} animate={{ y: 0 }} alt="larger img" style={{ height: '300px'}}></motion.img>
    </motion.div>
  );
}

export default Modal;