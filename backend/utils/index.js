function includeAllStates(data) {
  const allStates = ["To Do", "In Progress", "In Testing", "Deployed"];
  const result = {};

  allStates.forEach((state) => {
    const columnId = Object.keys(data).find((key) => data[key].title === state);
    if (columnId) {
      result[columnId] = data[columnId];
    } else {
      result[state.toLowerCase()] = { title: state, items: [] };
    }
  });

  return result;
}
function filterTasksByTitle(data, titleToFilter) {
  const filteredData = {};

  for (const columnId in data) {
    const column = data[columnId];
    const filteredItems = column.items.filter((item) =>
      item.title.toLowerCase().includes(titleToFilter.toLowerCase())
    );

    if (filteredItems.length > 0) {
      filteredData[columnId] = {
        title: column.title,
        items: filteredItems,
      };
    }
  }

  return includeAllStates(filteredData);
}

module.exports = {
  filterTasksByTitle,
};
