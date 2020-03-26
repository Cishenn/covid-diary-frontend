const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const MAX_LIMIT = 100

// {
//   _ids: [1,2,3,4] // 获取主键为1，2，3，4的文章
// }
// 返回查询到的文章列表

exports.main = async (event, context) => {
  let { _ids } = event

  const db = cloud.database()
  const articles = db.collection("article")
  const _ = db.command

  let ret = null
  await articles.where({
    _id: _.in(_ids)
  }).get().then(res => {
    ret = res.data
  })

  return ret
}
