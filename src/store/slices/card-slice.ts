import { createSlice } from "@reduxjs/toolkit";

type CardItem = {
  id: string;
  image: string;
  price: number;
  title: string;
};

type InitialState = {
  card: Array<CardItem>;
};

const initialState: InitialState = {
  card: [],
};

const CardSlice = createSlice({
  name: "card",
  initialState: initialState,
  reducers: {
    addToCard(state, action) {
      const newCardItem: CardItem = {
        ...action.payload,
      };

      state.card.push(newCardItem);
    },
    removeFromCard(state, action) {
      state.card.filter((e) => e.id !== action.payload.id);
    },
  },
});

export const { addToCard, removeFromCard } = CardSlice.actions;

export default CardSlice.reducer;
