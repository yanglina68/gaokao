<template>
    <div class="loginout">
        <div class="deliveryAddress_tit">
            <span @click="back"><</span>
            设置
            <span></span>
        </div>
        <button @click="loginout">退出登录</button>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        methods:{
            loginout:function () {
                let cookie_str = document.cookie;
                console.log(cookie_str)
                //dfghjkl;pgv_pvid=3758419816; 1505B-tocken=15805658192;adsadasd

                let arr =cookie_str.split(';');
                arr.forEach((item,index)=>{
                    if(item.indexOf('1505B')>-1){
                        arr.splice(index,1)
                    }
                })
                function setCookie(cname, cvalue, exdays) {  
                    var d = new Date();  
                    d.setTime(d.getTime() + (exdays*24*60*60*1000));  
                    var expires = "expires="+d.toUTCString();  
                    document.cookie = cname + "=" + cvalue + "; " + expires;  
                }  
                setCookie('1505B-tocken','',-1);
                this.$router.replace({
                    name:'mine'
                })
            },
            back(){
                history.go(-1)
            }
        }
    }
</script>
<style lang="" scoped>
.deliveryAddress_tit{
  width:100%;
  height:0.88rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 0.3rem;
  font-size:0.34rem;
  background: #fff;
  border-bottom:solid 0.01rem #ccc;
  flex-shrink: 0;
}
.deliveryAddress_tit span{
  font-family: "宋体";
  font-weight: bold;
  font-size:0.38rem;
  display: block;
  width:0.3rem;
}
button{
    padding:10px 70px;
    border:none;
    border-radius: 50px;
    background:#fc4141;
    color:#fff;
}  
.loginout{
    text-align:center;
    line-height: 200px;
}
</style>