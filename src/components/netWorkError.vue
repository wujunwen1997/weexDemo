<template>
    <wxc-result type="noNetwork"
                :show="show"
                padding-top="232"
                @wxcResultButtonClicked="wxcResultButtonClicked"></wxc-result>
</template>

<script>
import { WxcResult } from 'weex-ui'
export default {
  name: 'netWorkError',
  components: { WxcResult },
  data: () => ({
    show: true
  }),
  methods: {
    wxcResultButtonClicked (e) {
      // e.type即错误页面类型，可以在这里做对应操作
    }
  }
}
</script>

<style scoped>

</style>
