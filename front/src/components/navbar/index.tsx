import { ReactComponent as GitHubIcon } from "assets/images/github.svg";
import { ReactComponent as LogoJPMoveis } from "assets/images/logo.svg";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="d-flex align-items-center justify-content-between">
          <LogoJPMoveis className="logo" />
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
