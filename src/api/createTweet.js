export async function createTweet(message = {}) {
  const url = `/api/tweets/`;
  const response = fetch(url, {
    method: 'POST',
    body: JSON.stringify(message)
  });
  return await response;
}