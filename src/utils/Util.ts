function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getTopCountries(data) {
  const dataCopy = [...data];
  const sort = dataCopy.sort((a, b) => {
    return b.TotalConfirmed - a.TotalConfirmed;
  });
  return sort.slice(0, 5);
}

function paginator(items, current_page, per_page_items) {
  let page = current_page || 1,
    per_page = per_page_items || 10,
    offset = (page - 1) * per_page,
    paginatedItems = items.slice(offset).slice(0, per_page_items),
    total_pages = Math.ceil(items.length / per_page);

  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems,
  };
}

function formatChartData(data) {
  const new_data = [];
  data.map(item => new_data.push(item.Cases / 100000));
  return new_data;
}

function filterDataBy(data, type = 'TotalConfirmed') {
  const dataCopy = [...data];

  const sort = dataCopy.sort((a, b) => {
    return b[type] - a[type];
  });

  return dataCopy;
}

function getFilterValue(val) {
  let value;
  if (val === 'Active') {
    value = 'TotalConfirmed';
  } else if (val === 'Death') {
    value = 'TotalDeaths';
  } else if (val === 'Recovery') {
    value = 'TotalRecovered';
  }
  return value;
}

export default {
  numberWithCommas,
  getTopCountries,
  paginator,
  formatChartData,
  filterDataBy,
  getFilterValue,
};
