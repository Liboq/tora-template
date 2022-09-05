import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'
import { AtIcon } from 'taro-ui'
import { iconArr } from '../../utils/icon'

const IconArr = ()=>{
  return iconArr.map(item=>

    <View className='home-container-icon'>
      <AtIcon prefixClass='lbq' value={item} size='50' color='#ccc'></AtIcon>
    </View>
    // <AtIcon value= {item} size='30' color='#F00'></AtIcon>

  )
}
export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: 0
    }

  }
  toPay(){
    console.log(iconArr);
    Taro.navigateTo({
      url:"/pages/pay/index"
    })
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='home-container'>
        <View className='home-container-title'>icon library</View>
        <View className='home-container-icon-list'>
        <IconArr></IconArr>
        </View>
        <AtButton className='pay-btn' onClick={()=>this.toPay()} type='primary'>去支付</AtButton>
      </View>
    )
  }
}
