/*
function: send pictures in mail's  html content via nodejs 
author: zuoguocai@126.com
 
*/

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
        // 您的邮箱服务器地址
        host: 'mail.exchangehost.com',
        port: 587,
        secure: false,
        auth: {
        user: 'yourEmail', //您的邮箱的账号
        pass: 'yourPassword'//您的邮箱的密码
        },
        tls: {
             rejectUnauthorized: false
        },
    });

function sendMymail(who,subject,title){
        let mailOptions = {
            from: '"autoreport" <report@exchangehost.com>', //邮件来源
            to: who, //邮件发送到哪里，多个邮箱使用逗号隔开
            subject: subject, // 邮件主题
            html: `<h2 align="center" style="color:red;font-size:24px">${title}</h2><br> <h5 align="center" style="color:green;font-size:20px">报表1</h5><br> <img src="cid:001"/>  <br><h5 align="center" style="color:green;font-size:20px">报表2</h5> <br> <img src="cid:002"/>`, // html类型的邮件正文
            attachments: [{
                filename: '001.png',//附件名称
                path: '/tmp/png/001.png', //附件的位置
                cid: '001', //为附件添加一个引用名称
            },{
                filename: '002.png',//附件名称
                path: '/tmp/png/002.png', //附件的位置
                cid: '002', //为附件添加一个引用名称
            }]
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                 return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
}

//测试用
//sendMymail('zuoguocai@126.com','每周报表','OpenStack 运营报表')

// 自定义发邮件模块，供引入
exports.sendMymail = sendMymail;

// 作为引入模块使用
//const sendModule = require('./mailPush.js');
//sendModule.sendMymail('zuoguocai@126.com','每周报表','OpenStack 运营报表');
