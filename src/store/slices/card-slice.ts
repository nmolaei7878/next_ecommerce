import { createSlice } from "@reduxjs/toolkit";

type CardItem = {
  id: string;
  image: string;
  price: number;
  title: string;
  exsist: boolean;
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
        exsist: true,
      };

      state.card.push(newCardItem);
    },
    removeFromCard(state, action) {
      state.card = state.card.filter((e) => e.id !== action.payload.id);
      console.log(state.card);
    },
  },
});

export const { addToCard, removeFromCard } = CardSlice.actions;

export default CardSlice.reducer;
