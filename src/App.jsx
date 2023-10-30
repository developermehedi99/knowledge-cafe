import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import BookMark from "./components/BookMark/BookMark"
import Header from "./components/Header/Header"

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = time => {
     const newTime = readingTime + time;
     setReadingTime(newTime);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-6xl mx-auto">
        <Blogs handleBookMarks={handleBookMarks}
          handleReadingTime={handleReadingTime}>
        </Blogs>
        <BookMark readingTime={readingTime} bookmarks={bookmarks}></BookMark>
      </div>
    </>
  )
}

export default App
