export const logEvent = (event, data) => {
  // DO NOT use console.log
  const log = {
    timestamp: new Date().toISOString(),
    event,
    data,
  };

  // Save to localStorage or send to a logger endpoint
  const logs = JSON.parse(localStorage.getItem("logs") || "[]");
  logs.push(log);
  localStorage.setItem("logs", JSON.stringify(logs));
};
