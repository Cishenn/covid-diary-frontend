// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 该函数为用户登录函数，传参为userInfo，创建用户记录并将userInfo存入数据库

// {
//   "userInfo": ...
// }

exports.main = async (event, context) => {
  let userInfo = event.userInfo
  let { OPENID, APPID } = cloud.getWXContext()

  console.log(userInfo);

  const db = cloud.database()
  const users = db.collection("user")
  const _ = db.command

  let count = await users.where({
    _openid: _.eq(OPENID)
  }).count()
  console.log(count.total);

  if (count.total == 0) {
    await users.add({
      data: {
        "_openid": OPENID,
        "userInfo": userInfo,
        "collect_article": []
      }
    })
  }
  let user = null
  await users.where({
    _openid: _.eq(OPENID)
  }).get().then(res => {
    user = res.data[0]
  })
  return user
}