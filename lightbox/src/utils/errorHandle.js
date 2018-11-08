import router from '../router'
import store from '../store/index'
const errorCode = {
  c10002: 10002,
  c10019: 10019,
  c10020: 10020,
  c10050: 10050,
  c10055: 10055
}
function handleCommonError(err) {
  const { code } = err
  switch (code) {
    case errorCode.c10002:
    case errorCode.c10019:
    case errorCode.c10020: {
      if (
        err.code === errorCode.c10002 ||
        err.code === errorCode.c10019 ||
        err.code === errorCode.c10020
      ) {
        // 未登录时页面跳转，并且把当前页面路由存储起来，登陆成功后回退到当前路由
        const { fullPath } = router.currentRoute
        store.commit('authorization', { payload: '' })
        router.push(`/login?redirct=${fullPath}`)
      }
      break
    }
    default: {
      if (!(code >= errorCode.c10050 && code <= errorCode.c10055)) {
        handleNoCommontError()
      }
    }
  }
}
function handleNoCommontError() {
  // TODO:服务器错误统一处理,换成当前项目组件库的toast或者modal提示
  console.log('服务器繁忙，请稍后再试')
}
export { handleCommonError, handleNoCommontError }
