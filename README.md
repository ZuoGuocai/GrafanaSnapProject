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
