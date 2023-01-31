import React, {useEffect} from 'react';
import 'styles/g-kit.scss';
import { useRouter } from "next/router";
import NProgress from 'nprogress';

const PSDSApp = ({Component, pageProps}) => {
    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeStart', () => NProgress.start());
        router.events.on('routeChangeComplete', () => NProgress.done());
        router.events.on('routeChangeError', () => NProgress.done());
    }, [router.events]);

    return <Component {...pageProps} />
};

export default PSDSApp