<template>
  <div>
    <p>hello world</p>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: { },
  props: {},
  data: function() {
    return {
      visible: false
    };
  },
  computed: {},
  watch: {},
  created: function() {},
  mounted: function() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
