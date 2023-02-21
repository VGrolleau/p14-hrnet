const { createSlice, configureStore } = require("@reduxjs/toolkit");

const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        option: "",
        employees: []
    },
    reducers: {
        getOption: (state, action) => {
            state = {
                ...state,
                option: action.payload
            };
            return state;
        },
        createEmployee: (state, action) => {
            state = {
                ...state,
                employees: action.payload
            };
            return state;
        }
    }
});
export const { getOption, createEmployee } = employeeSlice.actions;

export const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer
    }
});