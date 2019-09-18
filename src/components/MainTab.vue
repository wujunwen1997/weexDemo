<template>
    <wxc-tab-bar :tab-titles="tabTitles"
                 :tab-styles="tabStyles"
                 title-type="iconFont"
                 @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
        <div class="item-container" :style="contentStyle"><MyIndex></MyIndex></div>
        <div class="item-container" :style="contentStyle"><MyGet></MyGet></div>
        <div class="item-container" :style="contentStyle"><MySend></MySend></div>
        <div class="item-container" :style="contentStyle"><MyList></MyList></div>
    </wxc-tab-bar>
</template>

<script>
import { WxcTabBar, Utils } from 'weex-ui'
import Config from '../config/tab'
import MyIndex from './MyIndex'
import MyGet from './Get'
import MySend from './Send'
import MyList from './List'

export default {
  name: 'mainTab',
  components: { WxcTabBar, MyIndex, MyGet, MySend, MyList },
  data: () => ({
    tabTitles: Config.tabTitles,
    tabStyles: Config.tabStyles
  }),
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    const { tabStyles } = this
    this.contentStyle = { height: (tabPageHeight - tabStyles.height - 90) + 'px' }
  },
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      // const index = e.page
      // console.log(index);
    }
  }
}
</script>

<style scoped>
    .item-container{width: 750px;align-items: center;}
</style>
