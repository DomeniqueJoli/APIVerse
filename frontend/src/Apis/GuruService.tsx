import axios from "axios";

export async function getApis(){
    const response = await axios.get("https://api.apis.guru/v2/list.json")
    return response.data;
}