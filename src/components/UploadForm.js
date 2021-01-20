import React, { useState } from 'react';

import ProgressBar from './ProgressBar'

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [errorMSG, setErrorMSG] = useState(null)

    const allowedImageTypes = ['image/png', 'image/jpeg', 'image/jpg']

    const fileChangeHandler = (e) => {
        //get first file selected
        let selectedImage = e.target.files[0]
        console.log(selectedImage)

        if(selectedImage && allowedImageTypes.includes(selectedImage.type)){
            setFile(selectedImage)
            setErrorMSG('')
        } else {
            //set null if not valid
            setFile(null)

            setErrorMSG('Please select a valid image type: PNG, JPEG, JPG')
        }
    }

  return (
    <div className="row">
        <div className="col-12">
            <form>
                <div className="form-group">
                    <label className="d-block">Upload file</label>
                    <input onChange={fileChangeHandler} type="file"></input>
                </div>
                <div>
                    {file &&
                    <ProgressBar file={file} setFile={setFile}></ProgressBar>}
                </div>
                <div className="text-danger">
                    {errorMSG &&
                    <div>{errorMSG}</div>}
                </div>
                <div className="text-success">
                    {file &&
                    <div>File {file.name} selected</div>}
                </div>
            </form>
        </div>
    </div>
  );
}

export default UploadForm;
