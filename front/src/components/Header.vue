<template>
    <div id="header">
        <div class="inner">
            <h1 class="logo">MrChoiSSi</h1>
            <div class="gnb">
                <ul>
                    <li><router-link v-bind:to="{ name: 'MrChoiSSi' }" exact>Home</router-link></li>
                    <li><router-link v-bind:to="{ name: 'Test' }">Test</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
#header {width:100%;background:#3b3a40;}
#header .inner {width:980px;height:80px;margin:0 auto;}
#header .inner:after {content:"";display:block;clear:both;}
#header .inner .logo {float:left;padding:25px 0 0 10px;font-size:30px;font-weight:bold;color:#fff;}
.gnb {float:right;margin-top:30px;}
.gnb ul:after {content:"";display:block;clear:both;}
.gnb li {float:left;margin-left:20px;}
.gnb li a {font-size:20px;color:#fff;}
.gnb li a.router-link-exact-active {color:#ccc;}
</style>