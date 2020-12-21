export default {
    getUsers(state) {
        return state.Users;
    },
    getUserLoggedIn() {
        return localStorage.getItem('TOKEN') !==null
    },
    getUserInfo()
    {
        return JSON.parse(localStorage.getItem('vuex'))
    },
    getPermission(state)
    {
        return state.Permission
    }
}