
export const getRecommendedUsers = () => {
  const url = `/api/recommended-users/`;
  const data = fetch(url)
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  })
  return data
}