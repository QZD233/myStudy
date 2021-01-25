<template>
  <div>
    <div id="detail-app">
      <el-tabs tab-position="left" class="nav-tab">
        <el-tab-pane label="个人承诺"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>个人承诺</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div>
              <el-alert type="info" :closable="false">
                <template v-solt:title>
                  <p
                    style="
                        text-align: center;
                        font-size: 24px;
                        font-weight: 700;
                        color: rgb(217, 82, 78);
                      "
                  >
                    职称申报个人承诺书
                  </p>
                  <p
                    style="
                        margin-top: 16px;
                        font-size: 16px;
                        color: rgb(217, 82, 78);
                      "
                  >
                    <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
                    本人承诺对所递交的申报材料完整性和真实性负责。如因申报材料缺失不全造成的后果由本人自行承担；如申报过程中被发现申报材料弄虚作假，同意按照自治区有关文件及评审条件规定，自申报当年起，5年内不得申报。累计造假两次的，终身不得申报。
                  </p>
                  <p
                    style="
                        text-align: right;
                        font-size: 14px;
                        color: rgb(217, 82, 78);
                      "
                  >
                    本人已承诺：{{ userInfo.PersonalUsername }}
                  </p>
                  <p
                    style="
                        margin-top: 4px;
                        text-align: right;
                        font-size: 14px;
                        color: rgb(217, 82, 78);
                      "
                  >
                    承诺日期：{{ totalInfo.createdate }}
                  </p>
                </template>
              </el-alert>
            </div>
          </el-card></el-tab-pane
        >
        <el-tab-pane label="1.基本信息"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>基本信息</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div class="total-info">
              <el-form>
                <el-form-item label="评审年度"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.reviewyear
                  }}</el-form-item
                >
                <el-form-item label="参加评审会"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.reviewmeeting
                  }}</el-form-item
                >
                <el-form-item label="姓名"
                  >&nbsp;&nbsp;{{ personalBasicMessage.name }}</el-form-item
                >
                <el-form-item label="填表时间"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.fillingtime
                  }}</el-form-item
                >
                <el-form-item label="性别"
                  >&nbsp;&nbsp;{{ personalBasicMessage.sex }}</el-form-item
                >
                <el-form-item label="个人身份性质"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.personalidentitynature
                  }}</el-form-item
                >
                <el-form-item label="证件号码"
                  >&nbsp;&nbsp;{{ personalBasicMessage.idnumber }}</el-form-item
                >
                <el-form-item label="出生年月"
                  >&nbsp;&nbsp;{{ personalBasicMessage.birthday }}</el-form-item
                >
                <el-form-item label="民族"
                  >&nbsp;&nbsp;{{ personalBasicMessage.nation }}</el-form-item
                >
                <el-form-item label="参加工作时间"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.startworktime
                  }}</el-form-item
                >
                <el-form-item label="籍贯"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.nativeplace
                  }}</el-form-item
                >
                <el-form-item label="专业技术工作年限"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.workingyears
                  }}</el-form-item
                >
                <el-form-item label="联系电话"
                  >&nbsp;&nbsp;{{ personalBasicMessage.phone }}</el-form-item
                >
                <el-form-item label="电子邮箱"
                  >&nbsp;&nbsp;{{ personalBasicMessage.email }}</el-form-item
                >
                <el-form-item label="拟评专业系列"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.wantprofessionseries
                  }}</el-form-item
                >
                <el-form-item label="拟评专业技术资格"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.wantmajorstatus
                  }}</el-form-item
                >
                <el-form-item label="拟评专业"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.wantmajor
                  }}</el-form-item
                >
                <el-form-item label="行政职务"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.executivefunction
                  }}</el-form-item
                >
                <el-form-item label="政治面貌"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.politicsstatus
                  }}</el-form-item
                >
                <el-form-item label="行政职务任命时间"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.executivefunctiontime
                  }}</el-form-item
                >
                <el-form-item label="行政职务说明"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.executivefunctionexplatin
                  }}</el-form-item
                >
                <el-form-item label="档案所在地机构名称"
                  >&nbsp;&nbsp;{{
                    personalBasicMessage.fileorganizationname
                  }}</el-form-item
                >
                <el-form-item label="联系地址" style="width: 100%"
                  >&nbsp;&nbsp;{{ personalBasicMessage.address }}</el-form-item
                >
                <el-form-item label="身份证正面照片"
                  ><el-image
                    style="height: 100px"
                    :src="personalBasicMessage.idcardfront"
                    fit="contain"
                    :preview-src-list="[personalBasicMessage.idcardfront]"
                  ></el-image
                ></el-form-item>
                <el-form-item label="身份证反面照片">
                  <el-image
                    style="height: 100px"
                    :src="personalBasicMessage.idcardcontrary"
                    fit="contain"
                    :preview-src-list="[personalBasicMessage.idcardcontrary]"
                  ></el-image>
                </el-form-item>
              </el-form>
            </div> </el-card
        ></el-tab-pane>
        <el-tab-pane label="2.学历情况"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>学历情况</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div>
              <el-table :data="personalEducation" border style="width: 100%">
                <el-table-column
                  prop="graduationtime"
                  label="毕业时间"
                  width="180"
                >
                </el-table-column>
                <el-table-column
                  prop="educationproject"
                  label="学历项目"
                  width="180"
                >
                </el-table-column>
                <el-table-column prop="education" label="学历">
                </el-table-column>
                <el-table-column prop="graduationschool" label="毕业学校">
                </el-table-column>
                <el-table-column prop="major" label="专业"> </el-table-column>
                <el-table-column fixed="right" label="操作" width="180">
                  <template slot-scope="scope"
                    ><el-button
                      type="primary"
                      size="mini"
                      @click="
                        educationVisible = true
                        education = scope.row
                      "
                      >详情</el-button
                    ></template
                  >
                </el-table-column>
              </el-table>
              <el-dialog title="学历情况" :visible.sync="educationVisible">
                <el-form class="detail-dialog">
                  <el-form-item label="毕业时间">{{
                    education.graduationtime
                  }}</el-form-item>
                  <el-form-item label="学历项目">{{
                    education.educationproject
                  }}</el-form-item>
                  <el-form-item label="学历">{{
                    education.education
                  }}</el-form-item>
                  <el-form-item label="毕业学校">{{
                    education.graduationschool
                  }}</el-form-item>
                  <el-form-item label="专业">{{
                    education.major
                  }}</el-form-item>
                  <el-form-item label="学位">{{
                    education.degree
                  }}</el-form-item>
                  <el-form-item label="毕业证编号">{{
                    education.educationid
                  }}</el-form-item>
                  <el-form-item label="学历（学位）证书材料">
                    <el-image
                      style="height: 100px"
                      :src="education.educationdegreecredential"
                      fit="contain"
                      :preview-src-list="[education.educationdegreecredential]"
                    ></el-image
                  ></el-form-item>
                </el-form>
              </el-dialog>
            </div> </el-card
        ></el-tab-pane>
        <el-tab-pane label="3.主要经历"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>主要经历</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div>
              <el-table
                :data="personalMajorExperience"
                border
                style="width: 100%"
              >
                <el-table-column prop="starttime" label="开始时间" width="100">
                </el-table-column>
                <el-table-column prop="endtime" label="截止时间" width="100">
                </el-table-column>
                <el-table-column prop="workunit" label="工作单位(学校)">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="180">
                  <template v-slot="scope">
                    <el-button
                      type="primary"
                      size="mini"
                      @click="
                        experienceVisible = true
                        experience = scope.row
                      "
                      >详情</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <el-dialog title="主要经历" :visible.sync="experienceVisible">
              <el-form class="detail-dialog">
                <el-form-item label="开始时间">{{
                  experience.starttime
                }}</el-form-item>
                <el-form-item label="截止时间">{{
                  experience.endtime
                }}</el-form-item>
                <el-form-item label="工作单位(学校)">{{
                  experience.workunit
                }}</el-form-item>
                <el-form-item label="从事何种专业技术工作">{{
                  experience.whereschoolwork
                }}</el-form-item>
                <el-form-item label="任何职">{{
                  experience.post
                }}</el-form-item>
                <el-form-item label="证明人">{{
                  experience.certifyman
                }}</el-form-item>
                <el-form-item label="学习或从事何种专业技术工作">{{
                  experience.whereschoolwork
                }}</el-form-item>
                <el-form-item label="辅助证明材料">
                  <el-image
                    style="height: 100px"
                    :src="experience.helpcertify"
                    fit="contain"
                    :preview-src-list="[experience.helpcertify]"
                  ></el-image>
                </el-form-item>
              </el-form>
            </el-dialog> </el-card
        ></el-tab-pane>
        <el-tab-pane label="4.人才引进相关材料"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>人才引进相关材料</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div>
              <el-table :data="personalIntroduceman" border style="width: 100%">
                <el-table-column prop="materialsname" label="材料名称">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="180">
                  <template v-slot="scope">
                    <el-button
                      type="primary"
                      size="mini"
                      @click="
                        introducemanVisible = true
                        introduceman = scope.row
                      "
                      >详情</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <el-dialog
              title="人才引进相关材料详情"
              :visible.sync="introducemanVisible"
            >
              <el-form class="detail-dialog">
                <el-form-item label="材料名称">{{
                  introduceman.materialsname
                }}</el-form-item>
                <el-form-item label="辅助证明材料">
                  <el-image
                    style="height: 100px"
                    :src="introduceman.materialsadjunct"
                    fit="contain"
                    :preview-src-list="[introduceman.materialsadjunct]"
                  ></el-image>
                </el-form-item>
              </el-form>
            </el-dialog> </el-card
        ></el-tab-pane>
        <el-tab-pane label="5.论文、著作"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>论文、著作</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div>
              <el-table :data="personalPaperPatents" border style="width: 100%">
                <el-table-column type="index" :index="1" label="序号">
                </el-table-column>
                <el-table-column prop="publishtime" label="发表时间">
                </el-table-column>
                <el-table-column prop="paperlevel" label="论文类别">
                </el-table-column>
                <el-table-column prop="papername" label="论文著作名称">
                </el-table-column>
                <el-table-column
                  prop="insertperiodical"
                  label="登载刊物名称、刊号"
                >
                </el-table-column>
                <el-table-column prop="role" label="角色"> </el-table-column>
                <el-table-column prop="ifmagnumopus" label="是否代表作">
                </el-table-column>
                <el-table-column
                  fixed="right"
                  label="操作"
                  width="180"
                  style="border: none"
                >
                  <template v-slot="scope">
                    <el-button
                      type="primary"
                      size="mini"
                      @click="
                        paperVisible = true
                        paper = scope.row
                      "
                      >详情</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <el-dialog title="论文、著作" :visible.sync="paperVisible">
              <el-form class="detail-dialog">
                <el-form-item label="发表时间">{{
                  paper.publishtime
                }}</el-form-item>
                <el-form-item label="论文类别">{{
                  paper.paperclasses
                }}</el-form-item>
                <el-form-item label="角色">{{ paper.role }}</el-form-item>
                <el-form-item label="是否代表作">{{
                  paper.ifmagnumopus
                }}</el-form-item>
                <el-form-item label="登载刊物名称、刊号">{{
                  paper.insertperiodical
                }}</el-form-item>
                <el-form-item label="国外权威索引收录">{{
                  paper.authorityindexes
                }}</el-form-item>
                <el-form-item label="年卷（期）">{{
                  paper.yearperiodical
                }}</el-form-item>
                <el-form-item label="获奖情况经济收益">{{
                  paper.reward
                }}</el-form-item>
                <el-form-item label="论文著作名称">{{
                  paper.papername
                }}</el-form-item>
                <el-form-item label="论文级别">{{
                  paper.paperlevel
                }}</el-form-item>
                <el-form-item label="论文封面和论文版权页">
                  <el-image
                    style="height: 100px"
                    :src="paper.papercover"
                    fit="contain"
                    :preview-src-list="[paper.papercover]"
                  ></el-image>
                </el-form-item>
              </el-form>
            </el-dialog> </el-card
        ></el-tab-pane>
        <el-tab-pane label="6.业绩成果"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>业绩成果</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div>
              <el-table
                :data="personalPerformanceAchievement"
                border
                style="width: 100%"
              >
                <el-table-column
                  prop="starttime"
                  label="开始时间"
                  width="100"
                ></el-table-column>
                <el-table-column
                  prop="stoptime"
                  label="截止时间"
                  width="100"
                ></el-table-column>
                <el-table-column
                  prop="performancename"
                  label="业绩名称（如项目，专利，标准，课题等）"
                ></el-table-column>
                <el-table-column
                  prop="projectlevel"
                  label="项目级别（规模）"
                ></el-table-column>
                <el-table-column label="操作" width="180" fixed="right">
                  <template v-slot="scope">
                    <el-button
                      type="primary"
                      size="mini"
                      @click="
                        achievementVisible = true
                        achievement = scope.row
                      "
                      >详情</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <el-dialog title="业绩成果" :visible.sync="achievementVisible">
              <el-form class="detail-dialog">
                <el-form-item label="业绩名称">{{
                  achievement.performancename
                }}</el-form-item>
                <el-form-item label="项目级别">{{
                  achievement.projectlevel
                }}</el-form-item>
                <el-form-item label="开始时间">{{
                  achievement.starttime
                }}</el-form-item>
                <el-form-item label="截止时间">{{
                  achievement.stoptime
                }}</el-form-item>
                <el-form-item label="内容提要">{{
                  achievement.projectcontent
                }}</el-form-item>
                <el-form-item label="项目材料扫描件">
                  <el-image
                    style="height: 100px"
                    :src="achievement.projectscan"
                    fit="contain"
                    :preview-src-list="[achievement.projectscan]"
                  ></el-image>
                </el-form-item>
                <el-form-item label="个人项目任职证明扫描件">
                  <el-image
                    style="height: 100px"
                    :src="achievement.personalprojectscan"
                    fit="contain"
                    :preview-src-list="[achievement.personalprojectscan]"
                  ></el-image>
                </el-form-item>
                <el-form-item label="项目获奖扫描件">
                  <el-image
                    style="height: 100px"
                    :src="achievement.projectawardsscan"
                    fit="contain"
                    :preview-src-list="[achievement.projectawardsscan]"
                  ></el-image>
                </el-form-item>
              </el-form>
            </el-dialog> </el-card
        ></el-tab-pane>
        <el-tab-pane label="7.业绩奖项"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>业绩奖项</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div>
              <el-table
                :data="personalPerformanceAwards"
                border
                style="width: 100%"
              >
                <el-table-column
                  prop="projectname"
                  label="项目名称"
                ></el-table-column>
                <el-table-column
                  prop="awardslevel"
                  label="奖励等级"
                ></el-table-column>
                <el-table-column
                  prop="awardtime"
                  label="授予时间"
                ></el-table-column>
                <el-table-column
                  prop="awardorganization"
                  label="授予机构"
                ></el-table-column>
                <el-table-column label="操作" width="180" fixed="right">
                  <template v-slot="scope">
                    <el-button
                      type="primary"
                      size="mini"
                      @click="
                        awardVisible = true
                        award = scope.row
                      "
                      >详情</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <el-dialog title="业绩奖项详情" :visible.sync="awardVisible">
              <el-form class="detail-dialog">
                <el-form-item label="项目名称">{{
                  award.projectname
                }}</el-form-item>
                <el-form-item label="奖励等级">{{
                  award.awardslevel
                }}</el-form-item>
                <el-form-item label="授予时间">{{
                  award.awardtime
                }}</el-form-item>
                <el-form-item label="授予机构">{{
                  award.awardorganization
                }}</el-form-item>
                <el-form-item label="内容提要">{{
                  award.content
                }}</el-form-item>
                <el-form-item label="辅助证明材料">
                  <el-image
                    style="height: 100px"
                    :src="award.assistcertify"
                    fit="contain"
                    :preview-src-list="[award.assistcertify]"
                  ></el-image>
                </el-form-item>
              </el-form>
            </el-dialog> </el-card
        ></el-tab-pane>
        <el-tab-pane label="8.业绩专利"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>业绩专利</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div>
              <el-table
                :data="personalPerformancePatents"
                border
                style="width: 100%"
              >
                <el-table-column
                  prop="patentsname"
                  label="专利名称"
                ></el-table-column>
                <el-table-column
                  prop="patentstype"
                  label="专利类型"
                ></el-table-column>
                <el-table-column
                  prop="gettime"
                  label="取得时间"
                ></el-table-column>
                <el-table-column label="操作" width="180" fixed="right">
                  <template v-slot="scope">
                    <el-button
                      type="primary"
                      size="mini"
                      @click="
                        patentVisible = true
                        patent = scope.row
                      "
                      >详情</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <el-dialog title="业绩专利详情" :visible.sync="patentVisible">
              <el-form class="detail-dialog">
                <el-form-item label="专利名称">{{
                  patent.patentsname
                }}</el-form-item>
                <el-form-item label="专利类型">{{
                  patent.patentstype
                }}</el-form-item>
                <el-form-item label="取得时间">{{
                  patent.gettime
                }}</el-form-item>
                <el-form-item label="专利介绍">{{
                  patent.patentsintroduce
                }}</el-form-item>
                <el-form-item label="辅助证明材料">
                  <el-image
                    style="height: 100px"
                    :src="patent.assistcertify"
                    fit="contain"
                    :preview-src-list="[patent.assistcertify]"
                  ></el-image>
                </el-form-item>
              </el-form>
            </el-dialog> </el-card
        ></el-tab-pane>
        <el-tab-pane label="9.从业或执业（职业）资格"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>从业或执业（职业）资格</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div>
              <el-table
                :data="personalOccupationalQualification"
                border
                style="width: 100%"
              >
                <el-table-column
                  prop="qualificationname"
                  label="资格名称"
                ></el-table-column>
                <el-table-column
                  prop="gettime"
                  label="取得时间"
                ></el-table-column>
                <el-table-column
                  prop="ratifyoffice"
                  label="批准机关"
                ></el-table-column>
                <el-table-column
                  prop="majorname"
                  label="专业名称"
                ></el-table-column>
                <el-table-column
                  prop="credentialnumber"
                  label="证书编号"
                ></el-table-column>
                <el-table-column label="操作" width="180" fixed="right">
                  <template v-slot="scope">
                    <el-button
                      type="primary"
                      size="mini"
                      @click="
                        qualificationVisible = true
                        qualification = scope.row
                      "
                      >详情</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <el-dialog
              title="从业或职（执）业资格详情"
              :visible.sync="qualificationVisible"
            >
              <el-form class="detail-dialog">
                <el-form-item label="资格名称">{{
                  qualification.qualificationname
                }}</el-form-item>
                <el-form-item label="取得时间">{{
                  qualification.gettime
                }}</el-form-item>
                <el-form-item label="批准机关">{{
                  qualification.ratifyoffice
                }}</el-form-item>
                <el-form-item label="专业名称">{{
                  qualification.majorname
                }}</el-form-item>
                <el-form-item label="证书编号">{{
                  qualification.credentialnumber
                }}</el-form-item>
                <el-form-item label="辅助证明材料">
                  <el-image
                    style="height: 100px"
                    :src="qualification.assistcertify"
                    fit="contain"
                    :preview-src-list="[qualification.assistcertify]"
                  ></el-image>
                </el-form-item>
              </el-form>
            </el-dialog> </el-card
        ></el-tab-pane>
        <el-tab-pane label="10.国（境）外工作或研究材料"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>国（境）外工作或研究材料</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div>
              <el-table
                :data="personalResearchMaterials"
                border
                style="width: 100%"
              >
                <el-table-column
                  prop="starttime"
                  label="开始时间"
                  width="100"
                ></el-table-column>
                <el-table-column
                  prop="stoptime"
                  label="截止时间"
                  width="100"
                ></el-table-column>
                <el-table-column
                  prop="workunit"
                  label="工作单位"
                ></el-table-column>
                <el-table-column prop="job" label="职务岗位"></el-table-column>
                <el-table-column label="操作" width="180" fixed="right">
                  <template v-slot="scope">
                    <el-button
                      type="primary"
                      size="mini"
                      @click="
                        researchVisible = true
                        research = scope.row
                      "
                      >详情</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <el-dialog
              title="国（境）工作或研究材料详情"
              :visible.sync="researchVisible"
            >
              <el-form class="detail-dialog">
                <el-form-item label="开始时间">{{
                  research.starttime
                }}</el-form-item>
                <el-form-item label="截止时间">{{
                  research.stoptime
                }}</el-form-item>
                <el-form-item label="工作单位">{{
                  research.workunit
                }}</el-form-item>
                <el-form-item label="职务岗位">{{ research.job }}</el-form-item>
                <el-form-item label="工作内容">{{
                  research.jobcontent
                }}</el-form-item>
                <el-form-item label="辅助证明材料">
                  <el-image
                    style="height: 100px"
                    :src="research.assistcertify"
                    fit="contain"
                    :preview-src-list="[research.assistcertify]"
                  ></el-image>
                </el-form-item>
              </el-form>
            </el-dialog> </el-card
        ></el-tab-pane>
        <el-tab-pane label="11.工作总结"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>工作总结</span>
              <router-link to="/manage/reviews"><span>返回</span></router-link>
            </div>
            <div>
              <p style="size: 16px">
                <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span
                >{{ personalWorksummary.worksummary }}
              </p>
            </div>
          </el-card></el-tab-pane
        >
        <el-tab-pane label="12.其他材料"
          ><el-card class="box-card">
            <div slot="header" class="card-header">
              <span>其他材料</span>
            </div>
            <div>
              <el-table :data="personalOthers" border style="width: 100%">
                <el-table-column prop="title" label="标题"></el-table-column>
                <el-table-column label="操作" width="180" fixed="right">
                  <template v-slot="scope">
                    <el-button
                      type="primary"
                      size="mini"
                      @click="
                        otherVisible = true
                        other = scope.row
                      "
                      >详情</el-button
                    >
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <el-dialog title="其他材料详情" :visible.sync="otherVisible">
              <el-form class="detail-dialog">
                <el-form-item label="标题">{{ other.title }}</el-form-item>
                <el-form-item label="相关扫描件">
                  <el-image
                    style="height: 100px"
                    :src="other.projectscan"
                    fit="contain"
                    :preview-src-list="[other.projectscan]"
                  ></el-image>
                </el-form-item>
              </el-form>
            </el-dialog> </el-card
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const BASEURL = 'http://www.chai233.cn:8082'
const FIND_USER_BY_ID = '/person/finduserbyid'
const SELECT_REVIEW_ALL_BY_ID = '/reviewall/selectreviewallbyid'
const PERSONAL_BASIC_MESSAGE = '/PersonalReviewselect/Personal_basic_message'
const PERSONAL_EDUCATION = '/PersonalReviewselect/personal_education'
const PERSONAL_MAJOR_EXPERIENCE =
  '/PersonalReviewselect/personal_major_experience'
const PERSONAL_INTRODUCEMAN = '/PersonalReviewselect/personal_introduceman'
const PERSONAL_PAPER_PATENTS = '/PersonalReviewselect/personal_paper_patents'
const PERSONAL_PERFORMANCE_ACHIEVEMENT =
  '/PersonalReviewselect/personal_performance_achievement'
const PERSONAL_PERFORMANCE_AWRADS =
  '/PersonalReviewselect/personal_performance_awards'
const PERSONAL_PERFORMANCE_PATENTS =
  '/PersonalReviewselect/personal_performance_patents'
const PERSONAL_OCCUPATIONAL_QUALIFICATION =
  '/PersonalReviewselect/personal_occupational_qualification'
const PERSONAL_RESEARCH_MATERIALS =
  '/PersonalReviewselect/personal_research_materials'
const PERSONAL_WORKSUMMARY = '/PersonalReviewselect/personal_worksummary'
const PERSONAL_OTHERS = '/PersonalReviewselect/personal_others'
export default {
  name: 'ReviewDetail',
  data: () => ({
    userInfo: {},
    totalInfo: {},
    personalBasicMessage: {},
    personalEducation: [],
    educationVisible: false,
    education: {},
    personalMajorExperience: [],
    experienceVisible: false,
    experience: {},
    personalIntroduceman: [],
    introducemanVisible: false,
    introduceman: {},
    personalPaperPatents: [],
    paperVisible: false,
    paper: {},
    personalPerformanceAchievement: [],
    achievement: {},
    achievementVisible: false,
    personalPerformanceAwards: [],
    award: {},
    awardVisible: false,
    personalPerformancePatents: [],
    patent: {},
    patentVisible: false,
    personalOccupationalQualification: [],
    qualification: {},
    qualificationVisible: false,
    personalResearchMaterials: [],
    research: {},
    researchVisible: false,
    personalWorksummary: {},
    personalOthers: [],
    otherVisible: false,
    other: {}
  }),
  mounted () {
    const PersonalUserid = this.$route.params.userid
    const PersonalreviewID = this.$route.params.reviewid
    ;(async () => {
      const userInfo = await axios({
        baseURL: BASEURL,
        url: FIND_USER_BY_ID,
        method: 'get',
        params: {
          PersonalUserid
        }
      })
      this.userInfo = userInfo.data ? userInfo.data : {}
      const totalInfo = await axios({
        baseURL: BASEURL,
        url: SELECT_REVIEW_ALL_BY_ID,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.totalInfo = totalInfo.data ? totalInfo.data : {}
      console.log(this.totalInfo)
      const personalBasicMessage = await axios({
        baseURL: BASEURL,
        url: PERSONAL_BASIC_MESSAGE,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalBasicMessage = personalBasicMessage.data
        ? personalBasicMessage.data
        : {}
      console.log(this.personalBasicMessage)
      const personalEducation = await axios({
        baseURL: BASEURL,
        url: PERSONAL_EDUCATION,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalEducation = personalEducation.data
        ? [personalEducation.data]
        : []
      console.log('学历情况:')
      console.log(this.personalEducation)
      const personalMajorExperience = await axios({
        baseURL: BASEURL,
        url: PERSONAL_MAJOR_EXPERIENCE,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalMajorExperience = personalMajorExperience.data
        ? [personalMajorExperience.data]
        : []
      console.log('主要经历:')
      console.log(this.personalMajorExperience)
      const personalIntroduceman = await axios({
        baseURL: BASEURL,
        url: PERSONAL_INTRODUCEMAN,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalIntroduceman = personalIntroduceman.data
        ? [personalIntroduceman.data]
        : []
      const personalPaperPatents = await axios({
        baseURL: BASEURL,
        url: PERSONAL_PAPER_PATENTS,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalPaperPatents = personalPaperPatents.data
        ? [personalPaperPatents.data]
        : []
      const personalPerformanceAchievement = await axios({
        baseURL: BASEURL,
        url: PERSONAL_PERFORMANCE_ACHIEVEMENT,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalPerformanceAchievement = personalPerformanceAchievement.data
        ? [personalPerformanceAchievement.data]
        : []
      const personalPerformanceAwards = await axios({
        baseURL: BASEURL,
        url: PERSONAL_PERFORMANCE_AWRADS,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalPerformanceAwards = personalPerformanceAwards.data
        ? [personalPerformanceAwards.data]
        : []
      const personalPerformancePatents = await axios({
        baseURL: BASEURL,
        url: PERSONAL_PERFORMANCE_PATENTS,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalPerformancePatents = personalPerformancePatents.data
        ? [personalPerformancePatents.data]
        : []
      const personalOccupationalQualification = await axios({
        baseURL: BASEURL,
        url: PERSONAL_OCCUPATIONAL_QUALIFICATION,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalOccupationalQualification = personalOccupationalQualification.data
        ? [personalOccupationalQualification.data]
        : []
      const personalResearchMaterials = await axios({
        baseURL: BASEURL,
        url: PERSONAL_RESEARCH_MATERIALS,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalResearchMaterials = personalResearchMaterials.data
        ? [personalResearchMaterials.data]
        : []
      const personalWorksummary = await axios({
        baseURL: BASEURL,
        url: PERSONAL_WORKSUMMARY,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalWorksummary = personalWorksummary.data
        ? personalWorksummary.data
        : {}
      const personalOthers = await axios({
        baseURL: BASEURL,
        url: PERSONAL_OTHERS,
        method: 'get',
        params: {
          PersonalUserid,
          PersonalreviewID
        }
      })
      this.personalOthers = personalOthers.data ? [personalOthers.data] : []

      this.$notify({
        type: 'success',
        title: '获取详情成功',
        duration: 3 * 1000
      })
    })().catch(err => {
      console.log(err)
      this.$notify({
        type: 'error',
        title: '获取详情失败',
        duration: 3 * 1000
      })
    })
  }
}
</script>

<style lang="scss" scoped>
body ::v-deep .el-table th.gutter {
  display: table-cell !important;
}
::v-deep .el-table__fixed,
.el-table__fixed-right {
  height: 100% !important;
}
#detail-app {
  padding: 0;
  margin-top: 8px;
  .nav-tab {
    margin: 0 8px 0;
    ::v-deep .el-tabs__header {
      background-color: white;
      overflow: hidden;
    }
    ::v-deep .el-tabs__nav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .box-card {
      border: 0;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
      ::v-deep .el-card__header {
        width: 100%;
        padding: 0;
        font-size: 16px;
        font-weight: bold;
        padding: 5px 10px;
        color: #1a56a8;
        background-color: #e4f0ff;
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          a {
            text-decoration: none;
            color: #1a56a8;
          }
        }
      }
      .total-info {
        ::v-deep .el-form {
          display: flex;
          flex-wrap: wrap;
          border-left: 1px solid #dfe5ec;
          border-right: 1px solid #dfe5ec;
          border-bottom: 1px solid #dfe5ec;
          .el-form-item {
            display: inline-block;
            box-sizing: border-box;
            width: 50%;
            margin-bottom: 0;
            .el-form-item__label {
              width: 260px;
              border-top: 1px solid #dfe5ec;
              color: #2f3542;
              font-weight: 600;
              font-size: 14px;
              line-height: 40px;
              padding: 0 12px 0 0;
            }
            .el-form-item__content {
              display: inline-block;
              box-sizing: border-box;
              width: calc(100% - 260px);
              height: 100%;
              padding: 0 16px;
              border-top: 1px solid #dfe5ec;
              border-left: 1px solid #dfe5ec;
              border-right: 1px solid #dfe5ec;
              .el-image {
                padding-top: 8px;
              }
            }
          }
        }
      }
    }
  }
}
.detail-dialog {
  border-left: 1px solid #dfe5ec;
  border-bottom: 1px solid #dfe5ec;
  ::v-deep .el-form-item {
    margin: 0;
    .el-form-item__label {
      box-sizing: border-box;
      width: 200px;
      border-top: 1px solid #dfe5ec;
      size: 16px;
      font-weight: 800;
    }
    .el-form-item__content {
      display: inline-block;
      box-sizing: border-box;
      width: calc(100% - 200px);
      border-top: 1px solid #dfe5ec;
      border-left: 1px solid #dfe5ec;
      border-right: 1px solid #dfe5ec;
      padding: 0 16px;
      .el-image {
        padding-top: 8px;
      }
    }
  }
}
</style>
