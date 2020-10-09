<template>
  <main style="color:#927A7A">
    <div class="font-bold text-2xl text-center pt-4 underline">Pending Items</div>
    <div class="ml-4 mr-4 mt-4 border-2 rounded-lg" style="border-color:#927A7A;">
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

        <div class="w-1/4 pt-20">
          <button
            class="text-white p-2 mr-2 w-24 rounded-lg float-right"
            style="background:#3FC6F1;"
          >Track</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "OffersForMe",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
