const procap_server_url = "http://localhost:81/private/api";

export default function post(url, body) {
  return fetch(procap_server_url + url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(response => {
    if (!response.ok) {
      throw Error(response.status);
    }
    response.json();
  });
}

export function get(url) {
  return fetch(procap_server_url + url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(response => {
    if (!response.ok) throw Error(response.status);
    return response.json();
  });
}
