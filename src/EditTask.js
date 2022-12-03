import Modal from "./Modal"
import {useState} from 'react'
import './editTask.css'
import {db} from './firebase'
import {doc, updateDoc} from 'firebase/firestore'

function EditTask({open, onClose, toEditTitle, toEditDescription, id}) {

  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)

  /* function to update document in firestore */
  const handleUpdate = async (e) => {

    // doc function could be used to create a rference from a data in 
    // Firestore and put it as a variable
    const taskDocRef = doc(db, 'tasks', id)
    try {
      await updateDoc(taskDocRef,{
        title: title,
        description: description
      })
      onClose()
    } catch (err) {
      alert(err)
    }

  }

  return (
    <Modal modalLable='Edit Task' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editTask' name='updateTask'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}/>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditTask
