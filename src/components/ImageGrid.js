import React from 'react';

import useFirestore from '../hooks/useFirestore'

import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images')
    console.log(docs)

  return (
    <div className="row">
            {docs && docs.map(doc => (
                <motion.div key={doc.id} layout whileHover={{ opacity: 1 }} onClick={() => setSelectedImg(doc.url)} className="col-4 mb-5">
                    <motion.img src={doc.url} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="img-content" alt="firebase img"></motion.img>
                </motion.div>
            ))}
    </div>
  );
}

export default ImageGrid;
