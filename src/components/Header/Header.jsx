import navimg from "../../assets/images/boy1.png"
import "./Header.css";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 max-w-6xl mx-auto border-b-2">
            <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
            <img className="img-profile" src={navimg} alt="" />
        </div>
    );
};

export default Header;