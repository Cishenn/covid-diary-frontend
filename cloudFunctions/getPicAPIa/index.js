const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

exports.main = async (event, context) => {
  const db = cloud.database()
  const pic = db.collection("pic")
  const _ = db.command

  let ret = null

  await pic.get().then(res => {
    ret = res.data
  })

  return ret
}
