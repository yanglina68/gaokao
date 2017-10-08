<template>
  <div class="deliveryAddress">
    <tips :active="active">删除成功！</tips>
    <div class="deliveryAddress_tit">
      <span @click="back"><</span>
      收货地址
      <span></span>
    </div>
    <div class="deliveryAddress_main">
      <div class="list-address">
    
        <div class="main_list" v-for="x in add_list">
          <div class="list_user">{{x.name}} <b>{{x.phone}}</b></div>
          <p class="address_info">{{x.province+' '+x.city+' '+x.area+' '+x.street}}</p>
          <div class="list_btns">
            <div class="state">
              <div class="btns btn_bg" >✔</div> 默认地址
            </div>
            <div class="edit">
              <span @click="edit(x.id)"><i class="icon iconfont icon-form"></i><b >编辑</b></span>
              <span @click="delete_info(x.id)"><i class="icon iconfont icon-form"></i><b>删除</b></span>
            </div>
          </div>
        </div>
      </div>
      <div class="add_address" @click='add'>
        <button type="button"><span>+</span> 新增地址</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import token from '../../utils/getcookie.js'
import tips from '../../components/tips.vue'
// console.log(token())
export default {
  name: 'deliveryAddress',
  data () {
    return {
      add_list:[],
      active:false
    }
  },
  created(){
        
        this.$http.post('/get_address_list',{token:token()}).then(res=>{
            console.log(res.data)
            this.add_list = res.data;
        })
    },
    components:{
        tips:tips
    },
  methods:{
    add(){
        this.$router.push({
            name:'editaddres',
            params:{
                is_edit:'add'
            }
        })
    },
    edit(id){
        this.$router.push({
            name:'editaddres',
            params:{
                id:id
            }
        })
    },
      delete_info(id){
            this.$http.get('/delete_delivery_info',{id:id,token:token()}).then(res=>{
                
                let idx;
                if(res.data =='success'){

                    this.active = true;
                    setTimeout(()=> {
                        this.active = false
                    }, 1000);

                    this.add_list.forEach((item,index)=>{
                        if(item.id == id){
                            idx=index
                        }
                    })
                    this.add_list.splice(idx,1);
                    
                    
                }
            })
        },
    back(){
        history.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.deliveryAddress{
	width:100%;
	height:100%;
  display: flex;
  background: #f6f5f5;
  flex-direction: column;
}
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
.deliveryAddress_main{
  width:100%;
  flex-grow: 1;
  flex-shrink: 1;
  overflow-y:auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main_list{
  width:100%;
  padding-left:0.3rem;
  background: #fff;
  margin-bottom:0.2rem;
  flex-shrink: 0;
}
.list_user{
  height:0.98rem;
  width:100%;
  line-height: 0.98rem;
  font-size:0.32rem;
}
.address_info{
  width:100%;
  margin-bottom:0.2rem;
  line-height: 0.36rem;
  font-size:0.28rem;
  color:#666666;
}
.list_btns{
  width:100%;
  height:0.96rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#666666;
  font-size:0.3rem;
  border-top:solid 0.01rem #e5e5e5;
}
.list_btns .state{
  width:100%;
  display: flex;
}
.btns{
  width:0.45rem;
  height:0.45rem;
  font-size:0.3rem;
  line-height: 0.42rem;
  border:solid 0.02rem #cccccc;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  color:#fff;
  margin-right:0.12rem;
}
.btn_bg{
  background: #fc4141;
}
.edit{
  display: flex;
  height:100%;
  flex-shrink: 0;
}
.edit span{
  display: flex;
  margin-right:0.3rem;
  line-height: 0.98rem;
}
.edit span .iconfont{
  font-size:0.34rem;
  display: block;
  margin: 0 0.1rem;
}
.edit span b{
  display:block;
  flex-shrink: 0;
  white-space: normal;
  font-weight: normal;
}
.add_address{
  width:100%;
  height:1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.add_address button{
  width:4.6rem;
  height:1.02rem;
  border-radius: 0.51rem;
  background: #fc4141;
  font-size: 0.34rem;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 3px rgba(252,65,65,0.6);
}
.add_address button span{
  font-size:0.6rem;
  display: block;
  margin-right:0.14rem;
}
</style>
