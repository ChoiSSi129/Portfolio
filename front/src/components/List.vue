<template>
  <div class="listWrap">
    <div class="btnArea">
      <button type="button" class="btnYear" v-for="year in portFolioData.yearData" :data-yearid="year.yearID">{{year.year}}</button>
    </div>
    <div class="projectList">
      <div class="view" v-for="data in portFolioData.data">
        <p class="tit">{{data.title}}</p>
        <p class="txt">{{data.text}}</p>
        <div class="btnWrap">
          <a :href="data.url" class="btn" target="_blank">작업물보기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioList',
  data () {
    return {
      portFolioData: {}
    }
  },

  created(){
    this.$http.post('/api/data').then((result) => {
      this.portFolioData = result.data;
    });
  },

  methods: {
    
  }
}
</script>

<style scoped>
/* Common */
.btnYear {display:inline-block;height:28px;margin-left:5px;padding:0 5px;border:1px solid #ccc;border-radius:3px;background:#fff;font-size:14px;line-height:28px;}
.btnYear.current {background:#757380;border:1px solid #757380;font-weight:bold;color:#fff;}

/* Contents */
.btnArea {margin-bottom:20px;text-align:right;}

.projectList {position:relative;}
.projectList > .view {/*position:absolute;top:0;left:0;*/overflow:hidden;width:208px;height:101px;padding:150px 15px 15px;border:1px solid #e4e4e4;background:#fff;}
.projectList .tit {overflow:hidden;font-weight:bold;font-size:16px;line-height:20px;text-overflow:ellipsis;white-space:nowrap;}
.projectList .txt {overflow:hidden;margin-top:10px;font-size:14px;text-overflow:ellipsis;white-space:nowrap;}
.projectList .btnWrap {padding-top:15px;margin-top:15px;border-top:1px solid #aeb4bd;}
.projectList .btn {display:inline-block;height:28px;padding:0 5px;border:1px solid #ccc;border-radius:3px;font-size:12px;font-weight:bold;line-height:28px;}
</style>
