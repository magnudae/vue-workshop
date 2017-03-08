<template>
  <div id="frame">
    This is our frame!
    <div>
      <canvas ref="myCanvas"> </canvas>
    </div>
    <button @click="draw"> Draw a line </button>
    <div v-for="dummy in dummies">
      {{dummy}}
      </br>
    </div>
  </div>
</template>

<script>
  module.exports = {

    data: function(){
      return {
        dummies: ["hola", "por", "favor"]
      }
    },

    methods: {
      draw: function draw() {
        let c = this.$refs.myCanvas;
        let ctx = c.getContext("2d");
        ctx.moveTo(0,0);
        ctx.lineTo(200,100);
        ctx.stroke();
      }
    }
  }
</script>

<style>
  body {
    background-color: black;
    color: white;
  }

  canvas {
    width: 70%;
    height: 70%;
    background-color: white;
    border:2px solid plum;
  }
  #frame {
    font-size: 30px;
  }
</style>
