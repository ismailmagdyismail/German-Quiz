import { Link } from 'react-router-dom';

function Navbar({setLevel,activeLevel}){
    const levels = ["A1","A2","B1","B2","C1","C2"];
    return(
        <nav className="main-nav">
            <div className="nav-center">
                <div className="nav-links">
                    {levels.map(level =>
                        <button
                            key={level}
                            className={`btn btn--link ${activeLevel === level ? 'selected' : ''}`}
                            onClick={()=>setLevel(level)}>{level}
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}
export default Navbar