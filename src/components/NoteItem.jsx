import {Link} from 'react-router-dom';

const NoteItem = ({note}) => {
	return(
			<Link to={`/edit-note/${note.id}`}>
				<div className='text-[#fb8b24] border-2 bg-myWhite rounded-2xl my-3 border-[2.5px] border-[#291720] px-2 py-2 mx-2 dark:bg-[#291720] dark:border-myWhite dark:border-[1.5px]'>
					<h4 className='font-bold tracking-wide text-2xl hover:underline pb-2'>{note.title.length > 40 ? (note.title.substr(0, 50)) + '...' : note.title}</h4>
					<p className='text-[#291720] py-2 tracking-wide font-bold dark:text-myYellow'>{note.date}</p>
			    </div>
			</Link>
		)
}
export default NoteItem;