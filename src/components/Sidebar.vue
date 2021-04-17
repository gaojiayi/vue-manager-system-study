<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
      collapse-transition=true
    >
      <template v-for="item in items">
          <!--二级目录 -->
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <!-- 一级目录 -->
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // 这里的index至关重要   是真正回去路由的地址
            items: [
                {
                    icon: "el-icon-s-home",
                    index: "dashboard",
                    title: "系统首页"
                },
                {
                    icon: "el-icon-s-grid",
                    index: "table",
                    title: "基础表格"
                },
                {
                    icon: "el-icon-document-copy",
                    index: "tabs",
                    title: "tab选项卡"
                },
                {
                    icon: "el-icon-date",
                    index: "3",
                    title: "表单相关",
                    subs: [
                        {
                            index: "form",
                            title: "基本表单"
                        },
                        //         {
                        //             index: "3-2",
                        //             title: "三级菜单",
                        //             subs: [
                        //                 {
                        //                     index: "editor",
                        //                     title: "富文本编辑器"
                        //                 },
                        //                 {
                        //                     index: "markdown",
                        //                     title: "markdown编辑器"
                        //                 }
                        //             ]
                        //         },
                        {
                            index: "upload",
                            title: "文件上传"
                        }
                    ]
                },
                {
                    icon: "el-icon-lx-emoji",
                    index: "icon",
                    title: "自定义图标"
                },
                {
                    icon: "el-icon-pie-chart",
                    index: "charts",
                    title: "schart图表"
                },
                // {
                //     icon: "el-icon-rank",
                //     index: "6",
                //     title: "拖拽组件",
                //     subs: [
                //         {
                //             index: "drag",
                //             title: "拖拽列表"
                //         },
                //         {
                //             index: "dialog",
                //             title: "拖拽弹框"
                //         }
                //     ]
                // },
                {
                    icon: "el-icon-lx-global",
                    index: "i18n",
                    title: "国际化功能"
                },
                {
                    icon: "el-icon-lx-warn",
                    index: "7",
                    title: "错误处理",
                    subs: [
                        {
                            index: "permission",
                            title: "权限测试"
                        },
                        {
                            index: "404",
                            title: "404页面"
                        }
                    ]
                },
                {
                    icon: "el-icon-lx-redpacket_fill",
                    index: "/donate",
                    title: "支持作者"
                }
            ]
        };
    },
    computed: {
        onRoutes() {
            // 菜单被选中的效果
            return this.$route.path.replace("/", "");
        },
        collapse(){
            // 是否水平折叠收起菜单
            return this.$store.state.collapse
        }
    }
}
</script>
<style  scoped>
.sidebar{
    display: block;
    position: absolute;
    top: 70px;
    left: 0;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}

.sidebar > ul {
    height: 100%;
}

</style>