import {useRouter} from 'next/router';
import Form from "@/components/forms/Form";
import Header from "@/components/Header";

export default function Test({testType}) {

    return (<><Header/><Form value={testType}/></>);
}

export async function getServerSideProps({params}) {

    return {
        props: {
            testType: params.testType
        }
    }
}