import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/axios/axiosInstance";

const initialState = {
  leads: [],
  status: "idle",
  error: null,
  //   createStatus: "idle",
};

export const fetchLeads = createAsyncThunk("leads/fetchLeads", async () => {
  const response = await axiosInstance.get("/leads");
  return response.data;
});

export const deleteLeads = createAsyncThunk("leads/deleteLeads", async (id) => {
  await axiosInstance.delete(`/leads/${id}`);
  return id;
});
export const postLead = createAsyncThunk("leads/postLead", async (formData) => {
  const response = await axiosInstance.post(`/leads/`, formData);
  console.log(response);
  return response.data;
});

const leads = createSlice({
  name: "leads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeads.fulfilled, (state, action) => {
        (state.status = "success"), (state.leads = action.payload);
      })
      .addCase(fetchLeads.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLeads.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteLeads.fulfilled, (state, action) => {
        (state.status = "success"),
          (state.leads = state.leads.filter(
            (lead) => lead.id !== action.payload
          ));
      })
      .addCase(deleteLeads.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteLeads.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(postLead.fulfilled, (state, action) => {
        (state.status = "success"),
          //   (state.createStatus = "success"),
          (state.leads = [action.payload, ...state.leads]);
      })
      .addCase(postLead.pending, (state) => {
        state.status = "loading";
        // state.createStatus = "loading";
      })
      .addCase(postLead.rejected, (state, action) => {
        state.status = "failed";
        // state.createStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default leads.reducer;
