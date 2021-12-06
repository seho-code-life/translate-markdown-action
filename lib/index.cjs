'use strict';

const core = require('@actions/core');
const github = require('@actions/github');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e["default"] : e; }

const core__default = /*#__PURE__*/_interopDefaultLegacy(core);
const github__default = /*#__PURE__*/_interopDefaultLegacy(github);

try {
  const nameToGreet = core__default.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  core__default.setOutput("time", time);
  const payload = JSON.stringify(github__default.context.payload, void 0, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
}
