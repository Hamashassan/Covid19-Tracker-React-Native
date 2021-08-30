let reportModalRef: any;
let filterModalRef: any;

const getReportModalRef = () => {
  return reportModalRef;
};

const setReportModalRef = (ref: any) => {
  reportModalRef = ref;
};

const getFilterModalRef = () => {
  return filterModalRef;
};

const setFilterModalRef = (ref: any) => {
  filterModalRef = ref;
};

export default {
  getReportModalRef,
  setReportModalRef,
  getFilterModalRef,
  setFilterModalRef,
};
