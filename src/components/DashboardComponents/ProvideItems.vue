<template>
  <main style="color:#927A7A">
    <div class="font-bold text-2xl text-center pt-4 underline">Provide Items</div>

    <div class="pt-8">
      <input
        class="bg-white focus:outline-none focus:shadow-outline border-2 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        placeholder="Item Category"
        style="border-color: #927A7A;"
      >
    </div>

    <div class="flex mt-6">
      <input
        class="w-1/3 mr-1 bg-white focus:outline-none focus:shadow-outline border-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
        placeholder="Item"
        style="border-color: #927A7A;"
      >
      <input
        class="w-1/3 mr-1 bg-white focus:outline-none focus:shadow-outline border-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
        placeholder="To"
        style="border-color: #927A7A;"
      >
      <input
        class="w-1/3 bg-white focus:outline-none focus:shadow-outline border-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
        placeholder="Quantity Available"
        style="border-color: #927A7A;"
      >
    </div>

    <textarea
      class="w-full h-24 rounded-lg mt-6 p-2 resize-y border rounded focus:outline-none focus:shadow-outline"
      placeholder="Item Description"
      style="border-color: #927A7A;"
    ></textarea>

    <div class="mt-6">
      <div class="inline-block relative w-1/3">
        <select
          class="rounded-lg block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          style="border-color:#927A7A;"
        >
          <option>Eligibility Constraints</option>
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

      <div class="float-right relative w-1/3">
        <select
          class="rounded-lg block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          style="border-color:#927A7A;"
        >
          <option>Location Constraints</option>
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
    </div>

    <div class="text-center mt-8">
      <button class="p-4 rounded-lg w-32" style="background:#3FC6F1">Submit</button>
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
