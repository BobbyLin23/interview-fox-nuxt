<script setup lang='ts'>
const interviewSteps = useInterviewSteps()

function goNext() {
  interviewSteps.value = 2
}
</script>

<template>
  <div class="p-8">
    <form class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base font-semibold leading-7 text-gray-900">
          Preset
        </h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          This information will help your have a good interview experience.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="col-span-3">
            <label
              for="position"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Position
            </label>
            <div class="mt-2">
              <select
                id="position"
                name="poistion"
                autoComplete="position-name"
                class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>Front End Developer</option>
                <option>Back End Developer</option>
                <option>Full Stack Developer</option>
              </select>
            </div>
          </div>

          <div class="col-span-4">
            <label
              for="jd"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Job Description
            </label>
            <div class="mt-2">
              <textarea
                id="jd"
                name="jd"
                rows="8"
                class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            <p class="mt-3 text-sm leading-6 text-gray-600">
              Input the JD of the position you want to apply for.
            </p>
          </div>

          <div class="col-span-3">
            <label
              for="count"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Question Counts
            </label>
            <div class="mt-2">
              <input
                id="count"
                name="count"
                type="number"
                autoComplete="count"
                class="block w-1/2 rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
            </div>
          </div>
        </div>
        <div class="mt-12 w-1/6">
          <BasicButton class-name="mt-12" @click="goNext">
            Next
          </BasicButton>
        </div>
      </div>
    </form>
  </div>
</template>
