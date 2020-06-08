# GrafanaSnapProject


通过 puppeteer 对 grafana  pannel 截图 并发送邮件报表


#  使用
```

cnpm i --save puppeteer
 
cnpm i --save nodemailer
 
 
node getPicture.js 
```


# 定位点击 辅助工具

```
chrome 扩展程序里安装 puppeteer recorder

```

Tips：只是一种思路，代码写的并不好，大家可以进行扩展，比如截取kibana等的图表，增加异常处理，对图片cid进行再次封装，放到对象存储里，工具集成到运维管理平台里

# 补充

1. 由于代码是针对于 grafana 6的，最近更新到grafana 7.0 后，需要把源码的登陆部分更新为以下

```
await page.type('input[name="user"]', account);
await page.type('input[name="password"]', password);
await page.click('button[class="css-y3nv3e-button"]');
```

2. 截图设置范围

```
await page.screenshot({
        path: '/tmp/png/001.png',
        clip: {
          x: 0,
          y: 0,
          width: 1815,
          height: 488
        }
        
```
