<template>
  <div class="container">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
>
  <div v-for=" item in teacherJobMessageList " :key="item.id">
      <van-card
        title="商品标题"
        thumb="https://wx-edu.oss-cn-hangzhou.aliyuncs.com/picture/teacher2.png"
      >
        <div slot="title" style=" margin:3px 0 10px 0;">
          <div>
            <span>姓名: {{item.teacherName}}</span>
            <span style="float:right">{{item.graduateSchool}}</span>
          </div>
        </div>
        <div class="card_desc" slot="desc">学科：{{item.subject}}</div>
        <div class="card_desc" slot="desc">时长：{{item.startTime}}</div>
        <div class="card_desc" slot="desc">方式：线上</div>
        <div slot="price">
          <span class="card_price_num">¥ {{item.price}}</span>
        </div>
      </van-card>
    </div>
</van-list>
    <!-- <div v-for=" item in teacherJobMessageList " :key="item.id">
      <van-card
        title="商品标题"
        thumb="https://wx-edu.oss-cn-hangzhou.aliyuncs.com/picture/teacher2.png"
      >
        <div slot="title" style=" margin:3px 0 10px 0;">
          <div>
            <span>姓名: {{item.teacherName}}</span>
            <span style="float:right">{{item.graduateSchool}}</span>
          </div>
        </div>
        <div class="card_desc" slot="desc">学科：{{item.subject}}</div>
        <div class="card_desc" slot="desc">时长：{{item.startTime}}</div>
        <div class="card_desc" slot="desc">方式：线上</div>
        <div slot="price">
          <span class="card_price_num">¥ {{item.price}}</span>
        </div>
      </van-card>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      teacherJobMessageList: [],
       loading: false,
      finished: false,
      refreshing: false,
      pageNum: 1,
      pageSize:10
    };
  },
  methods: {

     onLoad() {
      // 异步更新数据
      this.getTeacherJobMessageList(this.pageNum,this.pageSize)
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    },
    // 获取推荐课程列表
    getTeacherJobMessageList(pageNum,pageSize) {
      let url = this.HOME + "/teacher/edu/teacher_job/list_teacher_job_message?pageNum="+pageNum+"&pageSize="+pageSize;
      this.HTTP.get(url, null).then(res => {
        if (res.success) {
          this.teacherJobMessageList = res.data.list;
          this.pageNum += 1
        }
      });
    }
  },
  mounted() {
    this.getTeacherJobMessageList(this.pageNum,this.pageSize);
  }
};
</script>

<style>
.card_price_num {
  font-size: 15px;
  color: red;
  margin-left: 150px;
}

.card_desc {
  margin: 5px 0 5px 0;
}
.container {
  width: 90%;
  margin: 15px 0 10px 10px;
}
</style>
