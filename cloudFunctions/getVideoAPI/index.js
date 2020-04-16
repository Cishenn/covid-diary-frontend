const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  const db = cloud.database()
  const videos = db.collection("videos")
  const _ = db.command

  let ret = null

  await videos.get().then(res => {
    ret = res.data
  })

  return ret
}
