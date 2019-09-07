<template>
  <div class="newsinfo-container">
    <Header title="详细新闻">
    </Header>
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.title_time  }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.abstract"></div>

    <!-- 评论子组件区域 -->
    <!-- <comment-box :id="this.id"></comment-box> -->
        <hr>
    <CommentBox :id="this.id"></CommentBox>
  </div>
</template>

<script>
import CommentBox from "@/components/Comment";
import Header from "@/components/Header";
export default {
  name: 'NewsInfo',
  components:{
    CommentBox,
    Header
  },
  data(){
    return{
      id:this.$route.params.id,
      newsinfo:{}
    }
  },
  mounted(){
    // this.id=$route.params.id;
    this.axios.get('/shopping_api/newInfo.php?id='+this.id).then(res=>
    {
      
      var state=res.data.state;
      if(state==='0')
      {
        this.newsinfo=res.data.data.detailNews;
      }
      console.log(res);
    })
    // console.log(this.$route.params.id);
  },
  methods:{
         handleToBack() {
 this.$router.push('/index/news');//返回上一层
    }
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding-top: 40px;
  // padding-bottom:40px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>

