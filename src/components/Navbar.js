import { useNavigate } from "react-router-dom"

export default function Navbar() {

    const navigate = useNavigate();

    const handleHomeClick = (e) =>{
        e.preventDefault()
        navigate('/');
    }
    return (
        <>
            <nav className="navbar nav">
                <div className="logo">
                    quiz<span>WHIZ</span>
                </div>

                <div className="feature" id="navMenu">
                    <span onClick={handleHomeClick}>HOME</span>
                </div>
            </nav>
        </>
    )
}
