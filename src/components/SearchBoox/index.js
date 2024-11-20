import { IoSearch } from "react-icons/io5";

const SearchBoox = () => {

    return(
        <div className="d-flex align-items-center searchbox posotion-relative">
            <IoSearch className="mr-2"/>
            <input type="text" placeholder="Search here...."/>
        </div>
    )
}

export default SearchBoox;