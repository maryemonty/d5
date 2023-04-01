import { Container } from "react-bootstrap";
import Film from "./Film";
import FilmDue from "./FilmDue";
import FilmTre from "./FilmTre";

function Films() {
    return (
        <>
            <p className="text-white fs-2 fw-bold text-start px-2">Trending Now</p>
            <Container>
                <Film />
            </Container>
            <p className="text-white fs-2 fw-bold text-start px-2">Watch it Again</p>
            <Container>
                <FilmDue />
            </Container>
            <p className="text-white fs-2 fw-bold text-start px-2">New Releases</p>
            <Container>
                <FilmTre />
            </Container>
        </>
    )
}

export default Films