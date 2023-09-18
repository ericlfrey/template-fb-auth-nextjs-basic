import { useAuth } from '@/utils/context/AuthContext';
import { useRouter } from 'next/router';
import Nav from 'react-bootstrap/Nav';
import styles from './navbar.module.css';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  const { user, logOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Firebase Auth Template
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Nav.Link aria-current="page" href="/">
                Home
              </Nav.Link>
            </li>
            {!user.uid ? (
              <>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Log In</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="#" onClick={handleLogout}>
                  Log Out
                </Nav.Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">Home</Nav.Link>
    // {!user.uid ? (
    //   <>
    //     <Nav.Link href="/signup">Sign Up</Nav.Link>
    //     <Nav.Link href="/login">Log In</Nav.Link>
    //   </>
    // ) : (
    //   <>
    //     <Nav.Link href="/dashboard">Dashboard</Nav.Link>
    //     <Nav.Link href="/" onClick={handleLogout}>
    //       Log Out
    //     </Nav.Link>
    //   </>
    // )}
    //         {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown> */}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
}

export default NavBar;
