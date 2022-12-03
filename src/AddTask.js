import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'

// db is a Firestore instance, a collection
// db is a ref to addDoc and Timestamp
import {db} from "./firebase"
import { collection, addDoc, Timestamp } from "firebase/firestore"

function AddTask({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault() // WHAT?
    try {
      // the addDoc function adds data to Firestore with automatic index
      // collection is the TABLE of db and 'tasks' is its name
      await addDoc(collection(db, 'tasks'), {
        // these are like the columns in table DB
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
  return (
    <Modal modalLable='Add Task' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task decription'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddTask
