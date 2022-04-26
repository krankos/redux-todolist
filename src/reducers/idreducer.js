const initialState = {
    id: 0,
};
const newId = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_ID":
            return {...state, id: state.id + 1 };

        default:
            return state;
    }
};
export default newId;