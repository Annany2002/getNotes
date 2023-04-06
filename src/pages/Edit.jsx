import {Trash, CaretCircleLeft} from '@phosphor-icons/react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import useCreateDate from '../components/useCreateDate'
import {motion} from 'framer-motion'

const Edit = ({notes, setNotes}) => {
   const {id} = useParams();
   const note = notes.find((item) => item.id == id);
   const [title, setTitle] = useState(note.title);
   const [details, setDetails] = useState(note.details);
   const date = useCreateDate();
   const navigate = useNavigate();

   const handleForm = (e) => {
      e.preventDefault();
      if(title && details){
         const newNote = {...note, title, details, date};
         const newNotes = notes.map((item) => {
            if(item.id == id)
            {
               item=newNote
            }
            return item;
         })
         setNotes(newNotes)
      }
      navigate('/');
   }

   const handleDelete = () => {
      if(window.confirm('Are you sure you want to delete ?'))
      {
         const newNotes = notes.filter(item => item.id != id);
         setNotes(newNotes);
         navigate('/');
      }
   }

   return (
   	<div className='flex flex-col max-w-[800px] min-h-screen h-full'>
       <div className='flex mt-3 mb-4 mx-2 justify-between'>
          <Link to='/'><CaretCircleLeft size={36} color="black" weight="fill" /></Link>
          <button className='tracking-wider border-2 border-black text-xl rounded-xl font-bold px-4 py-1' onClick={handleForm}>Save</button>
          <button onClick={handleDelete}><Trash size={36} /></button>
       </div>  
       <form className='w-full' onSubmit={handleForm}>
          <input className='w-full outline-none rounded-t-xl bg-transparent font-bold text-3xl px-2' type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' autoFocus/>
            <textarea className='tracking-wide mt-[1px] mb-2 outline-none w-full px-2 min-h-[650px] rounded-b-xl focus:border-2 focus:border-[#291720]' placeholder="Note Details" value={details} onChange ={(e) => setDetails(e.target.value)}></textarea>
       </form>
      </div>
   	)
}
export default Edit