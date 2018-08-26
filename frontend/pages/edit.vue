<template>
  <edit-user></edit-user>
</template>

<script>
import editUser from '~/components/edit-user.vue'

export default {
	middleware: 'auth',
	layout: 'complex',
	components: {
    editUser
  },
}
</script>

<style>
</style>
