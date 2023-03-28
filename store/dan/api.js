import axios from "axios"
const dan = axios.create({
  baseURL: "https://test.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dan20230328_get_hi_read(payload) {
  return dan.get(`/hi`)
}
export const apiService = { dan20230328_get_hi_read }
