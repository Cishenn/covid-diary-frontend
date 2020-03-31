const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// {
//   _id: 1 // 参数为城市的主键_id
// }
// 返回该城市的信息

exports.main = async (event, context) => {
  let { _id } = event

  const db = cloud.database()
  const cities = db.collection("city")
  const _ = db.command

  let ret = null

  await cities.where({
    _id
  }).get().then(res => {
    ret = res.data
  })

  return ret
}
