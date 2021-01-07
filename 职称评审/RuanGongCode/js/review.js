import JB_options from "./JB_options.js";
import Test from "../review/Test.vue";
let reviewApp = new Vue({
  el: "#review-app",
  components: {
    [Test.name]: Test,
  },
  data: () => ({
    PingShenJiLu: [
      {
        CanDownload: 0,
        ID: "d073ce08-c089-49ed-a0f4-691886a84e10",
        F_ShenBaoNianDu: 2020,
        F_ZiGeXiLie: "艺术系列",
        F_ZiGeJiBie: "副高级",
        F_ZiGeMingCheng: "二级作曲",
        F_CreateTime: "2020-11-15",
        F_UserName: "Jianghao",
        F_CompanyName: "广西科学院",
        F_ZhiGaiBanCode: "010415",
        F_ZhiGaiBanCode_GeRen: "010415",
        F_ZhiGaiBanName_GeRen: "桂林电子科技大学职称改革工作领导小组办公室",
        F_ZhiGaiBanName: "桂林电子科技大学职称改革工作领导小组办公室",
        F_ZhiGaiBanName_Prev: null,
        F_PinShenName:
          "桂林电子科技大学引进高层次急需紧缺人才直接评审高级职称委员会",
        F_PinShenLevel: "副高级",
        F_PinShenType: "ZhiPing",
        F_PinShenID: "28d13c8a-f57a-4261-a2e8-e3291c841cbc",
        F_NianDuCiShuJieShu: false,
        F_ShouJianRen: null,
        F_Province: null,
        F_City: null,
        F_Area: null,
        F_DiZhi: null,
        F_DianHua: null,
        F_YouBian: null,
        F_TJSJ1: null,
        F_TJSJ2: null,
        F_TJSJ3: null,
        OrgPhone: "0",
        IsEmsEnable: false,
        StateName: "待完善",
        FlowVisible: false,
        FlowStep: 1,
        ZhuGuanOrg: "无",
        ShowAudit: true,
        ShowRevoke: false,
        FlowCurrent: true,
        ZhiGaiBan: "",
        IsSendEMS: false,
        ChuShenTime: null,
        ShenBaoConfigInfo:
          "请在职改办当年度评审工作部署文要求时间内提交申报材料，联系电话：0",
        ShowCopy: true,
        IsShenBaoConfigEndTime: true,
      },
    ],
    ShenBaoVisible: false,
    PS_options: [],
    XL_options: [],
    JiBie: [
      { name: "ChuJi", desc: "初级" },
      { name: "ZhongJi", desc: "中级" },
      { name: "FuGaoJi", desc: "副高级" },
      { name: "ZhengGaoJi", desc: "正高级" },
    ],
    SelectJiBie: "",
    SelectPingShenHui: {},
    SelectXiLie: "",
    PingShenHui: {},
  }),
  watch: {
    SelectJiBie(newValue) {
      this.selectShenBaoLevel(newValue);
    },
    SelectXiLie(newValue) {
      this.PingShenHui;
      this.PS_options = this.SelectPingShenHui.PS_options.filter((item) => {
        console.log(item.label);
        console.log(newValue);
        console.log(item.label == newValue);
        return item.label == newValue;
      })[0].options;
    },
  },
  methods: {
    changeShenBaoVisible() {
      this.ShenBaoVisible = !this.ShenBaoVisible;
      if (this.$refs.PingShenHuiForm) {
        this.$refs.PingShenHuiForm.resetFields();
      }
    },
    selectShenBaoLevel(level) {
      this.SelectPingShenHui = JB_options[level.name];
      this.XL_options = this.SelectPingShenHui.XL_options;
    },
    submitPingShenHui() {
      this.changeShenBaoVisible();
    },
  },
});
