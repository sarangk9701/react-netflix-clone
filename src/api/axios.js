import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key : "ff1b4ef72fefec10018e892782c2e18e",
        language : "ko-KR",
    },
});
export default instance;