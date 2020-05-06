<template>
	<van-row>
		<admin-top></admin-top>
		<adminMenu></adminMenu>
	</van-row>
</template>

<script>
import adminMenu from "@/view/admin/adminMenu";
import adminTop from "@/view/admin/adminTop";
export default {
	data() {
		return {};
	},
	components: {
		adminTop,
		adminMenu
	}
};
</script>

<style>
</style>
