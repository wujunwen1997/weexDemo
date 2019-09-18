<template>
    <div class="psd">
        <input class="input1" type="password" return-key-type="go" maxlength="6" placeholder="6位密码" autofocus/>
    </div>
</template>

<script>
import { WxcSearchbar } from 'weex-ui'
export default {
  name: 'Psd',
  data () {
    return {
      isPay: false
    }
  },
  components: { WxcSearchbar },
  created: function () {
  },
  methods: {
    wxcSearchbarInputOnFocus () {
    },
    wxcSearchbarInputOnBlur () {
    },
    wxcSearchbarInputReturned () {
    },
    wxcSearchbarCloseClicked () {
    },
    wxcSearchbarInputOnInput (e) {
      this.value = e.value
    },
    wxcSearchbarCancelClicked () {
    },
    wxcSearchbarInputDisabledClicked () {
    },
    wxcSearchbarDepChooseClicked () {
    }
  }
}
</script>

<style scoped>
.psd .input1{
    height: 0.85rem;font-size: 0.36rem;background: #e9e9e9;text-indent: 1em;border: none;
}
</style>
