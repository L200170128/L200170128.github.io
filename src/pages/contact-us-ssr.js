import PublicTemplate from "component/templates/PublicTemplate";
import { getListContactUsSSR } from "lib/api/ContactUs";
// import ReactHtmlParser from "react-html-parser";

const pageTitle = "Contact Us SSR";

export async function getServerSideProps() {
    const res = await getListContactUsSSR()
    const data = await res.result;

    return {props: {data}}
}

const ContactUsSSR = ({data}) => {
    return <PublicTemplate pageTitle={pageTitle}>
        <h1>{pageTitle}</h1>
        {data.length === 0
            ? "Not Found"
            : data.map((object, index) => {
                return <div key={index}>
                    <h5>{object.title}</h5>
                        <div>{object.description && ReactHtmlParser(object.description)}</div>
                </div>
            })}
    </PublicTemplate>
};

export default ContactUsSSR;