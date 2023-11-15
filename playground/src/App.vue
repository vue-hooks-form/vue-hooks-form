<script setup lang="ts">
import { useZodResolver } from '@vue-hooks-form/zod'
import { z } from 'zod'
import { createErrorHandler, createSubmitHandler, useForm } from '../../packages/core/src/index'

const zodSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
})

const {
  register,
  formState,
  isExistInErrors,
  handleSubmit,
  reset,
} = useForm({
  mode: 'onSubmit',
  resolver: useZodResolver(zodSchema),
  defaultValues: {
    name: 'Elone',
  },
  onSuccessUpdateDefaultValues: true,
})

const onSubmit = createSubmitHandler((data: any) => {
  alert('submit success')
})

const onError = createErrorHandler((errors: any) => {
  alert('submit failed')
})
</script>

<template>
  {{ formState }}
  <form @submit.prevent="handleSubmit(onSubmit, onError)()">
    name: <input :="register('name')">
    <button type="submit">
      submit
    </button>
  </form>
  <button @click="reset()">
    Reset
  </button>
</template>
