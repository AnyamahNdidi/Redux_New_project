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
      const storedCount = state.friends.findIndex(
        (item) => item.id === payload.id
      )
      if (storedCount >= 0) {
        state.friends[storedCount].QTY += 1
      } else {
        const storedFile = { ...payload, QTY: 1 };
        state.friends.push(storedFile);
      }
    },
    remove: (state, { payload }) => {
      const remveItem = state.friends.filter((item) =>
        item.id !== payload.id
      )
      state.friends = remveItem

    }
  }
});

export const { adduser, addfriend, remove } = socail.actions
export default socail.reducer