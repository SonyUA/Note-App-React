import { useState } from "react";
import "./App.css";
import { FaSun, FaSearch, FaPlusCircle, FaCheckCircle } from "react-icons/fa";

function App() {
    // eslint-disable-next-line no-unused-vars
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [isSearchBox, setIsSearchBox] = useState(false);
    const [isCreateBox, setIsCreateBox] = useState(false);
    const handleSearchBox = () => {
        setIsSearchBox(!isSearchBox);
    };
    const handleCreateBox = () => {
        setIsCreateBox(!isCreateBox);
    };
    return (
        <div className='wrapper container max-w-3xl mx-auto my-6'>
            <div className='block__box'>
                <div className='block__one flex justify-between items-center'>
                    <h1 className='text-4xl font-bold tracking-widest ml-5 text-my-blue'>Notet</h1>
                    <FaSun className='text-4xl cursor-pointer ease-in-out duration-300 mr-5 hover:scale-125 text-orange-700' />
                </div>
                <div className='block__two flex justify-end items-center'>
                    <div className='search__box w-52 h-10 relative overflow-hidden'>
                        <div className='search__blockInner mr-5 flex justify-around items-center gap-4 absolute top-2 ease-in-out duration-500' style={{ left: isSearchBox ? "3rem" : "14rem" }}>
                            <div className='w-5 h-5 bg-red-500 rounded-full cursor-pointer ease-in-out duration-300 hover:scale-125'></div>
                            <div className='w-5 h-5 bg-green-500 rounded-full cursor-pointer ease-in-out duration-300 hover:scale-125'></div>
                            <div className='w-5 h-5 bg-yellow-500 rounded-full cursor-pointer ease-in-out duration-300 hover:scale-125'></div>
                            <div className='w-5 h-5 bg-blue-500 rounded-full cursor-pointer ease-in-out duration-300 hover:scale-125'></div>
                        </div>
                    </div>
                    <FaSearch className='text-4xl mr-5 cursor-pointer ease-in-out duration-300 hover:scale-125 text-my-pink' onClick={handleSearchBox} />
                </div>
                <div className='block__three flex flex-col items-center justify-start'>
                    <FaPlusCircle className='mt-5 text-4xl decoration-white cursor-pointer ease-in-out duration-300 hover:scale-125 text-my-red' onClick={handleCreateBox} />
                    <div className='create__box h-52 w-10 flex justify-center relative  overflow-hidden'>
                        <div className='create__boxInner mt-5 mb-5 flex flex-col justify-around items-center gap-4 absolute ease-in-out duration-500' style={{ top: isCreateBox ? "0px" : "-150px" }}>
                            <div className='w-5 h-5 bg-red-500 rounded-full cursor-pointer ease-in-out duration-300 hover:scale-125'></div>
                            <div className='w-5 h-5 bg-green-500 rounded-full cursor-pointer ease-in-out duration-300 hover:scale-125'></div>
                            <div className='w-5 h-5 bg-yellow-500 rounded-full cursor-pointer ease-in-out duration-300 hover:scale-125'></div>
                            <div className='w-5 h-5 bg-blue-500 rounded-full cursor-pointer ease-in-out duration-300 hover:scale-125'></div>
                        </div>
                    </div>
                </div>
                <div className='block__four p-2'>
                    <div className='create__cart rounded-2xl'>
                        <div className='create__BlockOne '>
                            <textarea className='create__textArea rounded-tl-2xl text-white tracking-widest'></textarea>
                        </div>
                        <div className='create__BlockTwo flex justify-center items-start rounded-tr-2xl rounded-br-2xl'>
                            <span className='create__number mt-3 text-7xl text-white opacity-70'>?</span>
                        </div>
                        <div className='create__BlockThree flex justify-between items-center rounded-bl-2xl '>
                            <span className='date ml-5 text-yellow-400'>{date}</span>
                            <FaCheckCircle className='text-4xl mr-5 cursor-pointer ease-in-out duration-300 hover:scale-125 text-my-sky' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
