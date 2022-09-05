
import { View, Text, Button, Input, Image} from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import {getUserInfo} from '../../store/actions/user'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'


// @connect(({user})=>({user}),
// (dispath)=>({
//   get(payload) {
//     dispath(getUserInfo(payload))
//   }
// }))

const Index = () => {
  const [value,setValue] = useState(1)
  const [imgUrl,setImgUrl] = useState('')
  const state = useSelector((state) => state)
  const dispath = useDispatch()
  const toPay =()=>{
  Taro.getUserInfo({
    success: (res)=>{
      dispath(getUserInfo(res.userInfo))
      console.log(res);
    },
    fail: (err) =>{
      console.log(err)
    }
  })
}
const chooseAvatar = (data) =>{
  console.log(data.detail);
  setImgUrl(data.detail.avatarUrl)
}
  const handChange = (e) => {
    setValue(e)
  }
    return (
      <View className='home-container'>
        <View className='home-container-text'>
          支付
        </View>
        <View>{state.User.user&&state.User.user.code}</View>
        <View>{value}</View>
        <Input
    type='number'
    placeholder='请输入数字'
    value={value}
    onInput={(e)=>handChange(e)}
  >
  </Input>
  <Button className='pay-btn' onChooseAvatar={(data)=>chooseAvatar(data)} openType='chooseAvatar' onClick={()=> toPay()}  type='primary'>支付</Button>
      <Image src={imgUrl}></Image>
      </View>
    )

    }
    export default Index
