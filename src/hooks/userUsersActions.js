import { useDispatch } from "react-redux";
import { addNewUser, deleteUserById } from "../helpers/users/slice";


export const useUserActions = () =>{
    const dispatch = useDispatch()
    
    const addUser = ({ name, email, gitHub }) => {
      dispatch(addNewUser({ name, email, gitHub }))
    }

    const removeUser = (Id) =>{
      dispatch(deleteUserById(Id))
    };

    return{removeUser, addUser}
  
}