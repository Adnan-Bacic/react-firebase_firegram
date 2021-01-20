import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        //firestore db
        const unsub = projectFirestore.collection(collection).orderBy('createdAt', 'desc')
        //snapshot in time
        .onSnapshot((snapshot) => {
            //empty array to store data
            let documents = []
            //loop through data
            snapshot.forEach(doc => {
                //push data to array
                documents.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
                setDocs(documents)
            
        })

        return () => unsub()
    }, [collection])

    return { docs }
}

export default useFirestore