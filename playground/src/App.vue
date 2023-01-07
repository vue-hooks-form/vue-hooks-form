<script setup lang="ts">
import { createErrorHandler, createSubmitHandler, useForm } from '@vue-hooks-form/core'

const {
  register,
  formState: { errors },
  isExistInErrors,
  handleSubmit,
} = useForm({
  mode: 'onChange'
})

const onSubmit = createSubmitHandler((data:any) => {
  alert('submit success')
})

const onError = createErrorHandler((errors:any) => {
  alert('submit failed')
})
</script>
<template>
  {{ errors }}
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    name: <input :="register('name', { required: true })"/>
    <button type="submit">submit</button>
  </form>
</template>
