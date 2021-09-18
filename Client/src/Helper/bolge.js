import axios from "axios";

export const GetBolge= async (sehir)=>{

	return await axios.post("http://localhost:4000/Api/GetSehirBolge",{Sehir : sehir});
}
