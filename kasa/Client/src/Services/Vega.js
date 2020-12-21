import {
    http
} from '../utils/http.js'

const BrandService = {

    async GetFirma() {
        var result = await http.get('Vega/GetFirma')
        if (result.status === 200) {
            return result.data
        } else {
            console.error(result.error)
            throw result.error
        }
    },
    async GetDonem() {
        var result = await http.get('Vega/GetDonem')
        if (result.status === 200) {
            return result.data
        } else {
            throw result.error
        }
    },
    async GetDepo() {
    
        var result = await http.get('Vega/GetDepo')
        if (result.status === 200) {
            return result.data
        } else {
            throw result.error
        }
    },
    async GetStokList() {
        var result = await http.get('Vega/GetStokList')
        if (result.status === 200) {
            return result.data
        } else {
            throw result.error
        }
    }
}

export default BrandService
