// A barrel file for our reducers, which will be combined and passed into the Redux store
// The aliases of reducers in this file will be assigned as the names of the keys in the Redux store, with the values being the respective individual reducers;
export { default as allACUnits } from './allACUnits';
export { default as acunit } from './acunit';
export { default as allHistory } from './allHistory';
export { default as history } from './history';
export { default as allStatus } from './allStatus';
export { default as status } from './status';
export { default as allVendor } from './allVendor';
export { default as vendor } from './vendor';
export { default as allManagement } from './allManagement';
export { default as management } from './management';