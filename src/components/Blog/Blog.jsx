import PropTypes from 'prop-types';
import { FaRegBookmark} from 'react-icons/fa';

const Blog = ({ blog, handleBookMarks, handleReadingTime }) => {
    const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className='py-8 rounded-lg w-full h-96' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <h4>{posted_date}</h4>
                    </div>
                </div>
                <div className='items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleBookMarks(blog)}
                     className='text-2xl ml-2 items-center text-red-500'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>

            <h2  className='text-4xl font-bold py-4'>{title}</h2>
            <p>
                {hashtags.map((hash, index) => <span key={index}><a href="">#{hash}</a></span>)}
            </p>
            <button
                onClick={()=> handleReadingTime(reading_time)}
            className='text-lg text-blue-500 font-semibold underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blog;