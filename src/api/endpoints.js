export const endpoints = {
  getRockets: "rockets",
  getRocketsbyId: (id) => `rockets/${id}`,

  getLaunches: "launches",
  getLaunchesbyId: (id) => `launches/${id}`,
  getLaunchesUpcoming: `launches/upcoming`,

  getHistory: "history",
  getHistorybyId: (id) => `history/${id}`,
};
