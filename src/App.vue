<template>
  <div id="app">
    <indexHeader/>
    <router-view>
    </router-view>
    <indexFooter />
  </div>
</template>


<script>
import indexHeader from "@/view/index/indexHeader";
import indexFooter from "@/view/index/indexFooter";
import teacherCardList from '@/view/discover/teacherCardList'


export default {
  name: "App",
  components: {
    indexHeader,
    indexFooter,
    teacherCardList
  }
};
</script>

<style >
@import "./assets/icon/iconfont.css";
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

