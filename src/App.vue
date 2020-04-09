<template>
  <div>{{hello}}</div>
</template>

<script>
import { HelloWorld } from "Service";

export default {
  name: "App",
  data: () => {
    return {
      hello: HelloWorld()
    };
  }
};
</script>

<style scoped>
/* scoped: all css is only available for this component */
</style>
