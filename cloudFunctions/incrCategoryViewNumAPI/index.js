// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 参数为category的主键id
// 返回值是更新后category的view_num

exports.main = async (event, context) => {
  let { _id } = event

  const db = cloud.database()
  const categories = db.collection("category")
  const _ = db.command

  await categories.where({
    _id
  })
    .update({
      data: {
        view_num: _.inc(1)
      },
    })

  let ret = 0

  await categories.get().then(res => {
    ret = res.data
  })
  return ret
}
