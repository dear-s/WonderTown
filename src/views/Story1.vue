<template>
    <div>
        <div>
            <h4 id="title">Masks to the rescue</h4>
        </div>
        <unity src="../static/Build/game.json" width="1000" height="600" unityLoader="../static/Build/UnityLoader.js"></unity>
    </div>
</template>

<script>
import Unity from 'vue-unity-webgl'
export default {
  components: { Unity }
}
</script>
<style>
#title {
  color: white;
  font-size: 36px;
}
</style>
