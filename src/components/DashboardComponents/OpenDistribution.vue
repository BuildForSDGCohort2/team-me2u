<template>
  <main>
    <div class="pl-16 pr-16 pt-8">
      <input
        class="bg-white focus:outline-none focus:shadow-outline border-2 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        placeholder="Seearch..."
        style="border-color: #927A7A;"
      >
    </div>
    <div class="text-center">
      Filter by:
      <svg
        class="inline-block"
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="#3FC6F1"></circle>
        <circle cx="15" cy="15" r="7.5" fill="white"></circle>
      </svg>
      <span class="mr-4">Government</span>
      
      <svg
        class="inline-block"
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="#3FC6F1"></circle>
        <circle cx="15" cy="15" r="7.5" fill="#C4C4C4"></circle>
      </svg>
      <span class="mr-4">Organizations</span>
      
      <svg
        class="inline-block"
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="#3FC6F1"></circle>
        <circle cx="15" cy="15" r="7.5" fill="#C4C4C4"></circle>
      </svg>
      <span class="mr-4">Individuals</span>
      
      <svg
        class="inline-block"
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="15" fill="#3FC6F1"></circle>
        <circle cx="15" cy="15" r="7.5" fill="#C4C4C4"></circle>
      </svg>
      <span class="mr-4">All</span>
    </div>

    <div
      v-for="n in count"
      :key="n"
      class="ml-4 mr-4 mt-4 border-2 rounded-lg"
      style="border-color:#927A7A; color:#927A7A"
    >
      <div class="inline-block pl-2 pr-2">
        <div>
          From:
          <span class="font-bold text-lg">Kwara State Government</span>
        </div>
        <div>
          Item:
          <span class="font-bold text-lg">Free Farm Seeds</span>
        </div>
      </div>
      <div class="float-right pl-2 pr-2">
        <div>
          To:
          <span class="font-bold text-lg">Farmers</span>
        </div>
        <div>
          Eligibility:
          <span class="font-bold text-lg">Farmers only</span>
        </div>
      </div>

      <hr class="mt-2 border-2" style="border-color:#927A7A; background:#927A7A;">

      <div class="flex p-1">
        <img class="w-1/4" src="../../assets/grains.jpg" alt="Image">

        <div class="w-3/4 h-full pl-1 pr-4">
          <div class="font-bold">Places Available:</div>
          <div class="inline-block relative w-full">
            <select
              class="rounded-lg block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              style="border-color:#927A7A;"
            >
              <option>Lagos, Nigeria</option>
              <option>Abia, Nigeria</option>
              <option>Adamawa, Nigeria</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 23 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.5003 19L0.674957 0.25L22.3256 0.25L11.5003 19Z" fill="#3FC6F1"></path>
              </svg>
            </div>
          </div>

          <div class="font-bold mt-10">Available from:</div>
          <div>March 5, 2021 - June 31 2021</div>
        </div>

        <div class="w-1/4 pt-16">
          <button
            class="text-white p-2 mr-2 w-24 rounded-lg float-right"
            style="background:#3FC6F1;"
          >Apply</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "OpenDistribution",
  props: {
    count: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
