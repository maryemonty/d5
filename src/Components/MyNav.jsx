import { BiSearch, BiBell } from "react-icons/bi"
import Logo from "../assets/logo.png"
import Avatar from "../assets/avatar.png"
import { Navbar } from "react-bootstrap"

function MyNav() {
    return (
        <Navbar sticky="top" className="bg-black">
            <div className="container-fluid">
                <img src={Logo} alt="logo" style={{ width: '100px' }} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <a className="nav-link active text-white fw-bold" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#">Tv Shows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#">Recently Added</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-bold" href="#">My List</a>
                        </li>
                    </ul>
                    <div className="d-flex navbar-nav mt-1">
                        <a className="nav-link text-white" href="#"><BiSearch /></a>
                        <a className="nav-link text-white" href="#">KIDS</a>
                        <a className="nav-link text-white" href="#"><BiBell /></a>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white me-4" href="#" >
                                <img src={Avatar} alt="Avatar" style={{ width: '30px' }} />
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        </Navbar>
    );
}


export default MyNav