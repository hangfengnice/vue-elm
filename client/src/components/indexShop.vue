<template>
  <section class="index-container">
    <div class="index-shopIn">
      <!-- 左侧 -->
      <div class="logo_container">
        <img :src="restaurant.image_path" alt />
      </div>

      <!-- 右侧 -->
      <div class="index_main">
        <div class="index_shopname">
          <i v-if="restaurant.is_premium">品牌</i>
          <span>{{restaurant.name}}</span>
        </div>

        <div class="index-rateWrap">
          <div>
            <div class="Rating-gray">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
            <span class="rate">{{restaurant.rating}}</span>
            <span>月售 {{restaurant.recent_order_num}}</span>
          </div>
          <div v-if="restaurant.delivery_mode" class="delivery">
            <span class="icon-hollow">{{restaurant.delivery_mode.text}}</span>
          </div>
        </div>

        <!-- 配送 -->
        <div class="index-moneylimit">
          <div>
            <span>¥{{restaurant.float_minimum_order_amoun}}起送</span>
            <span>配送费¥{{restaurant.float_delivey_fee}}</span>
          </div>

          <div class="index-distanceWrap">
            <span>1km</span>
            <span>{{restaurant.order_lead_time}} 分钟</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "indexShop",
  props: {
    restaurant: Object
  },
  created() {
    console.log(this.restaurant);
  }
};
</script>

<style lang='scss' scoped>

</style>