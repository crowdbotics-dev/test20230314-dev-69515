import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const dan20230328_get_testtt_read = createAsyncThunk(
  "dan20230328_response_get_tests/dan20230328_get_testtt_read",
  async payload => {
    const response = await apiService.dan20230328_get_testtt_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const dan20230328_response_get_testsSlice = createSlice({
  name: "dan20230328_response_get_tests",
  initialState,
  reducers: {},
  extraReducers: {
    [dan20230328_get_testtt_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [dan20230328_get_testtt_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [dan20230328_get_testtt_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  dan20230328_get_testtt_read,
  slice: dan20230328_response_get_testsSlice
}
