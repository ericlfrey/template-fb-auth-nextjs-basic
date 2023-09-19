import { useAuth } from '@/utils/context/AuthContext';
import { useRouter } from 'next/router';
import styles from './navbar.module.css';
import Link from 'next/link';

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
              <Link passHref href="/" className="nav-link">
                Home
              </Link>
            </li>
            {!user.uid ? (
              <>
                <li className="nav-item">
                  <Link href="/signup" className=" nav-link">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/login" className=" nav-link">
                    Log In
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ">
                  <Link href="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link href="#" onClick={handleLogout} className="nav-link">
                    Log Out
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
