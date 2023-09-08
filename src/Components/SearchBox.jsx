import ColorCircle from "./ColorCircle";
/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";
const SearchBox = (props) => {
    const { isSearchBox, allColor, onlyColor, handleSearchBox } = props;
    return (
        <div className='block__two flex justify-end items-center'>
            <div className='search__box w-52 h-10 relative overflow-hidden'>
                <div className='search__blockInner mr-5 flex justify-around items-center gap-4 absolute top-2 ease-in-out duration-500' style={{ left: isSearchBox ? "2rem" : "14rem" }}>
                    <ColorCircle color={"purple"} func={allColor}>
                        All
                    </ColorCircle>
                    <ColorCircle color={"red"} func={onlyColor} />
                    <ColorCircle color={"green"} func={onlyColor} />
                    <ColorCircle color={"yellow"} func={onlyColor} />
                    <ColorCircle color={"blue"} func={onlyColor} />
                </div>
            </div>
            <FaSearch className='text-4xl mr-5 cursor-pointer ease-in-out duration-300 hover:scale-125 text-my-pink' onClick={handleSearchBox} />
        </div>
    );
};

export default SearchBox;
