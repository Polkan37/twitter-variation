import { getUserLocationFromAPI } from "../../api/getLocation";

export default async function getCaption(user) {
    const date = new Date();
    const currentLocation = await getUserLocationFromAPI();

    return `${user} posted at ${date.getHours() + ":" + (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes())} ${date.toLocaleDateString()} from ${currentLocation}`
}