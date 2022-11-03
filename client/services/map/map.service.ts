import axios from "axios";

const token = "9598fe121798127836342dcf244e7fe8432f5e11";

export const MapService = {
    async getAdress(adress: string) {
        const response = await axios.post(
            `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`,
            {
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Token " + token,
                },
                body: JSON.stringify({ query: adress }),
            }
        );
        console.log(response);
        if (!response) return;
        return response.data;
    },
};
