import { Component } from 'react'
import { Provider } from 'react-redux'
import configStore from './store'
import 'taro-ui/dist/style/index.scss'
import './app.scss'
import './assets/fonts/iconfont.css'
console.log(configStore().getState.User,111111111);
const store  = configStore()
class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}
  // this.props.children 是将要会渲染的页面
  render () {
    return <Provider store= {store}>
      {this.props.children}
    </Provider>
  }
}

export default App
