import {
    http
  } from '../utils/http.js'
  
  const BrandService = {
  
    async GetSubeCiro (sube) {
        var result = await http.post('GetCiro', sube)
      if (result.status === 200) {
        return result.data
      } else {
        console.error(result.error)
        throw result.error
      }
    }
  }
  
  export default BrandService
  
