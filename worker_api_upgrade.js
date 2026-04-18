// Updated API-integrated worker (safe testing)
// Replace runSimulationTasks in your main file with this version

async function runSimulationTasks(phone, count) {
  const targets = [
    {
      name: "JSONPlaceholder",
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "POST",
      body: (phone) => JSON.stringify({ title: "Test", body: "Hello", phone })
    },
    {
      name: "HttpBin",
      url: "https://httpbin.org/post",
      method: "POST",
      body: (phone) => JSON.stringify({ mobile: phone })
    }
  ];

  let results = [];

  for (let i = 0; i < count; i++) {
    for (const api of targets) {
      try {
        const res = await fetch(api.url, {
          method: api.method,
          headers: { "Content-Type": "application/json" },
          body: api.body(phone)
        });

        results.push({
          site: api.name,
          status: res.ok ? "Success" : "Failed"
        });

      } catch (err) {
        results.push({
          site: api.name,
          status: "Error"
        });
      }
    }
  }

  return results;
}
