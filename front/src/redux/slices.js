import { createSlice } from "@reduxjs/toolkit";
import { cancelAppointment as cancel } from "../helpers";
const initialState = {
  userId: 0,
  appointments: [],
};

const veterinariaSlice = createSlice({
  name: "veterinaria",
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    updateAppointments(state, action) {
      state.appointments = action.payload;
    },
    cancelAppointment(state, action) {
      //cancel(action, payload);
      state.appointments = state.appointments;
    },
    userLogout(state) {
      state.userId = 0;
      state.appointments = [];
    },
    resetState(state) {
      state = { ...initialState };
    },
  },
});

export const { setUserId, updateAppointments, cancelAppointment, userLogout } =
  veterinariaSlice.actions;
export default veterinariaSlice.reducer;
