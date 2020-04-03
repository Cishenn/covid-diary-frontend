const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()
const MAX_LIMIT = 100

// {
//   num: 10
// }
// 返回热度最高的10篇文章

exports.main = async (event, context) => {
  let { limit } = event

  const db = cloud.database()
  const articles = db.collection("article")
  const _ = db.command

  let ret = null

  await articles.get().then(res => {
    ret = res.data
  })

  ret.sort((a, b) => {
    return (b.like_num + b.view_num) - (a.like_num + a.view_num)
  })

  return ret.slice(0, limit < ret.length ? limit : ret.length)
}
