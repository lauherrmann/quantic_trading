export const loadSkins = async() => {
    try {
        const skinsResponse = fetch('https://www.steamwebapi.com/steam/api/inventory?key=UJ7ZP1L1LBI0XE9O&steam_id=76561198813449634');

        const [skins] = await Promise.all([skinsResponse]);
        const skinsJson = await skins.json();

        return skinsJson;

    } catch (error) {
        console.log(error);
        console.log("teste");
    }

}