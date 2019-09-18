<template>
    <wxc-result type="noGoods"
                :show="show"
                padding-top="232"
                @wxcResultButtonClicked="wxcResultButtonClicked"></wxc-result>
</template>

<script>
import { WxcResult } from 'weex-ui'
export default {
  name: 'list',
  components: { WxcResult },
  data: () => ({
    show: true
  }),
  methods: {
    wxcResultButtonClicked (e) {
      // e.type即错误页面类型，可以在这里做对应操作
      // modal.toast({
      //   'message': e.type,
      //   'duration': 1,
      // })
    }
  }
}
</script>

<style scoped>

</style>
