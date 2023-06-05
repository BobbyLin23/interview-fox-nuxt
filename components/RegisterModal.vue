<script setup lang='ts'>
const props = defineProps<{
  isOpen: boolean
  onClose: () => void
}>()

const loginModal = useLoginModal()

const supabase = useSupabaseClient()
const router = useRouter()

const registerForm = reactive({
  email: '',
  username: '',
  password: '',
})

function toggleModal() {
  loginModal.value = true
  props.onClose()
}

async function handleSubmit() {
  if (registerForm.email && registerForm.password && registerForm.username) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: registerForm.email,
        password: registerForm.password,
        options: {
          data: { username: registerForm.username },
        },
      })
      if (error) {
        alert(error.message)
        throw error
      }
      else {
        alert('Sign Up Success!')
        router.push('/dashboard')
        props.onClose()
      }
    }
    catch (error) {
      console.error(error)
    }
  }
}
</script>

<template>
  <BasicModal :is-open="isOpen" title="Sign Up" @close="onClose">
    <div class="mt-4">
      <form class="space-y-6" @submit.prevent="handleSubmit">
        <BasicInput
          id="email"
          v-model="registerForm.username"
          label="Username"
          required
          type="email"
        />
        <BasicInput
          id="username"
          v-model="registerForm.username"
          label="Username"
          required
        />
        <BasicInput
          id="password"
          v-model="registerForm.password"
          label="Password"
          required
          type="password"
        />
        <div>
          <BasicButton type="submit">
            Sign Up
          </BasicButton>
        </div>
      </form>
      <div class="mt-4 flex items-center justify-center gap-2 text-sm">
        <span>Already have an account?</span>
        <button class="text-sky-500 hover:underline hover:text-sky-300" @click="toggleModal">
          Sign In
        </button>
      </div>
    </div>
  </BasicModal>
</template>
