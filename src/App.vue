<template>
  <div id="app">
    <indexHeader />
    <indexMain/>
    <indexFooter />
  </div>
</template>


<script>
import indexHeader from "@/view/index/indexHeader";
import indexFooter from "@/view/index/indexFooter";
import indexMain from '@/view/index/indexMain'
export default {
  name: "App",
  components: {
    indexHeader,
    indexFooter,
    indexMain
  }
};
</script>

<style >
  @import "./assets/icon/iconfont.css";
</style>

