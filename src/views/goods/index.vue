<template>
    <div class="goods_page" >
      <p class="tit c_text_center" >商品页面</p>
    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.getPageData()
  },
  methods: {
    getPageData(){
      this.api.mockUser({}, { isMock: true }).then(res => {
        console.log('suc', res);
      })
      this.api.mockPhone({}, { isMock: true }).then(res => {
        console.log('suc', res);
      })
      // this.api.listFrontCategoryTree({
      //   businessTypeBase: 1,
      //   cityCode: "4201",
      //   storeCode: "617001"
      // })
    }
  }
}
</script>

<style lang="less">
.goods_page{
  .tit{
    .font(28px, 36px, #333);
    padding: 8px;
  }
}
</style>