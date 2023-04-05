import {MagnifyingGlass, Plus, X, Moon, Sun} from '@phosphor-icons/react'
import {Link} from 'react-router-dom'
import NoteItem from '../components/NoteItem'
import {useState, useEffect} from 'react'

const Notes = ({dark, setDark, notes}) => {
   const [showSearch, setShowSearch] = useState(false);
   const [text, setText] = useState('');
   const [filteredNotes, setFilteredNotes] = useState(notes)

   const handleSearch = () => {
      setFilteredNotes(notes.filter(note => {
         if(note.title.toLowerCase().match(text.toLocaleLowerCase())){
            return note;
         }
      }))
   }

   useEffect(handleSearch, [text])

   return (
   	<div className ='flex my-0 rounded-xl mx-auto w-full flex-wrap lg:w-2/3 bg-myYellow items-center max-w-[600px] dark:bg-[] h-full min-h-screen xl:my-2'>
          <div className='flex flex-row py-6 px-4 w-full justify-between'>
             {!showSearch && <h2 className='text-5xl text-[#291720] font-bold tracking-wide'>My Notes</h2>}
             {showSearch && <input className='text-gray-300 border-2 border-black outline-none rounded-xl bg-transparent focus:bg-[#291720] tracking-wide font-medium px-4' value={text} placeholder = 'Keyword...' autoFocus type="text" onChange={(e) => {setText(e.target.value);handleSearch();}}/>}
             <button onClick={() => setShowSearch(prevState => !prevState)} className='border-[3.5px] border-gray-900 px-2 py-2 rounded-xl'>
                {!showSearch ? <MagnifyingGlass size={32} weight='bold'/> : <X size={32} weight='bold'/>}
             </button>
          </div>
          {filteredNotes.length == 0 && <div className='mt-3 w-full text-center bg-red-400'> <p className='text-4xl font-mono font-bold'>No Notes found...</p></div>}
          <div className='grid grid-cols-2 w-full'>
             {filteredNotes.map(note => <NoteItem key={note.id} note={note}
               />)}
          </div> 
          <div className='flex w-full justify-between'>
             <button className='px-4' onClick={() => setDark(!dark)}>{!dark ? <Moon size={38} /> : <Sun size={32}/>}</button>
             <Link to='/create-note'><button className='bg-transparent outline-none border-[2.5px] border-[#291720] my-2 mx-4 rounded-xl hover:bg-[#fb8b24]'><Plus size={46} color='#291720' weight='bold'/></button></Link>
          </div>
      </div>
   	)
}
export default Notes