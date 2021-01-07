import nations from "./nations.js";
let profileApp = new Vue({
  el: "#profile-app",
  data: () => ({
    gender: [
      {
        value: 0,
        label: "男",
      },
      {
        value: 1,
        label: "女",
      },
    ],
    identity: [
      {
        value: 0,
        label: "国有企业人员",
      },
      {
        value: 1,
        label: "事业单位人员",
      },
      {
        value: 2,
        label: "非公单位人员",
      },
      {
        value: 3,
        label: "机关、事业单位非在编人员",
      },
    ],
    nations: nations,
    studyAbroad: [
      {
        value: true,
        label: "是",
      },
      {
        value: false,
        label: "否",
      },
    ],
    introVisiable: false,
    infoList: [
      {
        icon: "el-icon-user",
        iconBg: "icon-bg-green",
        title: "个人简历",
        subTitle: "突出个人闪光点，留下深刻印象。",
        link: "#profile-resume",
        linkLabel: "查看简历",
      },
      {
        icon: "el-icon-reading",
        iconBg: "icon-bg-purple",
        title: "我的学历",
        subTitle: "优秀学历为您打开职场大门。",
        link: "#profile-degree",
        linkLabel: "查看学历",
      },
      {
        icon: "el-icon-suitcase",
        iconBg: "icon-bg-red",
        title: "工作经历",
        subTitle: "丰富工作经历。展现职业形象",
        link: "#profile-experience",
        linkLabel: "查看经历",
      },
      {
        icon: "el-icon-collection-tag",
        iconBg: "icon-bg-yellow",
        title: "职称证书",
        subTitle: "列出职称证书，提升4倍人气",
        link: "#profile-certificate",
        linkLabel: "查看职称",
      },
    ],
    degressProjects: [
      {
        value: "无学历",
        label: "无学历",
      },
      {
        value: "第一学历",
        label: "第一学历",
      },
      {
        value: "第二学历",
        label: "第二学历",
      },
      {
        value: "第三学历",
        label: "第三学历",
      },
      {
        value: "第四学历",
        label: "第四学历",
      },
    ],
    degreeTypes: [
      {
        value: "博士研究生",
        label: "博士研究生",
      },
      {
        value: "硕士研究生",
        label: "硕士研究生",
      },
      {
        value: "本科",
        label: "本科",
      },
      {
        value: "党校本科",
        label: "党校本科",
      },
      {
        value: "党校大专",
        label: "党校大专",
      },
      {
        value: "大专",
        label: "大专",
      },
      {
        value: "中专",
        label: "中专",
      },
    ],
    degreeProperties: [
      {
        value: "全日制普通高校毕业生",
        label: "全日制普通高校毕业生",
      },
      {
        value: "党校",
        label: "党校",
      },
      {
        value: "国外已认证",
        label: "国外已认证",
      },
      {
        value: "国外未认证",
        label: "国外未认证",
      },
      {
        value: "成人继续教育学历",
        label: "成人继续教育学历",
      },
    ],
    awards: [
      {
        value: "博士",
        label: "博士",
      },
      {
        value: "硕士",
        label: "硕士",
      },
      {
        value: "学士",
        label: "学士",
      },
      {
        value: "双学士",
        label: "双学士",
      },
      {
        value: "无学位",
        label: "无学位",
      },
    ],
    academics: [
      {
        value: "5",
        label: "5",
      },
      {
        value: "4",
        label: "4",
      },
      {
        value: "3",
        label: "3",
      },
      {
        value: "2",
        label: "2",
      },
      {
        value: "1",
        label: "1",
      },
      {
        value: "1.5",
        label: "1.5",
      },
      {
        value: "2.5",
        label: "2.5",
      },
      {
        value: "3.5",
        label: "3.5",
      },
      {
        value: "7",
        label: "7",
      },
    ],
    degreeProjects: [
      {
        value: "无学历",
        label: "无学历",
      },
      {
        value: "第一学历",
        label: "第一学历",
      },
      {
        value: "第二学历",
        label: "第二学历",
      },
      {
        value: "第三学历",
        label: "第三学历",
      },
      {
        value: "最高学历",
        label: "最高学历",
      },
    ],
    resume: "这人很懒，什么也没有写。",
    resumeDialogVisiable: false,
    degrees: [
      {
        school: "GUET",
        major: "计算机专业",
        graduation: "2020-12-12",
        degreeType: "中专",
        degreeProperty: "全日制普通高校毕业生",
        award: "学士",
        academic: "3",
        degreeProject: "最高学历",
        certificateId: "123456789",
      },
    ],
    newDegreeForm: {
      school: "",
      major: "",
      graduation: "",
      degreeType: "",
      degreeProperty: "",
      award: "",
      academic: "",
      degreeProject: "",
      certificateId: "",
    },
    degreeDialogVisiable: false,
    experiences: [
      {
        duty: "保洁人员",
        unit: "清洁部门",
        joinJobTime: "2020-12-12",
        leaveJobTime: "2020-12-13",
        address: "广西南宁市青秀区",
        description: "负责清理马桶",
      },
    ],
    newExperienceForm: {
      duty: "",
      unit: "",
      joinJobTime: "",
      leaveJobTime: "",
      address: "",
      description: "",
    },
    experienceDialogVisiable: false,
  }),
  methods: {
    changeIntroVisiable() {
      this.introVisiable = !this.introVisiable;
    },
    changeResumeDialogVisiable() {
      this.resumeDialogVisiable = !this.resumeDialogVisiable;
    },
    changeDegreeDialogVisiable() {
      this.degreeDialogVisiable = !this.degreeDialogVisiable;
      if (this.$refs.degreeForm) {
        this.$refs.degreeForm.resetFields();
      }
    },
    submitDegreeDialog() {
      this.newDegreeForm.graduation = this.formatDate(
        this.newDegreeForm.graduation
      );
      let obj = JSON.parse(JSON.stringify(this.newDegreeForm));
      this.degrees.push(obj);
      this.changeDegreeDialogVisiable();
    },
    changeExperienceDialogVisiable() {
      this.experienceDialogVisiable = !this.experienceDialogVisiable;
      if (this.$refs.experienceForm) {
        this.$refs.experienceForm.resetFields();
      }
    },
    submitExperienceDialog() {
      this.newExperienceForm.joinJobTime = this.formatDate(
        this.newExperienceForm.joinJobTime
      );
      this.newExperienceForm.leaveJobTime = this.formatDate(
        this.newExperienceForm.leaveJobTime
      );
      let obj = JSON.parse(JSON.stringify(this.newExperienceForm));
      this.experiences.push(obj);
      this.changeExperienceDialogVisiable();
    },
    formatDate(datetime) {
      let year = datetime.getFullYear();
      let month = datetime.getMonth() + 1;
      let date = datetime.getDate();
      let result = `${year}-${month}-${date}`;
      return result;
    },
  },
});
