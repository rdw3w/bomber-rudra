export const apiStats: Record<string, { count: number, successes: number, failures: number, totalResponseTime: number }> = {};

export function recordApiUsage(endpoint: string, success: boolean, responseTime: number) {
  if (!apiStats[endpoint]) {
    apiStats[endpoint] = { count: 0, successes: 0, failures: 0, totalResponseTime: 0 };
  }
  apiStats[endpoint].count++;
  if (success) {
    apiStats[endpoint].successes++;
  } else {
    apiStats[endpoint].failures++;
  }
  apiStats[endpoint].totalResponseTime += responseTime;
}

export function getApiStats() {
  return apiStats;
}
