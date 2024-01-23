import 'tailwindcss/tailwind.css';
import '../assets/styles/globals.css';
import '../assets/styles/core.scss';
import Header from '../components/header';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyPortfolio({ Component, pageProps }) {
    return (
        <ParallaxProvider>
            <Header />
            <Component {...pageProps} />
        </ParallaxProvider>
    );
}

export default MyPortfolio