<script setup lang="ts">
import { createErrorHandler, createSubmitHandler, useForm } from '@vue-hooks-form/core'
import { useZodResolver } from '@vue-hooks-form/zod'
import { z } from 'zod'

const zodSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
})

const {
  register,
  formState: { errors },
  isExistInErrors,
  handleSubmit,
} = useForm({
  mode: 'onChange',
  resolver: useZodResolver(zodSchema),
})

const onSubmit = createSubmitHandler((data: any) => {
  alert('submit success')
})

const onError = createErrorHandler((errors: any) => {
  alert('submit failed')
})
</script>

<template>
  {{ errors }}
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    name: <input :="register('name')">
    <button type="submit">
      submit
    </button>
  </form>
</template>
