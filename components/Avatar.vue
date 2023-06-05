<script setup lang='ts'>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const supabase = useSupabaseClient()
const router = useRouter()

async function handleSignOut() {
  const { error } = await supabase.auth.signOut()
  if (!error) {
    router.push('/')
    alert('Logout Success!')
  }
  else {
    alert(error.message)
  }
}
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton>
        <img
          src="/images/placeholder.jpg"
          alt="avatar"
          class="inline-block h-6 w-6 rounded-full ring-2 ring-white cursor-pointer"
        >
      </MenuButton>
    </div>
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              class="group flex w-full items-center rounded-md px-2 py-2 text-sm" :class="[
                active ? 'bg-sky-500 text-white' : 'text-gray-900',
              ]"
              @click="handleSignOut"
            >
              <Icon name="carbon:logout" class="mr-2 h-5 w-5 text-sky-400" aria-hidden="true" />
              Logout
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Transition>
  </Menu>
</template>
