/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
const SaveNotes = (props) => {
    const { addNotes, date, deleteNote } = props;
    return (
        <>
            {addNotes &&
                addNotes.map((el, index) => (
                    <div key={index} className='create__cart rounded-2xl'>
                        <div className='create__BlockOne rounded-tl-2xl '>
                            <p className='text-white text-center text-3xl p-3 tracking-widest'>{el.text}</p>
                        </div>
                        <div className='create__BlockTwo flex justify-center items-start rounded-tr-2xl rounded-br-2xl' style={{ background: el.color }}>
                            <span className='create__number mt-3 text-5xl  text-purple-500'>{index + 1}</span>
                        </div>
                        <div className='create__BlockThree flex justify-between items-center rounded-bl-2xl '>
                            <span className='date ml-5 text-yellow-400'>{date}</span>
                            <FaTrash className='text-4xl mr-5 cursor-pointer ease-in-out duration-300 hover:scale-125 text-my-red' onClick={() => deleteNote(el.text)} />
                        </div>
                    </div>
                ))}
        </>
    );
};

export default SaveNotes;
