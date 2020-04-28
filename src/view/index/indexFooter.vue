<template>
	<div class="van-tabbar">
		<van-tabbar v-model="active" active-color="#1989fa" border="true" router>
			<van-tabbar-item to="discover">
				<van-icon class="iconfont icon-faxian" class-prefix="icon" slot="icon" size="23"></van-icon>
				<span>发现</span>
			</van-tabbar-item>
			<van-tabbar-item to="/">
				<span style="margin:50px 0 0 2px">贴心老师</span>
				<van-icon class="iconfont icon-dibudaohanglan-" class-prefix="icon" slot="icon" size="26"></van-icon>
			</van-tabbar-item>
			<van-tabbar-item to="main">
				<van-icon class="iconfont icon-icon_tuijiannor" class-prefix="icon" slot="icon" size="27"></van-icon>
				<span style="margin:0 0 0 2px">推荐</span>
			</van-tabbar-item>
			<van-tabbar-item>
				<van-icon class="iconfont icon-wo1" class-prefix="icon" slot="icon" size="25"></van-icon>
				<span style="margin:0 0 0 2px">我的</span>
			</van-tabbar-item>
		</van-tabbar>
	</div>

	<!-- <div>
			<i class="iconfont icon-faxian" style="font-size: 30px"></i>
			<router-link :to="'discover'">发现</router-link>
		</div>
		<div>
			<i class="iconfont icon-jiaoyu" style="font-size: 30px"></i>
			<router-link :to="'home'">贴心老师</router-link>
		</div>
		<div>
			<i class="iconfont icon-biaoqing" style="font-size: 47px"></i>
			<router-link :to="'home'">推荐</router-link>
		</div>
		<div>
			<i class="iconfont icon-wo" style="font-size: 35px"></i>
			<router-link :to="'discover'">我的</router-link>
	</div>-->
</template>

<script>
export default {
	data() {
		return {
			active: 0
		};
	}
};
</script>

<style scoped>

 .van-tabbar {
  background-color: gainsboro;
  position: fixed;
  bottom: 0;


}

/* .footer {
	width: 100%;
	height: 75px;
	background-color: whitesmoke;
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

a {
	color: black;
	font-size: 10px;
	text-decoration: none;
}

.router-link-active {
	text-decoration: none;
} */
</style>