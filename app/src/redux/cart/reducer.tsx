const initialState = {
  currentCart: 50,
};

const CartReducer = (state = initialState, action: any) => {
  if (action.type === "DECREASE_ITEM_QUANTITY") {
    return {
      ...state,
      currentCart: action.payload,
    };

    // const clickedItem = action.payload.clickedItem;

    // const updatedState = state.map((prevState: any) => {
    //   if (prevState.id === clickedItem.id) {
    //     return { ...prevState, amount: clickedItem.amount + 1 };
    //   } else {
    //     return prevState;
    //   }
    // });
  }

  return state;
};

export default CartReducer;
