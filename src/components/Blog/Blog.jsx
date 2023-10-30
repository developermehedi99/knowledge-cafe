import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const { cover, title, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div>
            <img className='py-8' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <h4>{posted_date}</h4>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>

            <h2  className='text-4xl font-bold py-4'>{title}</h2>
            <p>
                {hashtags.map((hash, index) => <span key={index}><a href="">#{hash}</a></span>)}
            </p>
            <button className='text-lg text-blue-500 font-semibold underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;