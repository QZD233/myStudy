//引入总地址
axios.defaults.baseURL = 'http://www.chai233.cn:8082';

var main =new Vue({
    el: "#main",
    data: {
        item:{
            email: '',
            documentstype: '',
            documentsnumber: '',
            truename: '',
            password: '',
            passwordtrue: '',
            phonenumber: '',
            yanzhengCode: '',
        },            
    },
    methods: {
        SubBtn(){
　　           console.log(this.item);
            　 var data = this.item
               //console.log(data);
               this.$http.post(('/personAdd/personalAdd_Personaluser_add'),data,{emulateJSON:false}).then(response => {
    　　　　　　console.log(response.body);
    　　　　　　this.grouplist = response.body;
                alert("提交成功！")
        }, response => {
            console.log(response);
                alert("出问题啦！")
            })              
        }
    },
})