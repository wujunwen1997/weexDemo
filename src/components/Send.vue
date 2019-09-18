<template>
    <div class="send">
        <text class="text1">To: 目标地址</text>
        <input type="text" class="input1" placeholder="Bitcoin address"/>
        <text class="text1">数量</text>
        <input type="text" class="input1" placeholder="Amount"/>
        <text class="text1">备注</text>
        <textarea class="textarea"></textarea>
        <div class="send-btn">
            <wxc-button text="发送" @wxcButtonClicked="wxcButtonClicked" size="big" type="blue"></wxc-button>
        </div>
    </div>
</template>

<script>
import { WxcButton, WxcPopup } from 'weex-ui'
export default {
  name: 'Send',
  data () {
    return {
      show: false,
      isChecked: false
    }
  },
  components: { WxcButton, WxcPopup },
  methods: {
    wxcButtonClicked  () {
      this.$router.push('/Psd')
    },
    wxcDialogCancelBtnClicked () {
      this.show = false
    },
    wxcDialogConfirmBtnClicked () {
      this.show = false
    },
    wxcDialogNoPromptClicked (e) {
      this.isChecked = e.isChecked
    }
  }
}
</script>

<style scoped>
    .send {
        margin-top: 50px;
        width: 680px;
        height: 650px;
        background-color: white;
        padding: 30px;
    }
    .text1 {
        height: 50px;
        font-size: 22px;
        color: #717171;
        margin-top: 16px;
    }
    .input1 {
        height: 70px;
        font-size: 24px;
        background-color: #f6f6f6;
        padding-left: 20px;
    }
    .textarea {
        font-size: 24px;
        height: 120px;
        padding: 10px;
        color: #666666;
        background-color: #f6f6f6;
    }
    .send-btn {
        align-items: center;
        margin-top: 50px;
    }
</style>
