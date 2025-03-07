import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 'dashboard',
  navIsOpen: false,
}

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setPage: (state, { payload }) => {
      state.page = payload
    },
    setNavIsOpen: (state, { payload }) => {
      state.navIsOpen = payload
    },
  },
})

export const { setPage, setNavIsOpen } = generalSlice.actions

export default generalSlice.reducer
