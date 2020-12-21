import {
    http
} from '../utils/http.js'

const BrandService = {

    async save(value) {
        var result = await http.post('http://localhost:5000/api/v1.0.1/shopReport', value)
        if (result.status === 200) {
            return result.data
        } else {
          
            throw result.error
        }
    },
    async list() {
        var result = await http.get('http://localhost:5000/api/v1.0.1/shopReport')

        if (result.status === 200) {
            return result
        } else {
          
            throw result.error
        }
    },
    async get(subeId, date) {
        if (subeId !== null) {
            var result = await http.post('shopReport/GetReport', {subeId, date})

            if (result.status === 200) {
                return result
            } else {
              
                throw result.error
            }
        }
    },
    async GetReport(id) {
        if (id !== null) {
            var result = await http.get('shopReport/' + id)

            if (result.status === 200) {
                return result
            } else {
              
                throw result.error
            }
        }
    },
    async update(data) {
        if (data._id !== null) {
            var result = await http.put('shopReport/' + data._id, data)
            if (result.status === 200) {
                return result
            } else {
              
                throw result.error
            }
        }
    },
    async delete(id) {

        if (id !== null) {
            var result = await http.delete('shopReport/' + id)
            if (result.status === 200) {
                return result
            } else {
              
                throw result.error
            }
        }
    }
}

export default BrandService
  
