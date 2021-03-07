<template>
  <div id="home">
    <h4 id="title">Welcome to WonderTown!</h4>
    <el-input id="homeInput" v-model="desireInput" placeholder="What's your desire?"></el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      desireInput: ''
    }
  }
}
</script>

<style>
#title {
  color: white;
  font-size: 36px;
}

#homeInput {
  width: 50%;
  height:40px;
  text-align: center;
}

/* #homeInput-text >>> .el-input__inner {
  -moz-appearance: none;
  font-size: 16px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #b6d8f1;
  color: #6a6f77;
} */
</style>
