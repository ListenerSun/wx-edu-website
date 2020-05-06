<template>
	<div class="top">
		<div>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-yonghu" />
			</svg>
             <p class="text">登录/注册</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	components: {}
};
</script>

<style>
.top {
	height: 200px;
	margin: 0 auto;
	text-align: center;
	line-height: 150px;
}

.icon {
	font-size: 100px;
    margin: 30px 0 0 0 ;
}
.text {
    height: 30px;
    margin-top: -120px;
}
</style>
