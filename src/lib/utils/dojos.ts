export const dojos = ["Abbotsford", "Burnaby", "Burnaby South", "Delta", "Guildford", "Langley", "North Vancouver", "Port Coquitlam", "Richmond", "South Surrey", "Vancouver East", "Vancouver South", "Vancouver West", "West Coquitlam"]

export interface Dojo {
    name: string,
    phone: string,
    address: string,
    mapPosition: number[],
    crm: string,
    campsId: string;
}
export const locations: Dojo[] = [
    {
        name: "North Vancouver",
        phone: "604.398.8237",
        address: "1270 Marine Drive, North Vancouver, BC V7P1T2",
        mapPosition: [17, 7],
        crm: "cn-north-vancouver-bc-ca",
        campsId: "71c1559b-a89c-4828-be40-e25b9a8827c0",
    },
    {
        name: "Vancouver East",
        phone: "236.995.2633",
        address: "3285 E 22nd Avenue, Vancouver, BC V5M 2Z1",
        mapPosition: [21.5, 23],
        crm: "cn-vancouver-east-bc-ca",
        campsId: "df31775e-d375-482b-a91e-395ca59bcbb9",
    },
    {
        name: "Vancouver West",
        phone: "236.996.2633",
        address: "3534 W 41st Ave, Vancouver, BC V6N 3E6",
        mapPosition: [9.5, 30],
        crm: "cn-vancouver-west-bc-ca",
        campsId: "3a40d8bf-66cd-4f89-800a-608a04042d36",
    },
    {
        name: "Vancouver South",
        phone: "604.203.2633",
        address: "6684 Main St, Vancouver, BC V5X 3H2",
        mapPosition: [16, 34],
        crm: "cn-vancouver-south-bc-ca",
        campsId: "69d1d42b-4fee-40c1-9d8f-e4c2e48a779e",
    },
    {
        name: "Richmond",
        phone: "604.227.3300",
        address: "6699 River Rd Suite 125, Richmond, BC V7C 0E6",
        mapPosition: [13, 47],
        crm: "cn-richmond-bc-ca",
        campsId: "7f041bb7-1dbf-46b9-a966-d992c13377f1",
    },
    {
        name: "Burnaby South",
        phone: "236.997.2633",
        address: "5262 Rumble Street, Burnaby, BC V5J 2B6",
        mapPosition: [25.5, 34],
        crm: "cn-burnaby-south-bc-ca",
        campsId: "7317aedc-f058-4d5b-8495-c624e276b2a3",
    },
    {
        name: "Burnaby",
        phone: "604.760.2633",
        address: "6624 Hastings St, Burnaby, BC V5B 1S2",
        mapPosition: [28.5, 18],
        crm: "cn-burnaby-bc-ca",
        campsId: "5b2334ed-3de3-4735-9e71-6b382873caa8",
    },
    {
        name: "West Coquitlam",
        phone: "604.377.2633",
        address: "1130 Austin Avenue, Coquitlam, BC V3K 3P5",
        mapPosition: [37.5, 25],
        crm: "cn-west-coquitlam-bc-ca",
        campsId: "506a20ff-a994-4286-b940-b0a3aba7f5ab",
    },
    {
        name: "Port Coquitlam",
        phone: "604.332.8522",
        address: "131 - 815 Village Drive, Port Coquitlam, BC V3B 0G9",
        mapPosition: [49.5, 25],
        crm: "cn-coquitlam-bc-ca",
        campsId: "b8fc313c-def5-4637-84b4-5021b2959eaf",
    },
    {
        name: "Guildford",
        phone: "604.617.2633",
        address: "103-15691 104 Avenue, Surrey, BC V4N 2H4",
        mapPosition: [43.2, 42],
        crm: "cn-guildford-bc-ca",
        campsId: "11bf8964-653b-4002-9eb1-6420088c09ac",
    },
    {
        name: "Delta",
        phone: "604.997.2633",
        address: "7077 120 Street, Delta, BC V4E 2A9",
        mapPosition: [35.5, 57],
        crm: "cn-delta-bc-ca",
        campsId: "e05c8b27-f2cd-4132-a053-a4b4b4c0595c",
    },
    {
        name: "South Surrey",
        phone: "604.372.0019",
        address: "117 - 5577 153A Street, Surrey, BC, V3S 5K7",
        mapPosition: [43.5, 65],
        crm: "cn-surrey-bc-ca",
        campsId: "a916f484-bca9-4f7a-a147-998941584924",
    },
    {
        name: "Langley",
        phone: "604.802.2633",
        address: "C110 - 20727 Willoughby Town Centre Drive, Langley Twp, BC V2Y 1X1",
        mapPosition: [57, 52],
        crm: "cn-langley-bc-ca",
        campsId: "3c3bbe86-ff66-488a-b3ca-1aab1dce51c3",
    },
    {
        name: "Abbotsford",
        phone: "604.861.2633",
        address: "110 - 2276 Clearbrook Road Abbotsford BC V2T 2X5",
        mapPosition: [89, 82],
        crm: "cn-abbotsford-bc-ca",
        campsId: "911f1fdb-a9e1-49dc-bf99-450f346b7a63",
    },
]

export interface serviceURI {
    camps: string,
    crm: string,
}
export const serviceURIs: serviceURI = {
    camps: "https://services.codeninjas.com/api/v1/facility/camps/upcoming/",
    crm: ""
}