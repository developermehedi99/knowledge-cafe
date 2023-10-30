import Blogs from "./components/Blogs/Blogs"
import BookMark from "./components/BookMark/BookMark"
import Header from "./components/Header/Header"

function App() {

  return (
    <>
      <Header></Header>
      <div className="md:flex">
        <Blogs></Blogs>
        <BookMark></BookMark>
      </div>
    </>
  )
}

export default App
