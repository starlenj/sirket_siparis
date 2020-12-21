import Service from '../../Services/Sube'
export default {
    async Get(context){
        let data = await Service.list()
        context.commit('SubeList',data);
    }
}