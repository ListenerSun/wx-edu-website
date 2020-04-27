<template>
  <div class="footer">
    <div>
      <i class="iconfont icon-faxian" style="font-size: 30px"></i>
      <a style="font-size: 10px">发现</a>
    </div>
    <div>
      <i class="iconfont icon-jiaoyu" style="font-size: 30px"></i>
      <a style="font-size: 10px">贴心老师</a>
    </div>
    <div>
      <i class="iconfont icon-biaoqing" style="font-size: 47px"></i>
      <a style="font-size: 10px">推荐</a>
    </div>
    <div>
      <i class="iconfont icon-wo" style="font-size: 35px"></i>
      <a style="font-size: 10px"> 我的</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 75px;
  background-color:whitesmoke;
  line-height: 50px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
}

i {
    margin-top: 10px;
    margin-bottom: -20px;
}

.footer div * {
  width: 100%;
  max-height: 20px;
}
.footer div {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>