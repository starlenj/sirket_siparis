import {
    http
  } from '../utils/http.js'
  
  const BrandService = {
  
    async save (value) {
      var result = await http.post('Image', value)
      if (result.status === 200) {
        return result.data
      } else {
      
        throw result.error
      }
    },
    async list () {
      var result = await http.get('http://localhost:5000/api/v1.0.1/Users')
  
      if (result.status === 200) {
        return result
      } else {
      
        throw result.error
      }
    },
    async get (id) {
      if (id !== null) {
        var result = await http.get('Users/' + id)
     
        if (result.status === 200) {
          return result
        } else {
        
          throw result.error
        }
      }
    },
    async update (data) {
      if (data._id !== null) {
        var result = await http.put('Users/'+data._id, data)
        if (result.status === 200) {
          return result
        } else {
        
          throw result.error
        }
      }
    },
    async delete (id,url) {
    
      if (id !== null) {
        var result = await http.delete(url+'/' + id)
        if (result.status === 200) {
          return result
        } else {
        
          throw result.error
        }
      }
    }
  }
  
  export default BrandService
  
