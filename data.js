let interventions = [
  { id: "5d67211e69c00e131b5a4c7d", name: "Colchicine" },
  { id: "5d1683badaeedf730326b7cf", name: "Hydroxychloroquine sulfate" },
  { id: "5e8b0be469c00e342f0a59a8", name: "Convalescent plasma" },
  { id: "5d168ccfdaeedf0aaa55dbc0", name: "Tocilizumab" },
  { id: "5d2b2b62daeedf1d3af33331", name: "Corticosteroids" },
];

let populations = [
  { id: "5f4108573552581c11d84164", name: "Healthy volunteers" },
  { id: "5efa806869c00e463870e00f", name: "Non-COVID conditions" },
  { id: "62ebe66d8d66160008f0e3cb", name: "PIMS-TS" },
  { id: "5f180a1c3552583e3bc9e8be", name: "People with COVID-19" },
  { id: "5f1809fa69c00e5e2d82b225", name: "Prevention of COVID-19" },
  {
    id: "5fbbfa313d051566cc03479a",
    name: "Prevention of problems associated to the management of COVID-19",
  },
];

let table = {};

for (let intervention of interventions) {
  table[intervention.id] = {};
  for (let population of populations) {
    table[intervention.id][population.id] = {
      recomendations: Math.floor(Math.random() * 10),
      strength: {
        conditional: {
          for: Math.floor(Math.random() * 3),
          against: Math.floor(Math.random() * 3),
        },
        strong: {
          for: Math.floor(Math.random() * 3),
          against: Math.floor(Math.random() * 3),
        },
      },
      studies: Math.floor(Math.random() * 20),
      isof: "54eb9fcc2b38677807178978",
    };
  }
}
export { table, interventions, populations };
