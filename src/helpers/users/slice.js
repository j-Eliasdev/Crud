import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE =[
      {
        Id: 45,
        name: "Peter Doe",
        email: "peter@gmail.com",
        gitHub: "Peter",
      },
      {
        Id: 4,
        name: "Erika Casio",
        email: "erika@gmail.com",
        gitHub: "Erika",
      },
      {
        Id: 5,
        name: "Pau Torres",
        email: "pau@gmail.com",
        gitHub: "Pau",
      },
      {
        Id: 6,
        name: "Alex Torres",
        email: "pau@gmail.com",
        gitHub: "Alex",
      },
]

const initialState = () => {
  const persistedState = localStorage.getItem("__redux__state__");
  if (persistedState){
    return JSON.parse(persistedState).users;
  } 
  return DEFAULT_STATE;
} 




export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      addNewUser: (state, action) =>{
        const Id = crypto.randomUUID();
        return [...state, {Id, ...action.payload}]
      },
      deleteUserById: (state, action) => {
        const id = action.payload;
        return state.filter((user) =>user.Id !== id)
      }
    
    },
})

export default userSlice.reducer;
export const {addNewUser, deleteUserById} = userSlice.actions