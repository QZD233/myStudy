axios.defaults.baseURL = 'http://www.chai233.cn:8082';
// 实例化vue
//学历情况
var main23 = new Vue({
el: "#main23",
data: {
    graduationtime: '',
    graduationschool: '',
    educationproject: '',
    major: '',
    education: '',
    degree: '',
    Iengthofschooling: '',
    educationid: '',
    educationdegreecredential: '',   
},
methods: {
    educationBackground(){       
        var PersonalUserid = localStorage.getItem('PersonalUserid');//取出数据
        var PersonalreviewID = localStorage.getItem('PersonalreviewID');//取出数据
        //console.log(PersonalUserid);
        //console.log( PersonalreviewID);
        axios.get('/PersonalReviewselect/personal_education?PersonalUserid='+PersonalUserid+'&PersonalreviewID='+PersonalreviewID).then(response => {
            // 保存内容
            //console.log(response)
            this.graduationtime = response.data.graduationtime;
            this.graduationschool = response.data.graduationschool;
            this.educationproject = response.data.educationproject;
            this.major = response.data.major;
            this.education = response.data.education;
            this.degree = response.data.degree;
            this.Iengthofschooling = response.data.Iengthofschooling;
            this.educationid = response.data.educationid;
            this.educationdegreecredential = response.data.educationdegreecredential;
            })           
        }
    },
    mounted:function () {   //自动触发写入的函数
        this.educationBackground();
        }
})

//主要经历
var main33 = new Vue({
    el: "#main33",
    data: {
        //主要经历
        starttime: '',
        whereschoolwork: '',
        endtime: '',
        post: '',
        workunit: '',
        certifyman: '',
        helpcertify: '',
    },
    methods: {
        mainExperience(){           
            var PersonalUserid = localStorage.getItem('PersonalUserid');//取出数据
            var PersonalreviewID = localStorage.getItem('PersonalreviewID');//取出数据
            axios.get('/PersonalReviewselect/personal_major_experience?PersonalUserid='+PersonalUserid+'&PersonalreviewID='+PersonalreviewID).then(response =>{
                //console.log(response);
                this.starttime = response.data.starttime;
                this.whereschoolwork = response.data.whereschoolwork;
                this.endtime = response.data.endtime;
                this.post = response.data.post;
                this.workunit = response.data.workunit;
                this.certifyman = response.data.certifyman;
                this.helpcertify = response.data.helpcertify;
            })
        }
    },
    mounted:function () {   //自动触发写入的函数
        this.mainExperience();
        }
})

//人才引进相关材料
var main43 = new Vue({
    el: "#main43",
    data: {
        materialsname: '',
        materialsadjunct: '',
    },
    methods: {
        talentIntroduction(){       
            var PersonalUserid = localStorage.getItem('PersonalUserid');//取出数据
            var PersonalreviewID = localStorage.getItem('PersonalreviewID');//取出数据
            axios.get('/PersonalReviewselect/personal_introduceman?PersonalUserid='+PersonalUserid+'&PersonalreviewID='+PersonalreviewID).then(response =>{
                //console.log(response);
                this.materialsname = response.data.materialsname;
                this.materialsadjunct = response.data.materialsadjunct;
            })
        }       
    },
    mounted:function(){
        this.talentIntroduction();
    }
})

//论文、著作
var main53 = new Vue({
    el: "#main53",
    data: {
        publishtime: '',
        paperclasses: '',
        role: '',
        ifmagnumopus: '',
        insertperiodical: '',
        authorityindexes: '',
        yearperiodical: '',
        reward: '',
        papername: '',
        ifrecommend: '',
        paperlevel: '',
        papercover: '',
        papercatalog: '',
        papercontent: '',
    },
    methods: {
        paperWorks(){        
            var PersonalUserid = localStorage.getItem('PersonalUserid');//取出数据
            var PersonalreviewID = localStorage.getItem('PersonalreviewID');//取出数据
            axios.get('/PersonalReviewselect/personal_paper_patents?PersonalUserid='+PersonalUserid+'&PersonalreviewID='+PersonalreviewID).then(response =>{
                //console.log(response);
                this.publishtime = response.data.publishtime;
                this.paperclasses = response.data.paperclasses;
                this.role = response.data.role;
                this.ifmagnumopus = response.data.ifmagnumopus;
                this.insertperiodical = response.data.insertperiodical;
                this.authorityindexes = response.data.authorityindexes;
                this.yearperiodical = response.data.yearperiodical;
                this.reward = response.data.reward;
                this.papername = response.data.papername;
                this.ifrecommend = response.data.ifrecommend;
                this.paperlevel = response.data.paperlevel;
                this.papercover = response.data.papercover;
                this.papercatalog = response.data.papercatalog;
                this.papercontent = response.data.papercontent;
    
            })
        }
    },
    mounted: function(){
        this.paperWorks();
    }
})

//业绩成果
var main63 = new Vue({
    el: "#main63",
    data: {
        performancename: '',
        starttime: '',
        stoptime: '',
        projectlevel: '',
        projectcontent: '',
        personaleffect: '',
        achievementeffect: '',
        projectscan: '',
        personalprojectscan: '',
        projectawardsscan: '',
    },
    methods: {
        achievements(){       
            var PersonalUserid = localStorage.getItem('PersonalUserid');//取出数据
            var PersonalreviewID = localStorage.getItem('PersonalreviewID');//取出数据
            axios.get('/PersonalReviewselect/personal_performance_achievement?PersonalUserid='+PersonalUserid+'&PersonalreviewID='+PersonalreviewID).then(response =>{
                //console.log(response);
                this.performancename = response.data.performancename;
                this.starttime = response.data.starttime;
                this.stoptime = response.data.stoptime;
                this.projectlevel = response.data.projectlevel;
                this.projectcontent = response.data.projectcontent;
                this.personaleffect = response.data.personaleffect;
                this.achievementeffect = response.data.achievementeffect;
                this.projectscan = response.data.projectscan;
                this.personalprojectscan = response.data.personalprojectscan;
                this.projectawardsscan = response.data.projectawardsscan;
            })
        }
    },        
    mounted: function(){
        this.achievements();
    }
})

//业绩奖项
var main73 = new Vue({
    el: "#main73",
    data: {
        projectname: '',
        awardslevel: '',
        awardtime: '',
        awardorganization: '',
        content: '',
        assistcertify: '',    
    },
    methods: {
        performanceAwards(){      
            var PersonalUserid = localStorage.getItem('PersonalUserid');//取出数据
            var PersonalreviewID = localStorage.getItem('PersonalreviewID');//取出数据
            axios.get('/PersonalReviewselect/personal_performance_awards?PersonalUserid='+PersonalUserid+'&PersonalreviewID='+PersonalreviewID).then(response =>{
                //console.log(response);
                this.projectname = response.data.projectname;
                this.awardslevel = response.data.awardslevel;
                this.awardtime = response.data.awardtime;
                this.awardorganization = response.data.awardorganization;
                this.content = response.data.content;
                this.assistcertify = response.data.assistcertify;
            })
        }        
    },
    mounted: function(){
        this.performanceAwards();
    }
})

//业绩专利
var main83 = new Vue({
    el: "#main83",
    data: {
        patentsname: '',
        patentstype: '',
        gettime: '',
        patentsintroduce: '',
        assistcertify: '',       
    },
    methods: {
        performancePatent(){
            var PersonalUserid = localStorage.getItem('PersonalUserid');//取出数据
            var PersonalreviewID = localStorage.getItem('PersonalreviewID');//取出数据
            axios.get('/PersonalReviewselect/personal_performance_patents?PersonalUserid='+PersonalUserid+'&PersonalreviewID='+PersonalreviewID).then(response =>{
                //console.log(response);
                this.patentsname = response.data.patentsname;
                this.patentstype = response.data.patentstype;
                this.gettime = response.data.gettime;
                this.patentsintroduce = response.data.patentsintroduce;
                this.assistcertify = response.data.assistcertify;  
            })                               
        }

    },
    mounted: function(){
        this.performancePatent();
    }
})

//从业或职（执）业资格
var main93 = new Vue({
    el: "#main93",
    data: {
        qualificationname: '',
        gettime: '',
        ratifyoffice: '',
        majorname: '',
        credentialnumber: '',
        assistcertify: '',
        
    },
    methods: {
        occupationalRequirements(){
            var PersonalUserid = localStorage.getItem('PersonalUserid');//取出数据
            var PersonalreviewID = localStorage.getItem('PersonalreviewID');//取出数据
            axios.get('/PersonalReviewselect/personal_occupational_qualification?PersonalUserid='+PersonalUserid+'&PersonalreviewID='+PersonalreviewID).then(response =>{
                //console.log(response);
                this.qualificationname = response.data.qualificationname;
                this.gettime = response.data.gettime;
                this.ratifyoffice = response.data.ratifyoffice;
                this.majorname = response.data.majorname;
                this.credentialnumber = response.data.credentialnumber;
                this.assistcertify = response.data.assistcertify;
            })            
        }
    },
    mounted: function(){
        this.occupationalRequirements();
    }
})

//国（镜）外工作或研究材料
var  main103 = new Vue({
    el: "#main103",
    data: {
        starttime: '',
        stoptime: '',
        workunit: '',
        job: '',
        jobcontent: '',
        assistcertify: '',
        
    },
    methods: {
        researchMaterials(){
            var PersonalUserid = localStorage.getItem('PersonalUserid');//取出数据
            var PersonalreviewID = localStorage.getItem('PersonalreviewID');//取出数据
            axios.get('/PersonalReviewselect/personal_research_materials?PersonalUserid='+PersonalUserid+'&PersonalreviewID='+PersonalreviewID).then(response =>{
                //console.log(response);
                this.starttime = response.data.starttime;
                this.stoptime = response.data.stoptime;
                this.workunit = response.data.workunit;
                this.job = response.data.job;
                this.jobcontent = response.data.jobcontent;
                this.assistcertify = response.data.assistcertify;                                
            })     
        }
    },
    mounted: function(){
        this.researchMaterials();
    }
})

//其他材料
var main123 = new Vue({
    el: "#main123",
    data: {
        title: '',
        projectscan: '',
        
    },
    methods: {
        otherMaterials(){
            var PersonalUserid = localStorage.getItem('PersonalUserid');//取出数据
            var PersonalreviewID = localStorage.getItem('PersonalreviewID');//取出数据
            axios.get('/PersonalReviewselect/personal_others?PersonalUserid='+PersonalUserid+'&PersonalreviewID='+PersonalreviewID).then(response =>{
                //console.log(response);
                this.title = response.data.title;
                this.projectscan = response.data.projectscan;                                                                
            })            
        }
    },
    mounted: function(){
        this.otherMaterials();
    }
})
        
        
        