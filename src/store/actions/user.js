import { GET } from "../constants/user"


const getUserInfo = (payload)=>  ({
  type: GET,
  payload
})
export
{getUserInfo}
