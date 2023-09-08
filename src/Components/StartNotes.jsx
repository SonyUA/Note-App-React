/* eslint-disable react/prop-types */
import { FaCheckCircle } from "react-icons/fa";
const StartNotes = (props) => {
    // eslint-disable-next-line react/prop-types
    const { startNotes, textAreaRef, date, addNote } = props;
    return (
        <>
            {startNotes && (
                <div className='create__cart rounded-2xl'>
                    <div className='create__BlockOne '>
                        <textarea ref={textAreaRef} placeholder='Add note' className='text-center create__textArea  text-white tracking-widest'></textarea>
                    </div>
                    <div className='create__BlockTwo flex justify-center items-start' style={{ background: startNotes.color }}>
                        <span className='create__number mt-3 text-7xl  text-purple-500 opacity-70'>?</span>
                    </div>
                    <div className='create__BlockThree flex justify-between items-center '>
                        <span className='date ml-5 text-yellow-400'>{date}</span>
                        <FaCheckCircle className='text-4xl mr-5 cursor-pointer ease-in-out duration-300 hover:scale-125 text-my-sky' onClick={addNote} />
                    </div>
                </div>
            )}
        </>
    );
};

export default StartNotes;
