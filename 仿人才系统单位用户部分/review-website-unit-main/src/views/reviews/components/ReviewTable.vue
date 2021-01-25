<template>
  <div id="review-table">
    <div class="reviews-cond">
      <el-row type="flex" align="center" style="margin-bottom: 8px;">
        <el-col :span="2" class="cond-label"><label>姓名</label></el-col>
        <el-col :span="5"> <el-input v-model="condName"></el-input></el-col>
        <el-col :span="2" class="cond-label"><label>证件号码</label></el-col>
        <el-col :span="5"><el-input v-model="condDocument"></el-input></el-col>
        <el-col :span="2" class="cond-label"><label>评审会</label></el-col>
        <el-col :span="5"><el-input v-model="condJury"></el-input></el-col>
        <el-col :span="3"></el-col>
      </el-row>
      <el-row type="flex" align="center" style="margin-bottom: 8px;">
        <el-col :span="2" class="cond-label"><label>申报状态</label></el-col>
        <el-col :span="5"
          ><el-select v-model="condState">
            <el-option
              v-for="(item, index) in condStates"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option></el-select
        ></el-col>
        <el-col :span="2" class="cond-label"><label>申报级别</label></el-col>
        <el-col :span="5"
          ><el-select v-model="condLevel">
            <el-option
              v-for="(item, index) in condLevels"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option></el-select
        ></el-col>
        <el-col :span="2" class="cond-label"><label>申报年度</label></el-col>
        <el-col :span="5"
          ><el-select v-model="condYear">
            <el-option
              v-for="(item, index) in condYears"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option></el-select
        ></el-col>
        <el-col :span="3"></el-col>
      </el-row>
      <el-row type="flex" align="center" style="margin-bottom: 8px;">
        <el-col :span="2" class="cond-label"><label>时间排序</label></el-col>
        <el-col :span="5"
          ><el-select v-model="condSort">
            <el-option
              v-for="(item, index) in condSorts"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option></el-select
        ></el-col>
        <el-col :span="2" class="cond-label"
          ><el-button type="primary" icon="el-icon-search" @click="changeCond"
            >搜索</el-button
          ></el-col
        >
        <el-col :span="14"></el-col>
      </el-row>
    </div>
    <div class="reviews-data">
      <el-table :data="showReviews" style="width: 100%" border>
        <el-table-column
          fixed="left"
          prop="reviewYear"
          label="申报年度"
          width="82"
        >
        </el-table-column>
        <el-table-column
          fixed="left"
          prop="reviewdate"
          label="申报日期"
          width="100"
        >
        </el-table-column>
        <el-table-column prop="reviewstatusname" label="申报系列" width="145">
        </el-table-column>
        <el-table-column prop="reviewlevel" label="职称级别" width="80">
        </el-table-column>
        <el-table-column prop="PersonalUserid" label="用户编号" width="115">
        </el-table-column>
        <el-table-column
          prop="personInfo.PersonalUsername"
          label="姓名"
          width="85"
        >
        </el-table-column>
        <el-table-column
          prop="personInfo.documentsnumber"
          label="证件号码"
          width="170"
        >
        </el-table-column>
        <el-table-column prop="reviewname" label="评审会" min-width="380">
        </el-table-column>
        <el-table-column prop="reviewstate" label="状态" width="150">
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="200">
          <template slot-scope="scope">
            <el-button
              type="danger"
              @click="appearStateDialog(scope.row)"
              size="mini"
              >更改状态</el-button
            >
            <el-button
              type="primary"
              size="mini"
              @click="showReviewDetail(scope.row)"
              >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-wrapper">
        <el-pagination
          background
          layout="total, sizes,prev, pager, next"
          :total="total"
          :page-size.sync="pageSize"
          :page-sizes="pageSizes"
          :current-page.sync="currentPage"
          @current-change="currentChange"
          @size-change="sizeChange"
        >
        </el-pagination>
      </div>
    </div>
    <el-dialog title="修改状态" :visible.sync="showStateDialog" width="30%">
      <el-form :model="updateForm">
        <el-form-item prop="updateState" label="评审状态">
          <el-select v-model="updateForm.updateState">
            <el-option
              v-for="(item, index) in updateFormStates"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option
          ></el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelStateDialog">取 消</el-button>
        <el-button
          type="primary"
          @click="submitStateDialog"
          :loading="updateLoading"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import reviewAPI from '@/api/review'
import userAPI from '@/api/user'
import { cloneDeep } from 'lodash'
export default {
  name: 'ReviewTable',
  data: () => {
    return {
      showStateDialog: false,
      reviews: [],
      condReviews: [],
      total: 0,
      pageSize: 4,
      pageSizes: [4, 8, 16],
      currentPage: 1,
      start: 0,
      condName: '',
      condDocument: '',
      condJury: '',
      condYear: '',
      condYears: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '2020年度',
          value: 2020
        },
        {
          label: '2019年度',
          value: 2019
        },
        {
          label: '2018年度',
          value: 2018
        }
      ],
      condLevel: '',
      condLevels: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '初级',
          value: '初级'
        },
        {
          label: '中级',
          value: '中级'
        },
        {
          label: '副高级',
          value: '副高级'
        },
        {
          label: '正高级',
          value: '正高级'
        }
      ],
      condState: '',
      condStates: [
        {
          label: '全部',
          value: ''
        },
        {
          label: '待审核',
          value: '待审核'
        },
        {
          label: '已审核',
          value: '已审核'
        },
        {
          label: '审核不通过',
          value: '审核不通过'
        },
        {
          label: '已报送上级主管单位',
          value: '已报送上级主管单位'
        },
        {
          label: '已报送职改办',
          value: '已报送职改办'
        },
        {
          label: '退回个人修改',
          value: '退回个人修改'
        }
      ],
      condSort: '',
      condSorts: [
        {
          label: '升序',
          value: '升序'
        },
        {
          label: '降序',
          value: '降序'
        }
      ],
      updateForm: {
        record: {},
        updateState: ''
      },
      updateLoading: false
    }
  },
  methods: {
    showReviewDetail (review) {
      console.log(review)
      this.$router.push(
        `/reviewdetail/${review.PersonalUserid}/${review.PersonalreviewID}`
      )
    },
    appearStateDialog (record) {
      this.updateForm.record = record
      this.updateForm.updateState = record.reviewstate
      this.showStateDialog = true
    },
    cancelStateDialog () {
      this.showStateDialog = false
    },
    submitStateDialog () {
      this.updateLoading = true
      reviewAPI
        .updateReivewState(
          this.updateForm.record.PersonalUserid,
          this.updateForm.record.PersonalreviewID,
          this.updateForm.updateState
        )
        .then(
          res => {
            if (res.data === 1) {
              reviewAPI.getReviews().then(async res => {
                const resData = res.data
                const promises = resData.map(async item => {
                  item.reviewYear = new Date(item.reviewdate).getFullYear()
                  const { data: res } = await userAPI.getUserById(
                    item.PersonalUserid
                  )
                  item.personInfo = res
                })
                await Promise.all(promises)
                this.reviews = resData
                console.log('所有的评审:')
                console.log(this.reviews)
                this.total = resData.length
                await (async () => {
                  this.condReviews = cloneDeep(this.reviews)
                  this.changeCond()
                })()
                this.updateLoading = false
                this.$notify({
                  type: 'success',
                  title: '更改成功',
                  duration: 3 * 1000
                })
                this.showStateDialog = false
              })
            } else {
              this.updateLoading = false
              this.$notify({
                type: 'error',
                title: '更改失败',
                duration: 3 * 1000
              })
            }
          },
          () => {
            this.updateLoading = false
            this.$notify({
              type: 'error',
              title: '更改失败',
              duration: 3 * 1000
            })
          }
        )
    },
    currentChange () {
      this.start = (this.currentPage - 1) * this.pageSize
      console.log('当前页码:')
      console.log(this.currentPage)
      console.log('当前页可显示条目数:')
      console.log(this.pageSize)
      console.log('当前显示的评审:')
      console.log(this.showReviews)
    },
    sizeChange () {
      this.currentChange()
    },
    changeCond () {
      const reviewsTemp = cloneDeep(this.reviews)
      this.condReviews = reviewsTemp
        .filter(review => {
          // 搜索名字
          if (this.condName.length === 0) {
            return true
          } else if (
            review.personInfo.PersonalUsername.search(this.condName) !== -1
          ) {
            return true
          } else {
            return false
          }
        })
        .filter(review => {
          // 搜索证件号码
          if (this.condDocument.length === 0) {
            return true
          } else if (
            review.personInfo.documentsnumber.search(this.condDocument) !== -1
          ) {
            return true
          } else {
            return false
          }
        })
        .filter(review => {
          // 搜索评审会
          if (this.condJury.length === 0) {
            return true
          } else if (review.reviewname.search(this.condJury) !== -1) {
            return true
          } else {
            return false
          }
        })
        .filter(review => {
          // 筛选年度
          if (this.condYear.length === 0) {
            return true
          } else if (review.reviewYear === this.condYear) {
            return true
          } else {
            return false
          }
        })
        .filter(review => {
          // 筛选级别
          if (this.condLevel.length === 0) {
            return true
          } else if (review.reviewlevel === this.condLevel) {
            return true
          } else {
            return false
          }
        })
        .filter(review => {
          // 筛选状态
          if (this.condState.length === 0) {
            return true
          } else if (review.reviewstate === this.condState) {
            return true
          } else {
            return false
          }
        })
        .sort((a, b) => {
          // 时间排序
          if (this.condSort.length === 0) {
            return 0
          } else if (this.condSort === '降序') {
            return Date.parse(a.reviewdate) - Date.parse(b.reviewdate)
          } else {
            return Date.parse(b.reviewdate) - Date.parse(a.reviewdate)
          }
        })
      this.total = this.condReviews.length
    }
  },
  computed: {
    showReviews () {
      const end = this.start + this.pageSize
      return this.condReviews.slice(this.start, end)
    },
    updateFormStates () {
      return this.condStates.filter((_, index) => index !== 0)
    }
  },
  mounted () {
    reviewAPI.getReviews().then(async res => {
      const resData = res.data
      const promises = resData.map(async item => {
        item.reviewYear = new Date(item.reviewdate).getFullYear()
        const { data: res } = await userAPI.getUserById(item.PersonalUserid)
        item.personInfo = res
      })
      await Promise.all(promises)
      this.reviews = resData
      console.log('所有的评审:')
      console.log(this.reviews)
      this.total = resData.length
      this.condReviews = cloneDeep(this.reviews)
    })
  }
}
</script>

<style lang="scss" scoped>
#review-table {
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  .reviews-cond {
    padding: 16px;
    margin-bottom: 8px;
    background: #f1f2ff;
    .cond-label {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 16px;
      color: #57606f;
    }
    .el-input {
      width: 75%;
    }
    .el-select {
      width: 75%;
    }
  }
  .reviews-data {
    .pagination-wrapper {
      display: flex;
      align-items: center;
      padding-top: 8px;
      padding-left: 16px;
    }
  }
}
</style>
