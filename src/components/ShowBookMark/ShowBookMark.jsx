
const ShowBookMark = ({show}) => {
    const {title} = show;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded'>
            {title}
        </div>
    );
};

export default ShowBookMark;