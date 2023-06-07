<script setup lang='ts'>
import { Disclosure } from '@headlessui/vue'
import { twMerge } from 'tailwind-merge'

const route = useRoute()

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Interview', href: '/interview' },
  { name: 'Settings', href: '/settings' },
]
</script>

<template>
  <Disclosure>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between">
        <div className="flex">
          <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="twMerge('inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                              route.path === item.href ? 'border-slate-500 text-gray-900'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              )"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </Disclosure>
</template>
