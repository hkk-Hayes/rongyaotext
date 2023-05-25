import { GET_USER_DATA } from "../constant"

export const loginAction = (data) => {
    return { type: GET_USER_DATA, data }
}