import { useState, useEffect } from 'react'

import { projectStorage, projectFirestore, timeStamp } from '../firebase/config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
    //references
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFirestore.collection('images')

    storageRef.put(file).on('state_changed', (snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(percentage)
    }, (err) => {
        setError(err)
    }, async () => {
        //get image url
        const url = await storageRef.getDownloadURL()
        
        //add image url to database
        collectionRef.add({
            url: url,
            createdAt: timeStamp()
        })

        setUrl(url)
    })

    //code will run every time file value is changed
    }, [file])

    //return values
    return { progress, url, error }
}

export default useStorage