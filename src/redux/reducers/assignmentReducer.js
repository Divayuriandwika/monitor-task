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
            const index = state.findIndex(res=> res._id === action.payload.data._id)

            if(index !== -1 ){
                state= [
                    ...state.slice(0,index),
                    ...state.slice(index+1),
                    ]
            }
            return state;
        default :
            return state
    }
}

export default assignmentReducer;