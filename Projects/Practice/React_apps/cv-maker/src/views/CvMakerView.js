import React from 'react'
import { useState,useEffect } from 'react';
import { database, storage} from '../config/firebase';
import{ ref, push, set} from 'firebase/database'
import { ref as refStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
export default function CvMakerView() {

    const[inputValues, setInputValues]=useState(null)
    const [succes, setSucces]=useState(false)
    const[selectedFile, setSelectedFile]=useState(null)

    const submitHandler=(event)=>{
        event.preventDefault();
        event.target.reset();
        const cvRef=ref(database,'/Cvs')
        const newCv=push(cvRef)

        if (selectedFile) {
            const fileName = selectedFile.name;
            const fileRef = refStorage(storage, 'blog/'+fileName);
        
            uploadBytes(fileRef, selectedFile)
            .then(uploadResult => getDownloadURL(uploadResult.ref))
            .then(img => set(newCv, {...inputValues, img }))
            .then(() => {
            setSucces(true);
            setInputValues(null)
            event.target.reset();
            setSelectedFile(null)
            })
            .catch(e => console.log(e))
  
      }
      else{
        set(newCv, inputValues)
        .then(() => {
        setSucces(true);
        setInputValues(null)
        event.target.reset();
        })
        .catch(e => console.log(e))
    }}
    const changeHandler=(event)=>{
        setInputValues((prev)=>({...prev, [event.target.name]:event.target.value}))
    }
    const fileSelectHandler=(event)=>{
        setSelectedFile(event.target.files[0])
    }

    return (
    <div>
        <form onSubmit={submitHandler}>
            <label htmlFor="">
                <input name="" type="file" onChange={fileSelectHandler}/>
            </label><br/>
            <label htmlFor="firstname">First name*
                <textarea name="firstname" onChange={changeHandler}></textarea>
            </label><br/>
            <label htmlFor="lastname">Last name*
                <textarea name="lastname" onChange={changeHandler}></textarea>
            </label><br/>
            <label htmlFor="email">E-mail adress*
                <textarea name="email" onChange={changeHandler}></textarea>
            </label><br/>
            <label htmlFor="tel">Phone number
                <textarea name="tel" onChange={changeHandler}></textarea>
            </label><br/>
            <label htmlFor="adress">Adress
                <textarea name="adress" onChange={changeHandler}></textarea>
            </label><br/>
            <label htmlFor="work">Work experience*
                <textarea name="work" onChange={changeHandler}></textarea>
            </label><br/>
            <label htmlFor="school">Studies*
                <textarea name="school" onChange={changeHandler}></textarea>
            </label><br/>
            <label htmlFor="lang">Language skilss
                <textarea name="lang" onChange={changeHandler}></textarea>
            </label><br/>
            <label htmlFor="hobby">Hobbies
                <textarea name="hobby" onChange={changeHandler}></textarea>
            </label><br/>
            <button type="submit">Mentés</button>
        </form>
    </div>
  )
}
