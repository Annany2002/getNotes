import Create from './pages/Create'
import Edit from './pages/Edit'
import Notes from './pages/Notes'
import dummy_Notes from './dummyNotes'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useState, useEffect} from 'react';

const App = () => {
  const [dark, setDark] = useState(false);
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  },[notes])

  return (
    <div className = {dark ? 'dark' : ''}>
      <div className = 'w-full h-full flex flex-col min-h-screen items-center bg-myWhite dark:bg-[#291720]'>
       <BrowserRouter> 
        <Routes>
          <Route path ='/' 
           element = {<Notes notes={notes} dark = {dark} setDark={setDark}/>}/>
          <Route path ='/create-note' 
              element = {<Create setNotes={setNotes}/>} />
          <Route path ='/edit-note/:id' 
              element = {<Edit notes={notes} setNotes={setNotes}/>} />
        </Routes>
       </BrowserRouter>
      </div>
    </div>
    )
}
export default App