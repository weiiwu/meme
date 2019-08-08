const initialState = {
  designs: [
    { id: 1, name: "Project 1", frameColor: "black" },
    { id: 2, name: "Project 2", frameColor: "blue" },
    { id: 3, name: "Project 3", frameColor: "white" },
    { id: 4, name: "Project 4", frameColor: "red" }
  ]
};

const designReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DESIGN":
      console.log("SAVED IN THE DB", action.design);
      break;
    default:
      console.log("DEFAULT", action.design);
  }
  return state;
};

export default designReducer;
