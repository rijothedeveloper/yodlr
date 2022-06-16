export async function postData(url, options) {
  const baseUrl = "http://localhost:3000";
  try {
    const response = await fetch(baseUrl + url, options);
    const result = await response.json();
    return result;
  } catch (err) {
    return { error: err };
  }
}
