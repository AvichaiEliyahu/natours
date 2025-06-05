/**
 * Makes an HTTP request using fetch.
 * Returns the parsed JSON data if successful, or throws an error otherwise.
 *
 * @param {string} url - The endpoint URL.
 * @param {string} [method='GET'] - HTTP method (GET, POST, PATCH, PUT, DELETE, etc.).
 * @param {Object} [data] - Data to send (for POST/PATCH/PUT).
 * @param {Object} [customHeaders={}] - Additional headers to include.
 * @returns {Promise<Object>} - The parsed JSON response.
 * @throws {Error} - Throws an error if the response is not OK.
 */
export async function httpRequest(
  url,
  method = 'GET',
  data = undefined,
  customHeaders = {},
) {
  const options = {
    method,
    headers: { ...customHeaders },
  };

  if (['POST', 'PATCH', 'PUT'].includes(method.toUpperCase()) && data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  const res = await fetch(url, options);
  const json = await res.json();

  if (!res.ok) {
    // Throw the message from the response if it exists, else a generic error
    throw new Error(json.message || 'Request failed');
  }

  return json;
}
