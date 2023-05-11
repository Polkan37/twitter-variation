export const getUserInfo = (id) => {
    const url = `/api/user/${id}`;
    const data = fetch(url)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    return data
}