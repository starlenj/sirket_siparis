import {
    http
} from '../utils/http.js'

const BrandService = {

    async save (value) {
        console.log(value)
        var result = await http.post('vegaConfig', value)
        if (result.status === 200) {
            return result.data
        } else {
            console.error(result.error)
            throw result.error
        }
    },
    async list () {
        var result = await http.get('vegaConfig')

        if (result.status === 200) {
            return result
        } else {
            console.error(result.error)
            throw result.error
        }
    },
    async get (id) {
        if (id !== null) {
            var result = await http.get('vegaConfig/' + id)

            if (result.status === 200) {
                return result
            } else {
                console.error(result.error)
                throw result.error
            }
        }
    },
    async update (data) {
        if (data._id !== null) {
            var result = await http.put('vegaConfig/'+data._id, data)
            if (result.status === 200) {
                return result
            } else {
                console.error(result.error)
                throw result.error
            }
        }
    },
    async UpdateDepo (data) {
        if (data._id !== null) {
            var result = await http.put('vegaConfig/DepoUpdate/'+data._id, data)
            if (result.status === 200) {
                return result
            } else {
                console.error(result.error)
                throw result.error
            }
        }
    },
    async UpdateFirmaDonem (data) {
        if (data._id !== null) {
            var result = await http.put('vegaConfig/FirmaDonemUpdate/'+data._id, data)
            if (result.status === 200) {
                return result
            } else {
                console.error(result.error)
                throw result.error
            }
        }
    },
    async delete (id) {
        console.log(id)
        if (id !== null) {
            var result = await http.delete('vegaConfig/' + id)
            if (result.status === 200) {
                return result
            } else {
                console.error(result.error)
                throw result.error
            }
        }
    }
}

export default BrandService
