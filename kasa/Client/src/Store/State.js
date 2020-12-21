export default {
    Users:[],
    LoggedIn:false,
    Permissions:[],
    Sube: "",
    ListModel: {
        Sube: [],
        User:[],
        Permission:[],
    },
    UpdateModel: {
        Sube: [],
        User:[],
        Permission:[],
    },

    Token: localStorage.getItem('TOKEN') !== null ? localStorage.getItem('TOKEN') : null
}