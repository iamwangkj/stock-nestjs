import nodemailer from 'nodemailer'

// 发送邮件函数
export async function sendMail (html = '') {
  try {
    const user = 'tone_cn@163.com'// 发送的邮箱
    const to = 'ne.wkj@qq.com'// 对方的邮箱
    const transporter = nodemailer.createTransport({
      host: 'smtp.163.com',
      port: 25,
      secure: false,
      auth: {
        user: user, // 用户账号
        pass: 'LVXYNHGAKUVOOUVN' // 授权码
      }
    })
    await transporter.sendMail({
      from: `新政策爬虫<${user}>`, // sender address
      to: `<${to}>`, // list of receivers
      subject: '有新政策', // Subject line
      html: html // plain text body
    })
    console.log('邮件发送成功')
  } catch (err) {
    console.log('邮件发送失败', err.message)
  }
}
// sendMail('<h1>sss</h1>')
