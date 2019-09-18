<template>
  <div class="get">
      <text class="text">我的比特币地址：</text>
      <image class="get-ewm" src="http://www.wwei.cn/qrcode-viewfile?type=qrcode_text&k=iiYxz&hash=a8ee09d5a07c7fdae624e78b89af0037&timeout=1554360370&size=100"></image>
      <text class="text1">{{value}}</text>
      <text class="text2">表示由网络下载的文档，系统无法判断其安全性，因此只用来显示，如果你需要对其进行编辑，需要验证其安全性，即对其赋权，然后才可以进行编辑等各项工作。</text>
      <div class="botBtn">
          <wxc-button text="显示所有地址" @wxcButtonClicked="wxcButtonClicked" size="medium" type="green"></wxc-button>
          <wxc-button text="创建新地址" @wxcButtonClicked="wxcButtonClicked" size="medium"></wxc-button>
      </div>
  </div>
</template>

<script>
import { WxcButton } from 'weex-ui'
export default {
  name: 'Get',
  data () {
    return {
      value: 'BITCOIN-OMNI-f66UtN0frEVV'
    }
  },
  components: {WxcButton},
  methods: {
    wxcButtonClicked (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
    .get {
        background-color: white;
        width: 680px;
        margin-top: 50px;
        align-items: center;
        height: 830px;
    }
    .text {
        height: 80px;
        width: 680px;
        line-height: 80px;
        color: #717171;
        font-size: 26px;
        padding-left: 20px;
    }
    .get-ewm {
        margin: 25px 0;height: 360px;width: 360px;
    }
    .text1 {
        font-size: 22px;
        color: #717171;
    }
    .text2 {
        font-size: 20px;
        width: 620px;
        color: #717171;
        margin-top: 20px;
        padding-top: 20px;
    }
    .botBtn {
        width: 500px;
        height: 60px;
        margin-top: 100px;
        flex-direction: row;
        justify-content: space-around;
    }
</style>
