export const getThread = (id) => {
    const url = `/api/thread/${id}`;
    const data = fetch(url)
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    return data
}