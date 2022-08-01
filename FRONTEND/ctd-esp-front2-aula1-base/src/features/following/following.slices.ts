import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FS = {
  followingIds: number[];
};

const initialState: FS = {
  followingIds: []
};

const followingSlice = createSlice({
  name: 'following',
  initialState,
  reducers: {
    addCharacterToFollowingList: (state, action: PayloadAction<number>) => {
      state.followingIds = [action.payload, ...state.followingIds];
    },
    removeCharacterToFollowingList: (state, action: PayloadAction<number>) => {
      state.followingIds = state.followingIds.filter((id) => id !== action.payload);
    },
    cleanCharacterFollowingList: (state) => {
      state.followingIds = [];
    }
  }
});
export const {
  addCharacterToFollowingList,
  removeCharacterToFollowingList,
  cleanCharacterFollowingList
} = followingSlice.actions;

export default followingSlice.reducer;
