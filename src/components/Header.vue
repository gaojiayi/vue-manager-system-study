<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 消息中心 -->
        <div class="btn-bell">
          <!-- Tooltip 文字提示 -->
          <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
            <router-link to="/tabs">
              <!-- icon -->
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="../assets/img/img.jpg" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="hover" @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">项目仓库</a>
              </el-dropdown-item>

              <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations,mapState } from 'vuex'
export default {
    data() {
        return {
            fullscreen: false,
            name: "linxin",
            message: 2
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem("ms_username");
            return username ? username : this.name;
        },
        ...mapState(['collapse'])
    },
    methods: {
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == "loginout") {
                localStorage.removeItem("ms_username");
                this.$router.push("/login");
            }
        },
        collapseChage(){
            this.hadndleCollapse(!this.collapse)
        },
        // 侧边栏折叠
        ...mapMutations(['hadndleCollapse'])
        
    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
};
</script>
<style  scoped>
.header {
  position: relative;
  /* width = padding + border */
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  /* 光标 一只手 */
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header .header-right {
  float: right;
  padding-right: 50px;
  width: 200px
}

.header-user-con {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between
}
.btn-bell {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  width: 8px;
  height: 8px;
  top: -2px;
  right: 0px;
  background-color: red;
  border-radius: 4px;
}
.btn-bell .el-icon-bell {
  color: #fff;
}

.user-avator {
  margin-left: 20px;
}
.user-avator img {
    position: relative;
  display: block;
  width: 40px;
  height: 40px;
  left: 20px;
}

div.user-name {
    left: 20px;
    color: #fff
}
.el-dropdown-link.el-dropdown-selfdefine{
    color: #fff;
    cursor: pointer;
}

</style>