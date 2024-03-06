interface Dojo {
    name: string,
    phone: string,
    address: string,
    mapPosition: number[],
}
export const locations: Dojo[] = [
    {
        name: "North Vancouver",
        phone: "604.398.8237",
        address: "1270 Marine Drive, North Vancouver, BC V7P1T2",
        mapPosition: [17, -3]
    },
    {
        name: "Vancouver East",
        phone: "236.995.2633",
        address: "3285 E 22nd Avenue, Vancouver, BC V5M 2Z1",
        mapPosition: [22, 7]
    },
    {
        name: "Vancouver West",
        phone: "236.996.2633",
        address: "3534 W 41st Ave, Vancouver, BC V6N 3E6",
        mapPosition: [9.5, 8]
    },
    {
        name: "Vancouver South",
        phone: "604.203.2633",
        address: "6684 Main St, Vancouver, BC V5X 3H2",
        mapPosition: [16, 4]
    },
    {
        name: "Richmond",
        phone: "604.227.3300",
        address: "6699 River Rd Suite 125, Richmond, BC V7C 0E6",
        mapPosition: [13, 10]
    },
    {
        name: "Burnaby South",
        phone: "236.997.2633",
        address: "5262 Rumble Street, Burnaby, BC V5J 2B6",
        mapPosition: [25, -12]
    },
    {
        name: "Burnaby North",
        phone: "604.760.2633",
        address: "6624 Hastings St, Burnaby, BC V5B 1S2",
        mapPosition: [28.5, -38]
    },
    {
        name: "West Coquitlam",
        phone: "604.377.2633",
        address: "1130 Austin Avenue, Coquitlam, BC V3K 3P5",
        mapPosition: [37, -39]
    },
    {
        name: "Port Coquitlam",
        phone: "604.332.8522",
        address: "131 - 815 Village Drive, Port Coquitlam, BC V3B 0G9",
        mapPosition: [49.5, -47]
    },
    {
        name: "Guildford",
        phone: "604.617.2633",
        address: "103-15691 104 Avenue, Surrey, BC V4N 2H4",
        mapPosition: [43.5, -35]
    },
    {
        name: "Delta",
        phone: "604.997.2633",
        address: "7077 120 Street, Delta, BC V4E 2A9",
        mapPosition: [35.5, -26]
    },
    {
        name: "South Surrey",
        phone: "604.372.0019",
        address: "117 - 5577 153A Street, Surrey, BC, V3S 5K7",
        mapPosition: [44, -26]
    },
    {
        name: "Langley",
        phone: "604.802.2633",
        address: "C110 - 20727 Willoughby Town Centre Drive, Langley Twp, BC V2Y 1X1",
        mapPosition: [57.5, -47]
    },
    {
        name: "Abbotsford",
        phone: "604.861.2633",
        address: "110 - 2276 Clearbrook Road Abbotsford BC V2T 2X5",
        mapPosition: [90, -22]
    },
    {
        name: "Victoria",
        phone: "778.265.2633",
        address: "890 Goldstream Avenue Langford BC V9B 2X9",
        mapPosition: [3, -38]
    },
]