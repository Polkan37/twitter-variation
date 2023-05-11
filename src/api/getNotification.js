export const getNotifications = (userId) => {
    const url = `/api/getNotifications/${userId}`;
    const data = fetch(url)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    return data
}