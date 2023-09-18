import NavBar from '@/components/Navbar/Navbar';
import '@/styles/globals.css'
import { AuthContextProvider } from '@/utils/context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
      {/* <Component {...pageProps} /> */}
    </AuthContextProvider>
  )
}
