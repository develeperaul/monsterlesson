<template>
  <div>
    <McvTopBar/>
    <router-view/>
  </div>
  
</template>
<script>
import McvTopBar from '@/components/TopBar';
export default {
  name: 'McvApp',
  components: {
    McvTopBar
  }
}
</script>
<style>

</style>
