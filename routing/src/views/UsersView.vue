<script setup>
import UserCard from '@/components/UserCard.vue';
import kjell from '@/assets/images/kjell.png'
import userData from "@/assets/data/users.json"
import { ref } from 'vue';
import UsersList from '@/components/UsersList.vue';

const users=ref(userData)

document.title="Users"
</script>
<template>
  <div class="users">
    <h1>Användarlista</h1>
    <UserCard :user="{id:1, namn:'Kjell',image:kjell}" />
    <UsersList :user-list="users" />
  </div>
</template>
<style scoped></style>
