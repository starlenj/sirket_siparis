import Service from '../Service';
export const GetReport = async (SubeId, Tarih) => {
    var ReportData = [];
    let ListValue = await Service.save('/SubeListHeaderReport', { SubeId, Tarih });
    ListValue.Report.map(async (item, index) => {

        let ListHeader = await Service.get('/ListHeader', item.ListHeaderId);
        ReportData.push({
            name: ListHeader.data.name,
            Date: Tarih,
            SubeId,
            HeaderId: item._id
        });
    });
    return ReportData
}
export const GetBodyReport = async (HeaderId) => {
    var ReportData = [];
    let ReportResult = await Service.save("ChecklistReport", {
        HeaderId,
    });
    ReportResult.Reports.map(async (item, index) => {
        let response = await Service.get("/ListBody", item.ListId);
        ReportData.push({
            name: response.data.name,
            value: item.Result,
            headername: item.name,
            id: item._id
        })
    });
    return ReportData
}