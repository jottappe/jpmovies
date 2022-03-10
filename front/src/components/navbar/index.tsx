import { ReactComponent as GitHubIcon } from "assets/images/github.svg";
import { ReactComponent as LogoJPMovies } from "assets/images/logo.svg";
import "./styles.css";

function Navbar() {
  return (
    <header className="d-flex align-items-center">
      <nav className="container">
        <div className="d-flex align-items-center justify-content-between">
          <LogoJPMovies className="logo" />
          <a
            href="https://github.com/jottappe"
            target="_blank"
            rel="noreferrer"
            className="d-flex"
          >
            <div className="d-flex gap-2">
              <GitHubIcon />
              <p className="contact-link m-0">/jottappe</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
