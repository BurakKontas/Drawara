import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from "framer-motion";
import { Provider } from 'react-redux'
import { CookiesProvider } from "react-cookie";

import { store } from '@/Redux/store'

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

//semantic-ui-react
import 'semantic-ui-css/semantic.min.css'

//swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';


export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <AnimatePresence mode='wait'>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
            transition={{
              duration: 1,
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Provider>
    </CookiesProvider>
  );
}