<template>
  <div class="about">
    <v-header /> 
    <v-sidebar />
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <v-tags></v-tags> 
      <div class="content">
        <!-- 作用域插槽  v-slot放在父组件中   Component是插槽属性prop的名字-->
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <!-- 表示缓存组件其中includ表示--> 
             <!-- 需要缓存的组件名称列表  可以是逗号字符串 正则或者list --> 
            <!-- <keep-alive :include="tagsList"> -->
              <!-- is 属性切换组件 --> 
              <component :is="Component" />
            <!-- </keep-alive> -->
          </transition>
        </router-view>
        
        <!-- <el-backtop target=".content"></el-backtop> -->
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from "../components/Header";
import vSidebar from "../components/Sidebar";
import vTags from "../components/Tags.vue";
export default {
    components: {
        vHeader,
        vSidebar,
        vTags
    },
    computed: {
        tagsList() {
            return this.$store.state.tagsList.map(item => item.name);
        },
        collapse() {
            return this.$store.state.collapse;
        }
    }
};
</script>
