import '../styles/globals.css'
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
    {/* <Navbar /> */}
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
