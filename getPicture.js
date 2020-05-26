/*
function:  snapshot  grafana pannel pictures via puppeteer
author: zuoguocai@126.com
*/


//  发送函数
function sendPicture(){
        // 引入自定义发邮件模块
        const sendModule = require('./mailPush.js');
        // 同时发送到多个邮箱,用逗号隔开
        sendModule.sendMymail('guocai.zuo@gmail.com,zuoguocai@126.com','每周报表','^_^ OpenStack 监控报表');
}



// 截图函数
function getPicture(){

        const puppeteer = require('puppeteer');
        //模拟登陆，grafana 登陆的用户名和密码
        const account = `zuoguocai`;
        const password = `xxxxxx`;

	(async () => {
  	const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  	const page = await browser.newPage();
  	await page.setViewport({width:1827, height:979});
  	await page.goto('https://yourgrafana.com');
  	await page.type('input[type="text"]', account);    
  	await page.type('#inputPassword', password);
  	await page.click('button[type="submit"]');
  	await page.waitForNavigation({
    	waitUntil: 'load'
  	});

  	//await page.waitFor(1000);
    // 替换为您的grafana dashboard的 url
  	await page.goto('https://yourgrafana.com/d/-a3b-ddWz/hu-lian-wang-chu-kou-hui-zong?refresh=30s&orgId=1');
  	await page.waitFor(1000);
    // 替换为您的grafana dashboard  panel 的编号,我这里是19
  	await page.waitForSelector('#panel-19 > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-editor-container:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-container:nth-child(1) .panel-menu-container:nth-child(3) > .fa:nth-child(1)')
  	// 替换为您的grafana dashboard  panel 的编号,我这里是19
    await page.click('#panel-19 > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-editor-container:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-container:nth-child(1) .panel-menu-container:nth-child(3) > .fa:nth-child(1)')
  	await page.waitForSelector('.open > .dropdown-menu > li:nth-child(1) > a > .dropdown-item-text')
  	await page.click('.open > .dropdown-menu > li:nth-child(1) > a > .dropdown-item-text')
  	await page.waitFor(1000);
  	await page.screenshot({path: '/tmp/png/001.png'});


     // 替换为您的grafana dashboard的 url
  	await page.goto('https://yourgrafana.com/d/-a3b-ddWz/hu-lian-wang-chu-kou-hui-zong?refresh=30s&orgId=1');
  	await page.waitFor(1000);
     // 替换为您的grafana dashboard  panel 的编号,我这里是2
  	await page.waitForSelector('#panel-2 > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-editor-container:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-container:nth-child(1) .panel-menu-container:nth-child(3) > .fa:nth-child(1)')
     // 替换为您的grafana dashboard  panel 的编号,我这里是2
    await page.click('#panel-2 > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-editor-container:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-height-helper:nth-child(1) > .panel-container:nth-child(1) .panel-menu-container:nth-child(3) > .fa:nth-child(1)')
  	await page.waitForSelector('.open > .dropdown-menu > li:nth-child(1) > a > .dropdown-item-text')
  	await page.click('.open > .dropdown-menu > li:nth-child(1) > a > .dropdown-item-text')
  	await page.waitFor(1000);
  	await page.screenshot({path: '/tmp/png/002.png'});

  	await browser.close();

  	//调用发送函数
  	await sendPicture();
})();
}

// 调用定位并截图函数
getPicture()
