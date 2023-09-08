/* eslint-disable react/prop-types */
import { FaSun } from "react-icons/fa";
const Header = (props) => {
    const { modeOn } = props;
    return (
        <div className='block__one flex justify-between items-center'>
            <h1 className='text-4xl font-bold tracking-widest ml-5 text-my-blue'>Notet</h1>
            <FaSun className='text-4xl cursor-pointer ease-in-out duration-300 mr-5 hover:scale-125 text-orange-700' onClick={modeOn} />
        </div>
    );
};

export default Header;
