function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getTopCountries(data: Country[]) {
  const dataCopy = [...data];
  const sort = dataCopy.sort((a, b) => {
    return b.TotalConfirmed - a.TotalConfirmed;
  });
  return sort.slice(0, 5);
}

function formatChartData(data: any) {
  const new_data: number[] = [];
  data.map(item => new_data.push(item.Cases / 100000));
  return new_data;
}

function filterDataBy(data: [], type = 'TotalConfirmed') {
  const dataCopy = [...data];

  dataCopy.sort((a, b) => {
    return b[type] - a[type];
  });

  return dataCopy;
}

function getFilterValue(val: string) {
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
  formatChartData,
  filterDataBy,
  getFilterValue,
};
