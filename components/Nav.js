import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link href="/">
        <a className="navbar-brand">
          <img
            src="/bgzurka-logo.png"
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/events">
              <a className="nav-link">Events</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
