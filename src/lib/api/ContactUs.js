import Constant from "config/Constant";


const MASTER_PATH = Constant.URL_MASTER_PATH;

export const getListContactUsSSR = async () => {
    const URL = MASTER_PATH + "konten/hubungi-kami";
    const res = await fetch(URL);

    return await res.json();
}