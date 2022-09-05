import { GET } from "../constants/user";

const INITIAL_STATE = {
  user : null
}
export default function User (state = INITIAL_STATE,action){
    switch(action.type) {
      case GET: return {
        ...state,
        user: action.payload
      }
      default : return state
    }
}
