import axios from "axios";

const instance=axios.create({
    baseURL:
    "https://burger-builder-2643a-default-rtdb.asia-southeast1.firebasedatabase.app/"
})
export default instance;