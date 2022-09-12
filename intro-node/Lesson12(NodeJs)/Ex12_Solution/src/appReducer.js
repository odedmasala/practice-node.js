const appReducer = (state = { cars: [] }, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, cars: [...state.cars, action.payload] }

        case "ADDED":
            return { ...state, cars: action.payload }

        case "LOAD":
            return { ...state, cars: action.payload }

        case "DELETE":
            let id = action.payload;
            let arr = state.cars;

            let index = arr.findIndex(x => x.id == id);
            if (index >= 0) {
                arr[index].status = "DELETED"
            }

            return { ...state, cars: arr }

        case "UPDATE":
            let id2 = action.payload.id;
            let arr2 = state.cars;

            let index2 = arr2.findIndex(x => x.id == id2);
            if (index2 >= 0) {
                arr2[index2] = action.payload;
                arr2[index2].status = "UPDATED"
            }

            return { ...state, cars: arr2 }


        default:
            return state;
    }
}


export default appReducer