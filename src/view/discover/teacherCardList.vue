<template>
	<div>
		<van-swipe :autoplay="3000" >
			<van-swipe-item v-for="(discoverCourse, index) in DiscoverCourseList" :key="index"  @click="onChange(discoverCourse.id)">
				<img class="img" :src="discoverCourse.courseLogo" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: this.HOME,
			DiscoverCourseList: [
				// {id:1, "courseLogo":"wx-edu.oss-cn-hangzhou.aliyuncs.com/picture/teacher2.png"}
			]
				
		};
	},

	methods: {
		// 获取推荐课程列表
		getDiscoverCourseList() {
			let url = this.HOME + "/course/discover"
			this.HTTP.get(url,null).then(res => {
				if (res.success) {
					this.DiscoverCourseList = res.data
					this.DiscoverCourseList.forEach(e => {
						e.courseLogo = "https://" + e.courseLogo
					})
				}
			})
		},
		// 点击推荐课程事件
		onChange(id) {
			console.log("点击了")
			console.log(id)
		}
	},

	mounted() {
		this.getDiscoverCourseList()
	}

	
}
</script>

<style>
.img {
	width: 80%;
	margin-left: 40px;
	margin-top: 30px;
}
</style>