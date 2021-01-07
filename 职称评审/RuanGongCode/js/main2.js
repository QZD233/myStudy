var Main = {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        
        options2: [{
          value: '选项1',
          label: '硕士研究生'
        }, {
          value: '选项2',
          label: '本科'
        }, {
          value: '选项3',
          label: '专科'
        }, {
          value: '选项4',
          label: '高中'
        }, {
          value: '选项5',
          label: '其他'
        }],
       
        value1: '',
        value2: '',
        options3: [{
          value: '选项1',
          label: '第一学历'
        }, {
          value: '选项2',
          label: '第二学历'
        }],
         value3: '',
        input1: '',
        input2: '',
        input3: '',
       
      };
    }
  };
var Ctor = Vue.extend(Main)
new Ctor().$mount('#main2_app')

