export async function getUserLocationFromAPI() {
    const url = "https://ipgeolocation.abstractapi.com/v1/?api_key=ab37a4f0e0cc466b80f00fa8366f8649"

    const location = await fetch(url)
    .then((response) => {
        return response.json();
    })

   return  location?.city || 'unknown wonderland'
 }