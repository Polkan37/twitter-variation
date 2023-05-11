
export const getTweets = () => {
  const url = `/api/tweets/`;
  const data = fetch(url)
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  })
  return data
}