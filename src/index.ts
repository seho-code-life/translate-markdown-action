// import * as core from '@actions/core';
// import * as github from '@actions/github';
import fs from 'fs';
import { translateContent } from './utils';

// 获取README-CN文件
const beTranslatedFileName = 'README-CN.md';
// 注释名
const flagStart = `<!-- TRANSLATE-ACTION:START -->`;
const flagEnd = `<!-- TRANSLATE-ACTION:END -->`;
const readmeData = fs.readFileSync(beTranslatedFileName, 'utf-8');
translateContent(readmeData, {
  start: flagStart,
  end: flagEnd
}).then((res) => {
  console.log(res);
});
