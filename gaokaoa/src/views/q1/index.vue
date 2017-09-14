<template>
    <div class="q1">
        <div class="header">
            <p class="title">化学题 1题/4题</p>
            <p class="question">{{question_name}}</p>
            <div class="answers">
                <ul>
                    <li class="answer-item" @click="change_bg(0)" :class="{'selected_anwser':bg_list[0]}"><span class="a"></span><span class="answer-alpha">{{an1}}</span></li>
                    <li class="answer-item" @click="change_bg(1)" :class="{'selected_anwser':bg_list[1]}"><span class="b"></span><span class="answer-alpha">{{an2}}</span></li>
                    <li class="answer-item" @click="change_bg(2)" :class="{'selected_anwser':bg_list[2]}"><span class="c"></span><span class="answer-alpha">{{an3}}</span></li>
                </ul>
            </div>
        </div>
        <div class="split-line"></div>
    </div>
</template>
<script>
    export default{
        created:function(){
            console.log(this.$route)
            if(this.$route.query.type==1){
                this.$store.commit('set_selected_question','science')
                console.log(this.$store.state);
            };
            if(this.$route.query.type==0){
                this.$store.commit('set_selected_question','liberal')
            };
              let step=this.$route.params.step*1;
              this.question_name=this.$store.state.selected_question[0].title
               let {title,answers}=this.$store.state.selected_question[step-1];
               this.question_name=title;
               this.an1=answers[0];
               this.an2=answers[1];
               this.an3=answers[2];
        },
        beforeRouteEnter:(to,from,next)=>{
            next();
        },
        beforeRouteUpdate:function(to,from,next){
            next();
        },
        watch:{
            '$route':function(n,o){
                let step=this.$route.params.step*1;
                let {title,answers}=this.$store.state.selected_question[step-1];
                this.question_name=title;
                this.an1=answers[0];
                this.an2=answers[1];
                this.an3=answers[2];
                console.log(this.$store.state.selected_question)
            }
        },
        data:function(){
            return {
                bg_list:[false,false,!1],
                question_name:'',
                an1:'gvhjnkm',
                an2:'nmbnm',
                an3:'fghjk',
                type:0,
                data:null

            }
        },
        methods:{
            change_bg(index){
                this.bg_list=[!1,!1,!1];
                this.bg_list[index]=!0;
            
                setTimeout(()=>{
                    if(this.$route.params.step*1+1>4){
                        this.$router.push('/result')
                    }else{
                        this.$router.push('/question/'+(this.$route.params.step*1+1))
                    }
                },200)
            }
            
        }
    }
</script>
<style>
    .header{
        width:90%;
        margin:20px auto 0;
    }
    .title{
        height:45px;
        line-height:25px;
        text-align: center;
        background:url('../../imgs/bg-qustion-top.png') no-repeat center top;       
        background-size:100% auto;
    }
    .question{
        padding:5px 30px;
        line-height:20px;
        text-indent: 20px;
        text-align: left;
        background:url('../../imgs/bg-question-center.png') no-repeat center top;
        background-size:100% 100%;
    }
    .answers{
        padding:10px 15px;
        height:309px;
        background:url('../../imgs/bg-question-bottom.png') no-repeat center top;
        background-size:100% auto;
    }   
    .answer-item{
        height:51px;
        width:100%;
        background:url('../../imgs/btn-bg-select.png') no-repeat center top;
        background-size:304px 102px;
        line-height:51px;
        color:#fff;   
    }
    .answer-alpha{
    }
    .a,.b,.c{
        float: left;
        width:48px;
        height:48px;
    }
    .a{
        background:url('../../imgs/a.png') no-repeat center center;
        background-size:29px 25px; 
    }
    .b{
        background:url('../../imgs/b.png') no-repeat center center;
        background-size:29px 25px;
    }
    .c{
        background:url('../../imgs/c.png') no-repeat center center;
        background-size:29px 25px;
    }
    .selected_anwser{
        background-position:0 -51px;
    }
</style>