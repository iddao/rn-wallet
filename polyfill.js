import "@ethersproject/shims";
const process = {
  version: "",
  env: {},
};
try {
  global.process = process;
} catch (e) {
  window.process = process;
}
