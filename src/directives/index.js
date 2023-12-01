import color from './color'
import font from './font'

const directives = {
  color,
  font
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
