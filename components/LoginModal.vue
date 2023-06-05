<script setup lang='ts'>
const props = defineProps<{
  isOpen: boolean
  onClose: () => void
}>()

const supabase = useSupabaseClient()
const router = useRouter()

const loginForm = reactive({
  email: '',
  password: '',
})

const registerModal = useRegisterModal()

function toggleModal() {
  registerModal.value = true
  props.onClose()
}

async function handleSubmit() {
  if (loginForm.email && loginForm.password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginForm.email,
        password: loginForm.password,
      })
      if (error) {
        alert(error.message)
        throw error
      }
      else {
        alert('Login Success!')
        router.push('/dashboard')
        props.onClose()
      }
    }
    catch (error) {
      console.error(error)
      throw error
    }
  }
  else { alert('Please Input Email and Password') }
}
</script>

<template>
  <BasicModal :is-open="isOpen" title="Sign In" @close="onClose">
    <div class="mt-4">
      <form class="space-y-6" @submit.prevent="handleSubmit">
        <BasicInput
          id="email"
          v-model="loginForm.email"
          label="Email Address"
          required
          type="email"
        />
        <BasicInput
          id="password"
          v-model="loginForm.password"
          label="Password"
          required
          type="password"
        />
        <BasicButton type="submit">
          Sign In
        </BasicButton>
      </form>
      <div class="mt-4 flex items-center justify-between text-sm">
        <button class="hover:underline hover:text-sky-500" @click="toggleModal">
          Sign Up
        </button>
        <button>Forget Password?</button>
      </div>
    </div>
  </BasicModal>
</template>
