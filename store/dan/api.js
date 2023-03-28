import axios from "axios"
const dan = axios.create({
  baseURL: "https://test.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dan20230328_get_hi_read(payload) {
  return dan.get(`/hi`)
}
function dan20230328_get_testtt_read(payload) {
  return dan.get(`/testtt`)
}
export const apiService = {
  dan20230328_get_hi_read,
  dan20230328_get_testtt_read
}
