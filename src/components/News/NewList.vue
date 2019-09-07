<template>
<div class="container">
    <Header title="新闻">

    </Header>
<!-- <h1>新闻列表</h1> -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id" >
        <router-link :to="'/index/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_src">

          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <span style="font-size:12px;">{{item.abstract}}</span>
            <p class='mui-ellipsis'>
              <span class="first">发表时间：{{item.title_time}}</span>
              
              <span class="second">点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>

    </ul>
</div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: 'newlist',
  data(){
    return {
      newsList:[]
    }
  },  
  components: {
    Header,
  },
  mounted(){
    this.axios.get('/shopping_api/newsList.php').then(res=>{
      // console.log(res);
      var state=res.data.state;
      if(state==='0')
      {
        this.newsList=res.data.data.news;
        // console.log(this.newsList);
      }
      else
      {
        this.$toast({
          message: "列表获取失败",
          duration: 5000
        });
      }
    })
  },
  methods:{
     handleToBack() {
 this.$router.push('/index');//返回上一层
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  padding-top: 40px;
  padding-bottom:40px;
}
.mui-table-view {
  li {
    height: 110px;

    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
      // align-self: flex-end;
      // flex:2;
    }
    .mui-media-body{
          height: 80px;
          display:flex;
          flex-direction: column;
          // justify-content: center;
    }
    img{
      height: 80px;
      max-width:100px;
    }
  }
}
</style>
