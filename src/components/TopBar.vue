<template>
    <div class="container">
        <div>
            <wxc-minibar>
                <text slot="left" class="icon1 iconfont " @click="leftClick">&#xe671;</text>
                <text class="text1" slot="middle">我的钱包</text>
                <wxc-icon slot="right" name="scanning" class="icon1" @wxcIconClicked="rightClick"></wxc-icon>
            </wxc-minibar>
        </div>
        <wxc-popup width="450" popup-color="#EAE9E2"
                   pos="left"
                   :show="isShow"
                   @wxcPopupOverlayClicked="overlayClicked">
            <div class="headPic">
                <image class="pic" src="http://b-ssl.duitang.com/uploads/item/201702/28/20170228120528_RVk2N.thumb.700_0.jpeg"/>
                <text class="text2">watts</text>
                <text class="text3">View My Profile</text>
            </div>
            <div class="list" style="background-color: whitesmoke">1</div>
            <div class="list">2</div>
            <div class="list">3</div>
        </wxc-popup>
    </div>
</template>

<script>
import { WxcMinibar, WxcPopup, WxcIcon } from 'weex-ui'
// const modal = weex.requireModule('modal')

export default {
  name: 'TopBar',
  components: { WxcMinibar, WxcPopup, WxcIcon },
  data: () => ({
    isShow: false
  }),
  created () {
    let domModule = weex.requireModule('dom')
    domModule.addRule('fontFace', {
      'fontFamily': 'iconfont',
      'src': "url('http://at.alicdn.com/t/font_1119953_cyemaef6jp9.ttf')"
    })
  },
  methods: {
    leftClick () {
      this.isShow = true
    },
    data: () => ({
      isShow: false
    }),
    rightClick () {
      // modal.toast({ 'message': 'click rightButton!', 'duration': 1 })
      // const plugin = weex.requireModule('weexScanQR')
      // plugin.scanQR('title', function (ret) {
      //   console.log(321321, ret)
      // })
    },
    overlayClicked () {
      this.isShow = false
    }
  }
}
</script>
<style scoped>
    .iconfont{font-family:iconfont;}
    .text1{font-size: 32px;color: #464347;}
    .icon1{font-size: 38px;color: #464347;}
    .headPic{height: 250px;background-color: #785d44;align-items: center;padding-top: 40px}
    .pic{width: 100px;height: 100px;border-radius: 100px}
    .text2{font-size: 30px;color: #e9e9e9;font-weight: bold;margin-top: 15px;margin-bottom: 10px;}
    .text3{font-size: 20px; color: #c9c9c9;}
    .list{height: 120px;border-left-style: solid;border-bottom-width: 1px;border-bottom-color: #e1ded3;
        justify-content: center;align-items: center;}
</style>
