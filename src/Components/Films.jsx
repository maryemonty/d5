import { Container } from "react-bootstrap";
import Film from "./Film";

function Films() {
    return (
        <>
            <p className="text-white fs-2 fw-bold text-start px-2">Trending Now</p>
            <Container>
                <Film film="naruto" />
            </Container>
            <p className="text-white fs-2 fw-bold text-start px-2">Watch it Again</p>
            <Container>
                <Film film="barbie" />
            </Container>
            <p className="text-white fs-2 fw-bold text-start px-2">New Releases</p>
            <Container>
                <Film film="shrek" />
            </Container>
        </>
    )
}

export default Films