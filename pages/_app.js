import NavBar from '@/components/Navbar/Navbar';
import { AuthContextProvider } from '@/utils/context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </AuthContextProvider>
  )
}
