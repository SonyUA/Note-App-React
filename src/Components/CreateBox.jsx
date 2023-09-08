/* eslint-disable react/prop-types */
import { FaPlusCircle } from "react-icons/fa";
import ColorCircle from "./ColorCircle";
const CreateBox = (props) => {
    const { handleCreateBox, isCreateBox, firstNotes } = props;
    return (
        <div className='block__three flex ml-5 flex-col items-center justify-start'>
            <FaPlusCircle className='mt-5 text-4xl decoration-white cursor-pointer ease-in-out duration-300 hover:scale-125 text-my-red' onClick={handleCreateBox} />
            <div className='create__box h-52 w-10 flex justify-center relative  overflow-hidden'>
                <div className='create__boxInner mt-5 mb-5 flex flex-col justify-around items-center gap-4 absolute ease-in-out duration-500' style={{ top: isCreateBox ? "0px" : "-150px" }}>
                    <ColorCircle color={"red"} func={firstNotes} />
                    <ColorCircle color={"green"} func={firstNotes} />
                    <ColorCircle color={"yellow"} func={firstNotes} />
                    <ColorCircle color={"blue"} func={firstNotes} />
                </div>
            </div>
        </div>
    );
};

export default CreateBox;
