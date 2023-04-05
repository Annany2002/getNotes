import {Link, useNavigate} from 'react-router-dom'
import {CaretCircleLeft} from '@phosphor-icons/react'
import {useState} from 'react'
import {v4 as uuid} from 'uuid'

import useCreateDate from '../components/useCreateDate'

const Create = ({setNotes}) => {
   const [title, setTitle] = useState('')
   const [details, setDetails] = useState('');
   const date = useCreateDate();
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      if(title || details)
      {
         const note ={id:uuid(),title,details,date};
         setNotes(prevNotes => [note, ...prevNotes]);
         navigate('/');
      }
   }
     
   return (
   	<div className='flex p-3 flex-col min-h-screen h-full mx-auto w-full md:max-w-[800px]'>
       <div className='flex justify-between'>
          <button>
             <Link to='/'><CaretCircleLeft size={36} color="#291720" weight="fill" /></Link>
          </button>
          <button className='border-2 border-[#291720] mx-2 px-4 py-2 text-xl rounded-full text-[#291720] hover:bg-[#291720] hover:text-myWhite font-bold my-2' onClick={handleSubmit}>Save</button>
       </div>  
       <form onSubmit={handleSubmit}>
          <input type='text' className='w-full tracking-wide rounded-t-xl outline-none font-medium bg-transparent text-4xl break-words mx-auto py-3 px-2' value={title} placeholder='Title' autoFocus onChange={(e) => setTitle(e.target.value)}/>
          <textarea className='w-full outline-none tracking-wider break-words bg-transparent focus:border-gray-900 focus:border-[2px] rounded-b-xl px-2 py-1 text-xl' placeholder="Note Details..." value={details} onChange={(e) => setDetails(e.target.value)} rows="28"></textarea>
       </form>
      </div>
   	)
}
export default Create