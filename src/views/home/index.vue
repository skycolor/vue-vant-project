<template>
    <van-grid class="home_page" :column-num="4">
        <van-grid-item v-for="(item, index) in gridArr" :key="index" :icon="item.icon" 
            :text="item.text" :to="item.to" />
    </van-grid>
</template>


<script>
import { Grid, GridItem } from 'vant';
export default {
  data() {
    return {
      gridArr: [{
        text: "地址",
        icon: "friends-o",
        to: "/address/list"
      },{
        text: "表单",
        icon: "comment-o",
        to: "/form"
      },{
        text: "商品",
        icon: "point-gift-o",
        to: "/goods"
      },{
        text: "导航",
        icon: "service-o",
        to: ""
      }]
    }
  },
  components: {
    [Grid.name]: Grid, [GridItem.name]: GridItem,
  },
}
</script>


<style lang="less">
.home_page{
    font-size: 32px;
}
</style>