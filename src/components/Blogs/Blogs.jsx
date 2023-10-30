import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({handleBookMarks, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
            <h2 className='text-3xl'>Blogs : {blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                handleBookMarks={handleBookMarks}
                handleReadingTime={handleReadingTime}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBookMarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blogs;