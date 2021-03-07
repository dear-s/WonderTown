<template>
    <div id="nav">
        <div>
            <h4 id="title">Welcome to WonderTown!</h4>
        </div>
        <div class="inarow">
        <div class="contentblock">
            <router-link to="/Story1"><p class="contenttitle">Masks to the rescue</p></router-link>
            <img src="../assets/story1.jpeg" width="150px" />
        </div>
        <div class="contentblock">
            <router-link to="/Story2"><p class="contenttitle">A new kinda Halloween</p></router-link>
            <img src="../assets/story2.png" width="150px" />
        </div>
    </div>
    <div class="inarow">
        <div class="contentblock">
            <router-link to="/Story3"><p class="contenttitle">A special birthday</p></router-link>
            <img src="../assets/story3.png" width="150px" />
        </div>
        <div class="contentblock">
            <router-link to="/Story4"><p class="contenttitle">Helping dogs in shelter</p></router-link>
            <img src="../assets/story4.png" width="150px" />
        </div>
    </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
#nav {
}
.contentblock {
    background-color: white;
    width: 35%;
    height:180px;
    border-radius: 30px;
    margin-right: 30px;
    display: inline-block;
    vertical-align:top;
}
.contenttitle {
    font-size: 20px;
    text-align: center;
    color: #b08dd0;
}
.inarow {
    margin-bottom: 30px;
    text-align: center;
}
#title {
  color: white;
  font-size: 36px;
}
</style>
