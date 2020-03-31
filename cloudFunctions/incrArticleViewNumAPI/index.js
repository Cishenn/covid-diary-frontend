// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 参数为文章的主键id
// 返回值是更新后的文章view_num

exports.main = async (event, context) => {
  let { _id } = event

  const db = cloud.database()
  const articles = db.collection("article")
  const _ = db.command

  await articles.where({
    _id
  })
    .update({
      data: {
        view_num: _.inc(1)
      },
    })

  let view_num = 0

  await articles.where({
    _id
  }).field({
    view_num: true
  }).get().then(res => {
    view_num = res.data[0].view_num
  })
  return view_num
}
