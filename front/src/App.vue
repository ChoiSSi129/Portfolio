<template>
  <div id="wrap">
    <Header></Header>
    <div id="contents">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: { Header }
}
</script>

<style>
/* Reset */
html,body {font-size:12px;color:#000;line-height:1.2;-webkit-text-size-adjust:none;}
body,div,form,p,h1,h2,h3,h4,h5,h6,dl,dt,dd,ul,ol,li,em,p,span,textarea,pre,label,fieldset,th,td,button,a,input,select,hr {margin:0;padding:0;font-family:Arial, dotum;word-break:break-all;}
h1,h2,h3,h4,h5,h6,strong {font-weight:normal;}
em,span,strong {font-size:100%;}
em,address {font-style:normal;}
ol,ul,dl {list-style:none;}
fieldset,img,hr,button {border:0;}
img,input,textarea,select {vertical-align:top;}
table {width:100%;border-collapse:collapse;border-spacing:0;table-layout:fixed;}
legend,caption {overflow:hidden;width:0;height:0;padding:0;font-size:0;line-height:0;}
a {color:#2c2c2c;text-decoration:none;}
a:hover {text-decoration:none;}
button {overflow:visible;margin:0;padding:0;background:none;border-radius:0;cursor:pointer;outline:none;}
input[type=text]::-ms-clear,input[type=password]::-ms-clear,input[type=text]::-ms-reveal,input[type=password]::-ms-reveal {display:none;}

/* Layout */
#wrap {position:relative;width:100%;}
#contents {width:980px;margin:50px auto;}
</style>
