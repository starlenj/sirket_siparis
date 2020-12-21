export default {
    setUsers(state, users) {
        return state.Users = users
    },
    setToken(state,token)
    {
        state.LoggedIn=true
        return state.Token = token
    },
    setPermission(state,permission)
    {
        return state.Permission=permission
    },
    setUserSube(state,sube)
    {
        return state.Sube = sube;
    }
}