import { Link } from 'react-router-dom';

function Navbar({setLevel,activeLevel}){
    const levels = ["A1","A2","A3","A4","A5"];
    return(
        <nav className="main-nav">
            <div className="nav-center">
                {/*<h1 className="nav-header">German</h1>*/}
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