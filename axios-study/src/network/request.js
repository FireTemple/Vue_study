import axios from 'axios'

// 进行封装
export function request(config) {

  let instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });

  instance(config.baseConfig)
    .then(res => {
    config.success(res);
  }).catch(err => {
    config.failure(err);
  })

}


export function requestPromise(config) {
  // 相当于返回了一个Promise对象
  return new Promise((resolve, reject) => {
    let instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    });
  // 这里相当于传统过程中只有ajax情况下处理success，和reject 分别
  // 对应了向下传值和报错
    instance(config)
      .then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
    })
  })
}


export function requestUlt(config) {
  // 相当于返回了一个Promise对象

    let instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    });

    instance.interceptors.request.use(res => {
      console.log(res);
      // 这里一定要返回数据
      return res;
    },err => {
      console.log(err);
    })
    // instance 本身就是promise对象。
    return instance(config)
}
