import Link from "next/link";

export default function Header(){
    return(<div id="mainNavigation">
        <nav role="navigation">
            <div className="py-3 text-center border-bottom">
                <img src="/images/mbti_trans.png" alt="MBTI logo" title="MBTI logo" className="invert w-25" />
            </div>
        </nav>
        <div className="navbar-expand-md">
            <div className="navbar-dark text-center my-2">
                <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>
                </button>
            </div>
            <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mx-auto ">
                   <li className="nav-item">
                        <Link className="nav-link" href="/">Mi is az MBTI?</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">A típusok <span className="text-info">(Hamarosan!)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Tesztek
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link className="dropdown-item" href="/tesztek/4">4 kérdéses <span className="text-danger">(ÚJ!)</span></Link></li>
                            <li><Link className="dropdown-item" href="/tesztek/72">72 kérdéses</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>);
}
