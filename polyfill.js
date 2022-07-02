import "@ethersproject/shims";
import { Buffer } from "buffer";
const process = {
  version: "",
  env: {},
};
try {
  global.process = process;
  global.Buffer = Buffer;
} catch (e) {
  window.process = process;
  window.Buffer = Buffer;
}
