import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/header.scss';
import '@/styles/forms.scss';
import '@/styles/mi-is-az-mbti.scss';
import Head from "next/head"
import {useEffect} from "react";

export default function App({Component, pageProps}) {


    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle");
    }, []);


    return <><Head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" /></Head><Component {...pageProps}/></>
}

