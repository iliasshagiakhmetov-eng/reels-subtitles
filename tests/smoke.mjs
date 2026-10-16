import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const html=readFileSync('index.html','utf8');
const js=readFileSync('app.js','utf8');
for (const id of ['createEdit','previewEdit','undoEdit','exportEdit','editMode','editPlan']) assert(html.includes(`id="${id}"`), `missing ${id}`);
for (const marker of ['detectSilence','MediaRecorder','captureStream','shouldSkip','drawFrame']) assert(js.includes(marker), `missing ${marker}`);
assert.match(html,/accept="video\/\*"/);
console.log('CaptionLab smoke checks passed');
