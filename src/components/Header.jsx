import { Link } from "react-router-dom";

export function Header() {
    return (
        <header style={{ backgroundColor: "#1a2b55ff", color: "white", padding: "15px" }}>
            <h1 style={{color:'white'}}>Mening shahrim</h1>

            <nav style={{ marginTop: "10px" }}>
                <Link to="/" style={{ color: "white", marginRight: "15px" }}>
                    MyCity
                </Link>

                <Link to="/about" style={{ color: "white" }}>
                    AboutMe
                </Link>
            </nav>
        </header>
    );
}
