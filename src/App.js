import React, { Fragment, useState } from 'react';

import Hero from './components/Hero'
import UploadForm from './components/UploadForm'
import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'

const App = () => {

  const  [selectedImg, setSelectedImg] = useState(null)

  return (
    <Fragment>
      <div className="container mt-5">
        <Hero></Hero>
        <UploadForm></UploadForm>
        <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
        {selectedImg &&
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}></Modal>}
      </div>
    </Fragment>
  );
}

export default App;