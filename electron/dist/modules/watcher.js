// import fs = require('fs')
// import python from "../functions/python_endpoints";
// import Logging from '../functions/logging';
// import initializer from '../initializers/base';
// const logging = new Logging('watcher');
// async function initialize() {
//   let logger = logging.get_logger('initialize', 'info', true);
//   let webview_data = await initializer();
//   logger.debug('webview_data', webview_data);
//   if (webview_data.message) {
//     console.log(webview_data.message);
//     return false;
//   }
//   return webview_data
// }
// async function main() {
//   let data = get_data();
//   if (Object.keys(data.potential_helpers).length == 0) {
//     data = get_all_potential_helpers(data)
//   }
//   data = get_all_helpers(data)
//   save_data(data)
// }
// async function get_all_helpers(data) {
//   let helpers_loc = python.find_all_templates('ereignis_uebersicht/golden_star', scale, webview_region);
//   let helpers_names = get_names(helpers_loc)
//   for (let name of helpers_names) {
//     if ((name in data.helpers)) {
//       data.helpers.name.push()
//     }
//   }
//   return data
// }
// async function get_names(helper_loc) {
//   return {}
// }
// async function get_all_potential_helpers(data) {
//   return data
// }
// async function get_data() {
//   try {
//     if (fs.existsSync('./helpers.json')) {
//       // if exists, read data
//       fs.readFile('./helpers.json', 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log(data)
//         return JSON.parse(data)
//       });
//     } else {
//       // if it file doesnt exist, create one with empty params
//       let data = {
//         last_checked: Math.floor(Date.now() / 1000),
//         potential_helpers: {},
//         helpers: {}
//       }
//       return data
//     }
//   } catch (err) {
//     console.error(err)
//   }
// }
// async function save_data(data) {
//   fs.writeFile('./helpers.json', JSON.stringify(data), err => {
//     if (err) throw err;
//     console.log('File successfully saved')
//   })
// }
