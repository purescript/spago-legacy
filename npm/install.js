"use strict";

const fetch = require("make-fetch-happen");
const tar = require("tar");
const version = "0.21.0";
const platform = { win32: "Windows", darwin: "macOS" }[process.platform] || "Linux";
const url = `https://github.com/purescript/spago-legacy/releases/download/${version}/${platform}.tar.gz`

fetch(url).then(res => res.body.pipe(tar.x({ "C": './' })));
