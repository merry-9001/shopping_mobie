<template>
  <div class="cmt-container">
    <h3>发表评论 </h3>

    <textarea placeholder="留下你的评论" maxlength="120" v-model="content"></textarea>

    <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>


    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="index">
        <div class="cmt-title">
          第{{index+1}}楼&nbsp;&nbsp;用户：&nbsp;&nbsp;发表时间：{{ item.comment_time}}
        </div>
        <div class="cmt-body">
          {{ item.comment_content === 'undefined' ? '此用户很懒，嘛都没说': item.comment_content }}
        </div>
      </div>

    </div>
    <!-- <mt-button type="danger" size="large" plain>加载更多</mt-button> -->
  </div>
</template>

<script>

export default {
  name: 'Header',
  data(){
    return {
      comments:[],
      content:''
    }
  },
  props:{
    id:String
  },
  mounted(){
    this.getcomment();
  },
  methods:{
    addComment(){
      // console.log(this.content);
          var params = new URLSearchParams();
          params.append("content", this.content);
          params.append("id", this.id);
          this.axios.post('/shopping_api/newsAddComment.php',params).then(res=>{
            var state=res.data.stauts;
            // console.log(state);
            // console.log(res);
            if(state==='0')
            {            this.getcomment();}

          })
    },
    getcomment(){
    this.axios.get('/shopping_api/newsComment.php?id='+this.id).then(res=>{
      // console.log(res);
      var state=res.data.state;
      // console.log(state);
      if(state==='0')
      {
        this.comments=res.data.data.newComment;
        // console.log(this.comments);
      }
    })
    }
  }
}
</script>
<style scoped lang="scss">
.cmt-container {
    // padding-top: 40px;
  padding-bottom:50px;
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
