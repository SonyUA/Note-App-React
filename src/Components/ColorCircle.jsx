/* eslint-disable react/prop-types */
const ColorCircle = (props) => {
    // eslint-disable-next-line react/prop-types
    const { func, color } = props;
    const classForCircle = `text-white text-center text-sm w-5 h-5 bg-${color}-500 rounded-full cursor-pointer ease-in-out duration-300 hover:scale-125`;
    return (
        <>
            <div className={classForCircle} onClick={() => func(color)}>
                {props.children}
            </div>
        </>
    );
};

export default ColorCircle;
