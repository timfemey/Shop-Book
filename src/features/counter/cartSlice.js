const ADD = "ADD";
const REMOVE = "REMOVE";

var initState = {
  total: 0,
  cart: [],
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        total: (state.total += 1),
        cart: [...state.cart, action.payload],
      };
    case REMOVE:
      let newCart = [...state.cart];
      const pos = state.cart.findIndex((item) => item.id === action.id);
      if (pos >= 0) {
        newCart.splice(pos, 1);
      } else {
        alert("Item you intend to remove isnt here, refresh browser");
      }
      return {
        ...state,
        total: (state.total -= 1),
        cart: newCart,
      };
    default:
      return state;
  }
};

/*
    
    addItem: (state, action) => {
      state.cart.push(action.payload.item);
      state.qty += 1;
      state.total += 2;
    },
    ,*/

export default cartReducer;
