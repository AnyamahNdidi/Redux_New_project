import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [],
  friends: [],
  friendsDeatils: null

}

const socail = createSlice({
  name: "socail",
  initialState,
  reducers: {
    adduser: (state, { payload }) => {
      state.user = payload
      // alert(payload)
    },
    addfriend: (state, { payload }) => {
      const storedFile = { ...payload, QTY: 1 };
      state.friends.push(storedFile);
    }
  }
});

export const { adduser, addfriend } = socail.actions
export default socail.reducer