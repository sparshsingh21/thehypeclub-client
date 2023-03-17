import axios from "axios";



export const fetchDataFromApi = async (url, token) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
            {
                headers: {
                    Authorization: "bearer" + token,
                },
            }
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const postData = async (url, token="", body) => {
    try {
        const {data} = await axios.post(
            process.env.REACT_APP_STRIPE_APP_DEV_URL + url,
            {
                headers: {
                    Authorization: "Bearer" + token
                },
                body: body
            }
        );
        return data;
    } catch(err) {
        return err;
    }
}

export const makePaymentRequest = (token) => axios.create({
    baseURL: process.env.REACT_APP_STRIPE_APP_DEV_URL,
    headers: {
        Authorization: "bearer " + token,
    },
});