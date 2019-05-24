const allUserReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_USERS':
            return action.payload;
    
        default:
            return state;
    }
};

//allUserReducer will be on the redux state at:
//state.allUsers
export default allUserReducer;