<template>
  <main style="background:#F2F2F2">
    <div class="p-8">
      <span class="font-bold text-2xl" style="color:#927A7A">Me2U</span>
      
      <span class="float-right pt-2 text-white">
        <button class="mr-4 w-40 h-8 rounded-lg font-bold" style="background:#3FC6F1;">About Me2U</button>
        <button class="ml-4 w-40 h-8 rounded-lg font-bold" style="background:#3FC6F1;">Login</button>
      </span>
    </div>

    <div class="p-8 mt-24">
      <div class="font-bold text-3xl" style="color:#927A7A">Targeted secure distribution</div>
      <div
        class="mt-4"
        style="color:#927A7A"
      >Me2U uses biometric technology to ensure secure distribution and provide reliable & scalable data analytics solution for report assessments.</div>
      <div class="mt-10">
        <button
          @click="$router.push({name:'Dashboard'})"
          class="p-2 rounded-lg text-white font-bold"
          style="background:#3FC6F1;"
        >Join Us</button>
      </div>
    </div>

    <hr class="mt-20 border-4 border-blue-300" style="background:#3FC6F1;">

    <div class="pl-8 inline-block" style="color:#927A7A;">
      <div class="mt-4 font-bold text-xl">Reach Us @</div>
      <div>+2348187155757</div>
      <div>me2udotorg@gmail.com</div>
    </div>

    <div class="pr-8 pt-6 float-right h-full" style="color:#927A7A;">
      <div class="mt-4 font-bold text-xl cursor-pointer">Learn More</div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Index",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
