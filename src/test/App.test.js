import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../Game.js';
import puppeteer from 'puppeteer';

let browser, page;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(React.createElement(Game), div);
  ReactDOM.unmountComponentAtNode(div);
});

beforeAll(async () => {
   console.log('In beforeAll');
  browser = await puppeteer.launch({
     headless:false,
     //executablePath:'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe'
   });
   page = await browser.newPage();
  //  puppeteer.launch({headless: false}).then(brwsr => {browser= brwsr;console.log('Browser set');})
  //  .then(pg=>{page=pg; console.log('Page is set');});
  
  
}, 30000);

describe("It loads the game correctly" ,async () => {
  test( 'load the test', async () => {
  await page.goto('http://localhost:3000/');
});




});


