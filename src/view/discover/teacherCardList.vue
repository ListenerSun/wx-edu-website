<template>
	<div>
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(image, index) in images" :key="index">
				<img class="img" :src="image" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
export default {
	data() {
		return {
			images: [
				"https://wx-edu.oss-cn-hangzhou.aliyuncs.com/picture/teacher1.png",
				"https://wx-edu.oss-cn-hangzhou.aliyuncs.com/picture/teacher2.png"
			]
		};
	}
};
</script>

<style>
.img {
	width: 85%;
	margin-left: 34px;
	margin-top: 85px;
}
</style>