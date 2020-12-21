import {
    http
  } from '../utils/http.js'
  
  const BrandService = {
  
    async save (value) {
        var result = await http.post('shopTransaction',value)
      if (result.status === 200) {
        return result.data
      } else {
      
        throw result.error
      }
    },
    async list () {
        var result = await http.get('shopTransaction')
  
      if (result.status === 200) {
        return result
      } else {
      
        throw result.error
      }
    },
    async get (id) {
      if (id !== null) {
          var result = await http.get('shopTransaction/' + id)
     
        if (result.status === 200) {
          return result
        } else {
        
          throw result.error
        }
      }
    },
    async update (data) {
      if (data._id !== null) {
          var result = await http.put('shopTransaction/'+data._id, data)
        if (result.status === 200) {
          return result
        } else {
        
          throw result.error
        }
      }
    },
    async delete (id) {
  
      if (id !== null) {
          var result = await http.delete('shopTransaction/' + id)
        if (result.status === 200) {
          return result
        } else {
        
          throw result.error
        }
      }
    }
  }
  
  export default BrandService
  
