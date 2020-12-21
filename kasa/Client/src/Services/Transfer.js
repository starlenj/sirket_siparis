import {
    http
} from '../utils/http.js'

const BrandService = {

    async save(value) {
        var result = await http.post('Transfer', value)
        if (result.status === 200) {
            return result.data
        } else {
            console.error(result.error)
            throw result.error
        }
    },
    async list() {
        var result = await http.get('Transfer')

        if (result.status === 200) {
            return result
        } else {
            console.error(result.error)
            throw result.error
        }
    },
    async get(id) {
        if (id !== null) {
            var result = await http.get('Transfer/' + id)

            if (result.status === 200) {
                return result
            } else {
                console.error(result.error)
                throw result.error
            }
        }
    },
    async GetSubeOrder(data) {
        if (data !== null) {
            var result = await http.post('Transfer/GetTransfer', data)

            if (result.status === 200) {
                return result
            } else {
                console.error(result.error)
                throw result.error
            }
        }
    },
    async update(data) {
        if (data._id !== null) {
            var result = await http.put('Transfer/' + data._id, data)
            if (result.status === 200) {
                return result
            } else {
                console.error(result.error)
                throw result.error
            }
        }
    },
    async delete(id) {
        if (id !== null) {
            var result = await http.delete('Transfer/' + id)
            if (result.status === 200) {
                return result
            } else {
                console.error(result.error)
                throw result.error
            }
        }
    },
    async SepetOnay(value) {
        if (value !== null) {
            var result = await http.post('Transfer/SepetOnay', value)
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
