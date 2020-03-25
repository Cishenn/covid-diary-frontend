// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 该函数位初始化函数，将会把数据库中的信息(category,city,atricle)初始化到小程序中

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const db = cloud.database()
  const MAX_LIMIT = 100

  const articleCount = await db.collection('article').count()
  const categoryCount = await db.collection('category').count()
  const cityCount = await db.collection('city').count()
  const articleTotal = articleCount.total
  const categoryTotal = categoryCount.total
  const cityTotal = cityCount.total
  // 计算需分几次取
  const articleBatchTimes = Math.ceil(articleTotal / 100)
  const categoryBatchTimes = Math.ceil(categoryTotal / 100)
  const cityBatchTimes = Math.ceil(cityTotal / 100)
  // 承载所有读操作的 promise 的数组
  const articleTasks = []
  const categoryTasks = []
  const cityTasks = []

  for (let i = 0; i < articleBatchTimes; i++) {
    const promise = db.collection('article').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    articleTasks.push(promise)
  }

  for (let i = 0; i < categoryBatchTimes; i++) {
    const promise = db.collection('category').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    categoryTasks.push(promise)
  }

  for (let i = 0; i < cityBatchTimes; i++) {
    const promise = db.collection('city').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    cityTasks.push(promise)
  }

  let articleData = (await Promise.all(articleTasks)).reduce((acc, cur) => {
    return acc.data.concat(cur.data)
  })

  let categoryData = (await Promise.all(categoryTasks)).reduce((acc, cur) => {
    return acc.data.concat(cur.data)
  })

  let cityData = (await Promise.all(cityTasks)).reduce((acc, cur) => {
    return acc.data.concat(cur.data)
  })

  console.log(articleData.data);
  console.log(categoryData.data);
  console.log(categoryData.data);

  return {
    articleData: articleData.data,
    categoryData: categoryData.data,
    cityData: categoryData.data
  }
}