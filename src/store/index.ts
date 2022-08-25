import { createStore } from "redux";

const initialState = {
  lists: [
    { name: "ブログの確認", complete: false },
    { name: "メールの返信", complete: true },
  ],
};

// eslint-disable-next-line
const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
