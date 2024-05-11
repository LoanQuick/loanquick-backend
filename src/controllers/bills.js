import axios from "axios";
import { endpoints } from "../utils/zoho-endpoints.js";
import { Client } from "../models/client.js";

const getBills = async (req, res) => {
    let client_ = await Client.findOne({ client_id: process.env.CLIENT_ID });

    if (!client_) {
        return res.json({ message: "Client not found" });
    }

    const response = await axios.get(
        `${endpoints.getBills}?organization_id=60029297037`,
        {
            headers: {
                Authorization: `Zoho-oauthtoken ${client_.accessToken}`,
            },
        }
    );

    res.json({ message: "Success", data: response.data });
};

export { getBills };