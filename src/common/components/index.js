import PaCell from './pa-cell';
import PaDialog from './pa-dialog';
import PaPanel from './pa-panel';
import PaField from './pa-field';
import PaForm from './pa-form';
import PaPage from './pa-page';
import PaPicker from './pa-picker';
import PaSearch from './pa-search';
// import PaSearchHistory from './pa-searchHistory';
// import PaWholeList from './pa-whole-list';

const install = (Vue) => {
  if (install.installed) return;

  Vue.component(PaCell.name, PaCell);
  Vue.component(PaDialog.name, PaDialog);
  Vue.component(PaPanel.name, PaPanel);
  Vue.component(PaField.name, PaField);
  Vue.component(PaForm.name, PaForm);
  Vue.component(PaPage.name, PaPage);
  Vue.component(PaSearch.name, PaSearch);
  Vue.component(PaPicker.name, PaPicker);
  // Vue.component(PaSearchHistory.name, PaSearchHistory);
  // Vue.component(PaWholeList.name, PaWholeList);
};

export {
  install,
  PaCell,
  PaDialog,
  PaPanel,
  PaField,
  PaForm,
  PaPage,
  PaSearch,
  PaPicker
  // PaSearchHistory,
  // PaWholeList
};
