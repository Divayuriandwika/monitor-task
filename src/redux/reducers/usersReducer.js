const assignmentReducer = (state = [], action) => {
    switch (action.type){
        case "GET_NAME" :
            return action.payload.data;
       case "POST_TASK" :
            return action.payload.data;
        case "EDIT_TASK" :
            return action.payload.data;
        case "DELETE_TASK" :
            return action.payload.data;
        default :
            return state
    }
}

export default assignmentReducer;