export const load = async ({ fetch, params }) => {

    async function getCenterInfo() {
        let req = fetch(`https://services.codeninjas.com/api/v1/facility/${params.center.slice(3)}`)
        let res = await req;
        return res.json()
    }
    let centerInfo = await getCenterInfo();
    
    async function getAvailableTourDates() {
        let req = fetch(`https://live.childcarecrm.com/form?formId=b42a0ab3-0e2f-443b-ba55-bed7e2c55200&customerId=f1e0c921c46684f267d2eb52aa13f518&centerId=${centerInfo.ccrmId}`)
        let res = await req;
        return res.json()
    }

    return {
        center: centerInfo,
        availableTourDates: await getAvailableTourDates()
    }
};