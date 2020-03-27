import Link from 'next/link';

const Nav = () => {
  const items = [
    {
      nav: '/',
      navname: 'Home'
    },
    {
      nav: '/events/all',
      navname: 'Events'
    },
    {
      nav: '/editevent',
      navname: 'Edit Event'
    },
    {
      nav: '/test',
      navname: 'Test'
    }
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link href="/">
        <a className="navbar-brand">
          <img
            src="/bgzurka-logo.png"
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt="bgzurka-logo"
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
          {items.map(item => (
            <li className="nav-item">
              <Link href={item.nav}>
                <a className="nav-link">{item.navname}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
