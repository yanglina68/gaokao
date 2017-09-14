<template>
    <div class="daxue">
		<div class="main">
			<div class="chapters"></div>
			<div class="logos"></div>
			<div class="titles">{{res.name}}</div>
			<div class="infos">
				<p><b>主修课程:</b>{{res.majors}}</p>
				<p><b>课程特色:</b>{{res.character}}</p>
			</div>
			<div class="btn_intr"></div>
			<div class="btn_share"></div>
		</div>
	</div>
</template>
<script>
    export default{
        data:function(){
            return {
                res:''
            }
        },
        created:function(){
            this.$http.get('../../src/service/school_list.json').then((res)=>{
                this.res=res.data;
                function random(min=1,max=11){
                let num=Math.floor(Math.random()*(max-min)+min)
                return num;
            }
            let temp=random()<10?'0'+random():random();
            this.res=res.data['school'+temp];
            })
        },
        mounted:function(){

        }
        
    }
</script>
<style>
@charset "UTF-8";
html, body {
  height: 100%;
  width: 100%;
  min-width: 320px;
  font-family: "微软雅黑"; 
  }

* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box; 
  }

body {
  background: url(../../imgs/bg.jpg) no-repeat;
  background-size: cover; 
}
.daxue {
  width: 100%;
  height: 100%;
  padding: 41px 10px 0; 
}

@keyframes shake {
  0% {
    transform: rotateZ(0deg); 
    }
  10% {
    transform: rotateZ(5deg); 
    }
  20% {
    transform: rotateZ(0deg); 
    }
  40% {
    transform: rotateZ(-2deg); 
    }
  60% {
    transform: rotateZ(2deg);
    }
  80% {
    transform: rotateZ(-2deg); 
    }
  100% {
    transform: rotateZ(0deg);
    } 
}
.main {
  width: 100%;
  height: 100%;
  background: url(../../imgs/bg-matriculate.png) no-repeat;
  background-size: 100%;
  position: relative;
  animation: shake 0.4s linear 0.6s; 
}

@keyframes scale_m {
  0% {
    transform: scale(3, 3);
    opacity: 0; 
    }
  100% {
    transform: scale(1, 1);
    opacity: 1; 
    } 
}
.chapters {
  width: 129px;
  height: 129px;
  position: absolute;
  top: 1px;
  right: -12px;
  background: url(../../imgs/seal.png) no-repeat;
  background-size: 100% 100%;
  animation: scale_m 0.3s ease 0.4s; 
  }

.logos {
  width: 48px;
  height: 48px;
  z-index: 1000;
  position: absolute;
  background: url(../../imgs/logo-huogeaoci.png) no-repeat;
  background-size: 100% 100%;
  top: 60px;
  left: 127px; 
  }

.titles {
  width: 100%;
  position: absolute;
  top: 125px;
  left: 0;
  text-align: center;
  font-size: 15px;
  color: #353535; 
}
.infos {
  width: 100%;
  position: absolute;
  top: 148px;
  left: 0;
  padding: 0 25px;
  font-size: 10px; 
}
.infos p {
    margin-bottom: 5px;
    line-height: 19px; 
}

.btn_intr, .btn_share {
  width: 119px;
  height: 55px;
  position: absolute;
  top: 225px; 
}

.btn_intr {
  background: url(../../imgs/btn-intr.png) no-repeat;
  background-size: 100% 100%;
  left: 11px; 
}

.btn_share {
  background: url(../../imgs/btn-share.png) no-repeat;
  background-size: 100% 100%;
  right: 11px; 
}
</style>