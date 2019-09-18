<template>
        <div class="myIndex-con">
            <div class="myIndex-mon" style="z-index: 1">
                <text class="text1">0 bits</text>
                <text class="text2" style="">0 USD</text>
            </div>
            <div class="myIndex-bot">
                <div class="myIndex-left"><text class="text4">M</text></div>
                <div class="myIndex-right">
                    <text class="text5">1 of 1</text>
                    <text class="text3">personal wallet</text>
                </div>
            </div>
            <text class="label">Star{{count}}</text>
        </div>
</template>

<script>
const stream = weex.requireModule('stream')
export default {
  name: 'MyIndex',
  data () {
    return {
      count: 'fetching...'
    }
  },
  created () {
    stream.fetch({
      method: 'GET',
      type: 'json',
      url: 'https://api.github.com/repos/vuejs/vue'
    }, res => {
      if (res.ok) {
        this.count = res.data.stargazers_count
      } else {
        this.count = '- unknown -'
      }
    })
  }
}
</script>

<style>
    .myIndex-con {
        width: 640px;
        height: 400px;
        margin-top: 50px;
    }
    .myIndex-mon {
        width: 640px;
        background-color: #f9fbff;
        height: 200px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .text1 {
        color: #36171b;
        font-weight: bold;
        font-size: 60px;
    }
    .text2 {
        color: #a9a9a9;
        font-size: 30px;
        margin-top: 6px;
    }
    .myIndex-bot {
        flex-direction: row;
        justify-content: flex-start;
        width: 640px;
    }
    .myIndex-left {
        width: 100px;
        height: 100px;
        background-color: #717171;
        align-items: center;
        justify-content: center;
    }
    .text4{
        color: white;
        font-size: 50px;
    }
    .myIndex-right {
        width: 300px;height: 100px;
        color: #717171;
    }
    .text5{font-size: 26px;transform: translate(50px, 25px);}
    .text3 {
        font-size: 24px;transform: translate(50px,40px);
        color: #a7a7a7;
    }
    .label {
        color: #666;
        text-align: center;
        font-size: 60px;
    }
</style>
