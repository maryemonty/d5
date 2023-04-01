import { BiListUl, BiDotsHorizontalRounded } from "react-icons/bi"

function TvShows() {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-between">
            <div className="d-flex">
                <h1 className="text-white fw-bold my-4">TV Shows</h1>
                <div className="btn-group align-items-baseline ms-5 mt-2">
                    <button type="button" className="rounded-0 btn btn-secondary border-end-0 bg-black fw-bold my-4">Genres</button>
                    <button type="button" className="rounded-0 btn btn-secondary border-start-0 dropdown-toggle dropdown-toggle-split bg-black" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                        <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                    </ul>
                </div>
            </div>
            <div className="me-4">
                <a className="border px-1 text-white" href><BiListUl /></a>
                <a className="border px-1 text-white" href><BiDotsHorizontalRounded /></a>
            </div>
        </div>

    )
}

export default TvShows