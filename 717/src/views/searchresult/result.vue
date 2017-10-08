<template>
    <div class="results">
         <header class="head">
             <div class="tops">
                 <div class="left_001" @click="back"><</div>
                <div class="right_001">
                    <i class="icon iconfont icon-search"></i> 
                    <input type="text" value="大米">
                </div>
             </div>
             <ul>
                 <li>综合</li>
                 <li>销售</li>
                 <li>价格</li>
             </ul>
         </header>
        <section class="cons">
            <div class="list_001">
                <dl>
                    <dt><img src="../../assets/list1.jpg" alt=""></dt>
                    <dd class="dds">军额度及回复您比较温暖是单纯九年级调查</dd>
                    <dd class="price"><span>¥ 999.00</span><span><i class="icon iconfont icon-cart"></i></span></dd>
                </dl>
                <dl>
                    <dt><img src="../../assets/list1.jpg" alt=""></dt>
                    <dd class="dds">军额度及回复您比较温暖是单纯九年级调查</dd>
                    <dd class="price"><span>¥ 999.00</span><span><i class="icon iconfont icon-cart"></i></span></dd>
                </dl>
                <dl>
                    <dt><img src="../../assets/list1.jpg" alt=""></dt>
                    <dd class="dds">军额度及回复您比较温暖是单纯九年级调查</dd>
                    <dd class="price"><span>¥ 999.00</span><span><i class="icon iconfont icon-cart"></i></span></dd>
                </dl>
                <dl>
                    <dt><img src="../../assets/list1.jpg" alt=""></dt>
                    <dd class="dds">军额度及回复您比较温暖是单纯九年级调查</dd>
                    <dd class="price"><span>¥ 999.00</span><span><i class="icon iconfont icon-cart"></i></span></dd>
                </dl>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data(){
      return {

      }
    },
    methods:{
      back(){
        history.go(-1)
      }
    }
}
</script>
<style>
    .results{
        width:100%;
        height:100%;
    
    }
    .head{
        width:100%;
        height:1.4rem;
        position: absolute;
        top:0;
        bottom:0; 
    }
    .tops{
        width:100%;
        height:.8rem;
        background:#fff;
        display: flex;
        border:1px solid #ccc; 
    }
    .head .left_001{
        flex:.1;
        text-align: center;
        line-height:.8rem;
        font-size: .3rem;
    }
    .head .right_001{
        flex:.9;
        padding:.15rem .2rem;
        box-sizing: border-box;
        position: relative;
    }
    .head .right_001 i{
        position: absolute;
        left:.3rem;
    }
    .head .right_001 input{
        width:100%;
        height:.5rem;
        background:#F5F5F5;
        border:none;
        border-radius: 5px;
        padding-left:.5rem;
        box-sizing: border-box;
    }
    .cons{
        width:100%;
        background:#fff;
        padding-top:1.4rem;
    }
    .head ul{
        width:100%;        
        height:.6rem;
        display: flex;
        background:#fff;
        padding:.1rem .2rem;
    }
    .head ul li{
        flex:1;
        color:#B4B4B4;
    }
    .head ul li:nth-child(2){
        text-align: center;
    }
    .head ul li:nth-child(3){
        text-align: right;
        
    }
    .list_001{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list_001 dl{
        width:3.14rem;
        background: #fff;
        padding-bottom:0.2rem;
        margin-bottom:0.14rem;
    }
    .list_001 dl img{
        display: block;
        width:100%;
    }
    .list_001 dl  dt{
        width:100%;
        margin-bottom:0.1rem;
    }
    .list_001 dl  dd{
        width:100%;  
        font-size:0.28rem;
        line-height: 0.38rem;
        padding:0 0.14rem;
    }
    .dds{
        height:.76rem;
        overflow: hidden;
    }
    .price{
        display: flex;
        align-items: center;
        font-size:0.3rem;
        justify-content: space-between; 
    }
    .price  span{
        color:#fc4141;
    }
    .list p{
        width:0.46rem;
    }
</style>