<template>
  <div>
    <el-row :gutter="20">
      <!--  用户信息 -->
      <el-col :span="8">
        <el-card shadow="hover" class="mgb20" style="height:252px;">
          <div class="user-info">
            <img src="../assets/img/img.jpg" class="user-avator" alt />
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录的时间:
            <span>2021-4-12</span>
          </div>
          <div class="user-info-list">
            上次登录的地点:
            <span>上海</span>
          </div>
        </el-card>

        <!-- 语言排行 -->
        <el-card shadow="hover">
          <template #header>
            <div class="clearfix">
              <span>语言详情</span>
            </div>
          </template>
          Vue<el-progress :percentage="71.3" color="#42b983"></el-progress>
          JavaScript<el-progress :percentage="24.1" color="#f1e05a"></el-progress>
          CSS<el-progress :percentage="13.7"></el-progress>
          HTML<el-progress :percentage="5.9" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>

      <!--右上角区域  -->
      <el-col :span="16">
        <!-- 3个统计信息放在一起 -->
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-user-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-message-solid grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-s-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <!-- 代办事项的card -->
        <el-card class="todo-list">
          <template #header>
            <div class="clearfix">
              <span>待办事项</span>
              <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
            </div>
          </template>

          <el-table :show-header="false" :data="todoList" style="width:100%;">
            <el-table-column width="40">
              <template #default="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template #default="scope">
                <div
                  class="todo-item"
                  :class="{
                                        'todo-item-del': scope.row.status,
                                    }"
                >{{ scope.row.title }}</div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <template #default>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Schart from "vue-schart";
export default {
    name:"dashboard",
    data(){
        return {
            // name: localStorage.getItem("ms_username"),
            name: 'linxin',
            todoList: [
                {
                    title: "今天要修复100个bug",
                    status: false
                },
                {
                    title: "今天要修复100个bug",
                    status: false
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: false
                },
                {
                    title: "今天要修复100个bug",
                    status: false
                },
                {
                    title: "今天要修复100个bug",
                    status: true
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: true
                }
            ],
            data: [
                {
                    name: "2018/09/04",
                    value: 1083
                },
                {
                    name: "2018/09/05",
                    value: 941
                },
                {
                    name: "2018/09/06",
                    value: 1139
                },
                {
                    name: "2018/09/07",
                    value: 816
                },
                {
                    name: "2018/09/08",
                    value: 327
                },
                {
                    name: "2018/09/09",
                    value: 228
                },
                {
                    name: "2018/09/10",
                    value: 1065
                }
            ],
            options: {
                type: "bar",
                title: {
                    text: "最近一周各品类销售图"
                },
                xRorate: 25,
                labels: ["周一", "周二", "周三", "周四", "周五"],
                datasets: [
                    {
                        label: "家电",
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: "百货",
                        data: [164, 178, 190, 135, 160]
                    },
                    {
                        label: "食品",
                        data: [144, 198, 150, 235, 120]
                    }
                ]
            },
            options2: {
                type: "line",
                title: {
                    text: "最近几个月各品类销售趋势图"
                },
                labels: ["6月", "7月", "8月", "9月", "10月"],
                datasets: [
                    {
                        label: "家电",
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: "百货",
                        data: [164, 178, 150, 135, 160]
                    },
                    {
                        label: "食品",
                        data: [74, 118, 200, 235, 90]
                    }
                ]
            }
        };
    },
    components: {
        Schart
    },
    computed: {
        role() {
            return this.name === "admin" ? "超级管理员" : "普通用户";
        }
    },
    
}
</script>

<style scoped>
.el-row {
    margin-bottom: 20px;
}
.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-con-icon{
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #ffffff

}
.grid-cont-right {
    flex-grow: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}
.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
    background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
    color: rgb(242, 94, 67);
}
.user-info{
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: solid 2px #ccc;
  margin-bottom: 20px;
  
}
.user-info .user-info-cont{
  flex:1;
  text-align: center;
  font-size: 14px;
  color: #999;
}
.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list{
  font-size: 14px;
  color: #999;
  line-height: 25px
}

.user-info-list span {
    margin-left: 70px;
}
.schart {
    width: 100%;
    height: 300px;
}
.todo-list{
  height:423px;
}
.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

</style>