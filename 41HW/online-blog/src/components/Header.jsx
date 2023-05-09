export function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="#" className="header__logo">
                        <img src="./images/logo.jpg" alt="Logo image" className="header__img" />
                    </a>
                    <nav className="header__nav">
                        <ul className="header__list">
                            <li className="header__menu">
                                <a href="#" className="header__link">Home</a>
                            </li>
                            <li className="header__menu">
                                <a href="#" className="header__link">Blog</a>
                            </li>
                            <li className="header__menu">
                                <a href="#" className="header__link">News</a>
                            </li>
                            <li className="header__menu">
                                <a href="#" className="header__link">About</a>
                            </li>
                            <li className="header__menu">
                                <a href="#" className="header__link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}