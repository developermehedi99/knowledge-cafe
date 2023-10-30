import React from 'react';
import ShowBookMark from '../ShowBookMark/ShowBookMark';
import PropTypes from 'prop-types';

const BookMark = ({ bookmarks, readingTime }) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-2 p-4'>
            <p className='text-xl border rounded bg-blue-100 p-4 m-2 text-blue-400 font-bold'>Spent time on read : {readingTime} min</p>
            <p className='text-2xl font-bold'>Bookmarked Blogs : {bookmarks.length}</p>
            {
                bookmarks.map((show, idx) => <ShowBookMark
                    show={show}
                    key={idx}
                ></ShowBookMark>)
            }
        </div>
    );
};
BookMark.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}


export default BookMark;