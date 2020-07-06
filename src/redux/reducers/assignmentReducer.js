const assignmentReducer = (state = [], action) => {
    switch (action.type){
        case "GET_TASK" :
            state= [...action.payload.data];
            return state;
       case "POST_TASK" :
           state = [...state, action.payload.data]
            return state;
        case "EDIT_TASK" :
            state = [...state, action.payload.data]
            return state;
        case "DELETE_TASK" :
            return action.payload.data;
        default :
            return state
    }
}

export default assignmentReducer;