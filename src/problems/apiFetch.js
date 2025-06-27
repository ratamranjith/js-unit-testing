const api = 'https://finalspaceapi.com/api/v0/';

async function apiFetch(url) {
  try {
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json(); // Correct method
      return data;
    } else {
      throw new Error("Eppadi Work aagum");
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

apiFetch(api).then((data) => {
  if (data) {
    console.log(data);
  }
});
apiFetch(`${api}character`);