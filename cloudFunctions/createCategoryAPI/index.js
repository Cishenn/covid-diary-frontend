// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 该函数用来创建分类Category

// {
//   newCategory: ...
// }

// 该函数未完成！！！

exports.main = async (event, context) => {
  let { newCategory } = event
  const wxContext = cloud.getWXContext()

  const db = cloud.database()
  const categories = db.collection("category")
  const _ = db.command

  await categories.add({
    data: newCategory
  })

  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}