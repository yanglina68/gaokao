<template>
    <div class="home">
        <div class="person">
            <div class="back"></div>
            <div class="info">请选择科目，进行答题</div>
            <router-link :to="{name:'question',params:{step:1},query:{type:1}}"><div class="f-like"></div></router-link>
            <router-link :to="{name:'question',params:{step:1},query:{type:0}}"><div class="f-wenke"></div></router-link>
            <div class="yes"></div>
			<div class="wrong"></div>
        </div>
        <div class="hand_left"></div>
		<div class="hand_right"></div>
    </div> 
</template>
<script>
    export default{

    }
</script>
<style>
    .home{
        width:100%;
        height:100%;
        overflow:hidden;
    }
    .person{
        width: 84%;
        height:100%;
        margin: 0 auto;
        background:url("../../imgs/home-pepole.png") no-repeat center top;
        background-size:100% 432px;
        position: relative;
    }
    @keyframes back_m {
        0% {
            top: -1.65rem; 
        }
        80% {
            top: 1.4rem; 
        }
        100% {
            top: 0.82rem; 
        } 
    }
    @keyframes moves {
        0% {
            transform: scale(1, 1);
            opacity: 1; 
            }
        100% {
            transform: scale(0.8, 0.8);
            opacity: 0.8;
            } 
    }
    .back{
        width: 160px;
        height: 82px;
        background: url(../../imgs/home-title.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 45px;
        left: 58px;
        animation: back_m ease 0.6s forwards;
    }
    .info{
        position: absolute;
        top: 210px;
        left: 70px;
        color:#d67230;
        font-size:14px;
        font-weight: bold;
    }
    .yes{
        width: 50px;
        height: 50px;
        background: url(../../imgs/home-icon-1.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 460px;
        left: 40px;
    }
    .wrong {
        width: 50px;
        height: 50px;
        background: url(../../imgs/home-icon-2.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 440px;
        right: 40px;
    }
    .hand_left{
        width: 32px;
        height: 54px;
        background: url(../../imgs/home-left-hand.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 320px;
        left: 0;
    }
    .hand_right{
        width: 32px;
        height: 54px;
        background: url(../../imgs/home-right-hand.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 320px;
        right: 0;
    }
    .f-like,.f-wenke{
        position: absolute;
        top:250px;
        width:30%;
        height:50px;
        animation: moves linear 1s infinite alternate
    }
    .f-like{
        left:10%;
        background:url("../../imgs/f-like.png") no-repeat center center;
        background-size:contain !important;
        
    }
    .f-wenke{
        right:10%;
        background:url("../../imgs/f-wenke.png") no-repeat center center;
        background-size:contain !important;
    }
</style>