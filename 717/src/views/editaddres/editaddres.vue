<template>
  <div class="addContacts">
      <masker-layer :isActive="show"></masker-layer>
      <tips :active='tips_active'>{{tip_info}}</tips>
    <div class="addContacts_tit">
      <span  @click="back"><</span>
      收货人
      <span></span>
    </div>
    <div class="addContacts_info">
      <div class="input">
        <input type="text" v-model="name" placeholder="收货人姓名">
      </div>
      <div class="input">
        <input type="text" v-model="phone" placeholder="手机号">
      </div>

      <div class="input flex_box">
        <div class="dropDown half">
          <span>﹀</span>
          <select v-model="province" id="province">
            <option value="1">请选择省</option>
            <option v-for="item in list" :value="item.name" >{{item.name}}</option>
            
          </select>
        </div>
        <div class="dropDown half">
          <span>﹀</span>
          <select v-model="city" id="province">
            <option value="1">请选择市</option>
            <option v-for="item in city_list" :value="item.name">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="input">
        <div class="dropDown">
          <span>﹀</span>
          <select v-model="area" id="province">
            <option value="1">请选择区</option>
            <option v-for="item in area_list" :value="item">{{item}}</option>
          </select>
        </div>
      </div>
      <div class="input">
        <input type="text" v-model="site" placeholder="详细地址">
      </div>
    </div>
    <div class="state">
      <div class="btns btn_bg" >✔</div> 设为默认地址
    </div>
    <div class="add_address">
      <button type="button" @click="save">保存</button>
    </div>
  </div>
</template>

<script>
import masker from '../../components/loading.vue'
import token from '../../utils/getcookie.js'
import tips from '../../components/tips.vue'
export default {
    name: 'addContacts',
    data () {
        return {
            name:'',
            phone:'',
            site:'',
            title:'',
            show:false,
            list:[],
            city_list:[],
            province:'',
            area_list:[],
            city:'',
            area:'',
            tips_active:false,
            tip_info:''
        }
    },
    components:{
        "masker-layer":masker,
        'tips':tips
    },
    created(){
        this.show=true;
        //城市数据
        // this.$http.post('/get_address_info').then((res)=>{
        //   //  console.log(res.data)
        //    this.list=res.data;
        //     this.show=false
        // })
        let get_address_info = new Promise((resolve,reject)=>{
            this.$http.post('/get_address_info').then((res)=>{
                
                resolve(res.data)
                
            })
        })
        let edit_address_info = new Promise((resolve,reject)=>{
            let id = this.$route.params.id
            this.$http.get('/edit_delivery_info',{id:id,token:token()}).then((res)=>{
                resolve(res.data)
                
            })
        })

        Promise.all([get_address_info,edit_address_info]).then((res)=>{
            this.list = res[0];
            console.log(res);
            this.name = res[1].name;
            this.phone = res[1].phone;
            this.province = res[1].province;
            this.city = res[1].city;
            this.area = res[1].area;
            this.site = res[1].street;
            this.show=false
        })
    },
    watch:{
        'province':function(params){
            let lists=this.list;
            if(lists.length>0){
                lists.forEach((item)=>{
                    if(item.name==params){
                        this.city_list=item.city;
                    }
                })
            }
        },
        'city':function(params){
            let lists=this.city_list;
            if(lists.length>0){
                lists.forEach((item)=>{
                    if(item.name==params){
                        this.area_list=item.area;
                    }
                })
            }
        }
    },
    methods:{
        back(){
            history.go(-1)
        },
        tips(info){
            this.tips_active = true;
            setTimeout(()=> {
                    this.tips_active = false
                }, 1500);
            this.tip_info=info;
        },
        save(){
            let reg_phone=/^1[34578]\d{9}$/;
            let str="";
            let that = this;
            if(!this.name){
                 this.$modal.show({
                     title:'提示信息',
                     info:'请输入姓名',
                     callback:function(){
                         that.$refs.name.focus()
                     }
                 })
                return;
            }
            if(!this.phone || !reg_phone.test(this.phone)){
                this.tips('请输入正确的手机号')
                return; 
            }
            if(!this.province){
                this.tips('请选择省份')
                return
            }
            if(!this.city){
                this.tips('请选择城市')
                return
            }
            if(!this.area){
                this.tips('请选择区域')
                return
            }
            if(!this.site){
                this.tips('请填写详细地址')
                return
            }
              this.$http.post('/add_new_address',{
                name:this.name,
                phone:this.phone,
                province:this.province,
                city:this.city,
                area:this.area,
                street:this.site,
                token:token()
            }).then((res)=>{
                // console.log(res)
            })
            this.$router.replace("/addresslist")
            
        
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select{
  border:none;
  outline: none;

}
.addContacts{
	width:100%;
	height:100%;
  display: flex;
  background: #f3f3f3;
  flex-direction: column;
}
.addContacts_tit{
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
.addContacts_tit span{
  font-family: "宋体";
  font-weight: bold;
  font-size:0.38rem;
  display: block;
  width:0.3rem;
}
.addContacts_info{
  width:100%;
  padding:0 0.3rem;
}
.input{
  width:100%;
  margin-top: 0.3rem;
  height:0.9rem;
}
.input input{
  background: #fff;
  width:100%;
  height: 100%;
  display: block;
  border-radius: 0.08rem;
  padding:0 0.2rem;
  border: none;
  outline: none;
}
.input input::-webkit-input-placeholder{
  color:#999999;
  font-size:0.32rem;
}
.flex_box{
  display: flex;
  justify-content: space-between;
}
.dropDown{
  height:100%;
  position: relative;
  font-size:0.32rem;
  background: #fff;
  color:#333;
  border-radius: 0.08rem;
  overflow: hidden;
}
.dropDown select{
  padding:0 0.2rem;
  width:100%;
  height:100%;
  appearance:none;
  -moz-appearance:none;
  -webkit-appearance:none;
}
.dropDown span{
  position: absolute;
  right:0.2rem;
  top:0;
  line-height: 1rem;
  font-weight: bold;
  font-size:0.3rem;
  font-family: "宋体";
}
.flex_box .half{
  width:2.7rem;
  height:100%;
}
.state{
  width:100%;
  display: flex;
  height:1rem;
  padding:0 0.3rem;
  align-items: center;
  font-size:.032rem;
  color:#666;
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
</style>
