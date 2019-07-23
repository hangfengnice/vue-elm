<template>

    <div class="Rating-gray">
      <i v-for="(item,index) in itemClasses" :key='index' :class="'fa ' + item"></i>
    </div>

</template>

<script>
const length = 5;
const cls_on = "fa-star"
const cls_half = 'fa-star-half-empty'
const cls_off = "fa-star-o"
export default {
  
  name: "rating",
  props: {
    rating: Number
  },
  computed: {
    itemClasses(){
      let result = []
      let score = Math.floor(this.rating * 2) / 2
      // 
      let hasDecimal = score % 1 !== 0
      // integer
      let integer = Math.floor(score)
      for(let i =0; i < integer; i ++){
        result.push(cls_on)
      }
      // 半星
      if(hasDecimal){
        result.push(cls_half)
      }
      // 补齐
      while(result.length < length){
        result.push(cls_off)
      }
      return result
    }
  }
};
</script>

<style lang='scss' scoped>
.Rating-gray {
  margin-right: 1.066667vw;
  color: #ffbe00;
  display: inline-block;
}
</style>