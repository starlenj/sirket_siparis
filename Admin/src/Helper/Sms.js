import axios from 'axios';

export const ReddetSmsGonder = async (GSM, Neden, Sube) => {
    try {
        var Mesaj = `Paketiniz ${Neden} nedeni ile ${Sube.toUpperCase()} şubemiz tarafından reddedilmiştir. Bilgi için 4448220`
        let SmsResponse = await axios.post("https://webserivs.hmbrgr.com.tr/Api/SmsGonder", { GSM, Mesaj });
        return SmsResponse;
    } catch (error) {
        console.error(error);
    }
}

export const KabulSmsGonder = async (GSM, Sube) => {
    try {
        var Mesaj = `Paketiniz  ${Sube.toUpperCase()} şubemiz tarafından onaylanmıştır.Servis süresi içinde adresinize teslim edilecektir.Afiyet olsun.Bilgi için 4448220`
        let SmsResponse = await axios.post("https://webserivs.hmbrgr.com.tr/Api/SmsGonder", { GSM, Mesaj });
        return SmsResponse;
    } catch (error) {
        console.error(error);
    }
}