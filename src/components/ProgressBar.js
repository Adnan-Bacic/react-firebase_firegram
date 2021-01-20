import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage'

import { motion } from 'framer-motion'


const ProgressBar = ({ file, setFile }) => {

    const { url, progress } = useStorage(file)
    console.log(progress, url)

    useEffect(() => {
        //if url is created(when upload is done), remove progressbar
        //since its null it wont show in uploadform.js
        if(url){
            setFile(null)
        }
    }, [url, setFile])

  return (
    <div className="row">
      <div className="col-12">
        <div className="progress">
          <motion.div initial={{ width: 0 }} animate={{ width: progress + '%' }} className="progress-bar bg-success"></motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
