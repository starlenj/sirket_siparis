import {
  http
} from './utils/http'

const BrandService = {

  async save(url, value) {
    var result = await http.post(url, value)
    return result.data;
  },
  async list(url) {
    var result = await http.get(url)

    if (result.status === 200) {
      return result
    }
  },
  async get(url, id) {
    if (id !== null) {
      var result = await http.get(url + '/' + id)

      if (result.status === 200) {
        return result
      }
    }
  },
  async update(url, data) {
    if (data._id !== null) {
      var result = await http.put(url + '/' + data._id, data)
      if (result.status === 200) {
        return result
      }
    }
  },
  async delete(id, url) {

    if (id !== null) {
      var result = await http.delete(url + '/' + id)
        return result;
    }
  }
}

export default BrandService

