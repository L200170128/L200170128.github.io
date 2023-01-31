import PublicTemplate from "component/templates/PublicTemplate";
import { useEffect, useState } from "react";
import { getListContactUsSSR } from "lib/api/ContactUs";
// import ReactHtmlParser from "react-html-parser";

const pageTitle = "Contact Us CSR";

const ContactUsCSR = () => {
    const [mainData, setMainData] = useState([]);
    const [mainDataIsLoading, setMainDataIsLoading] = useState(true);
    const [dataNotFound, setDataNotFound] = useState(false);

    useEffect(() => {
        setMainDataIsLoading(true);
        setDataNotFound(false);
        fetchData().then(data => {
            setMainDataIsLoading(false);
            if (data.length > 0) {
                setMainData(data);
                return;
            }
            setDataNotFound(true);
        });
    }, []);

    const fetchData = async () => {
        const res = await getListContactUsSSR()
        return await res.result;
    }

    return <PublicTemplate pageTitle={pageTitle}>
        <h1>{pageTitle}</h1>
        {mainDataIsLoading
            ? "Loading"
            : dataNotFound
                ? "Not Found"
                : mainData.map((object, index) => {
                    return <div key={index}>
                        <h5>{object.title}</h5>
                        <div>{object.description && ReactHtmlParser(object.description)}</div>
                    </div>
                })}
    </PublicTemplate>
};

export default ContactUsCSR;