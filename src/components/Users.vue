<template>
  <div class="users">
    <div v-if="users.length > 0" class="user-list">
      <div 
        v-for="(user, index) in visibleUsers" 
        :key="user.id" 
        class="user-card"
      >
        <p class="user-info">{{ user.firstName }} {{ user.lastName }}</p>
        <p class="user-email">{{ user.email }}</p>
      </div>

      <div v-if="users.length > 5" class="user-card toggle-card" @click="toggleShowAll">
        <p class="user-info">{{ showAll ? 'Скрыть' : '...' }}</p>
      </div>
    </div>
    <p v-else-if="error" style="color: red;">{{ error }}</p>
    <p v-else>Загрузка данных...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
      error: '',
      showAll: false
    };
  },
  computed: {
    visibleUsers() {
      return this.showAll ? this.users : this.users.slice(0, 5);
    }
  },
  async created() {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      this.users = response.data.users;
    } catch (err) {
      this.error = 'Ошибка при загрузке данных. Пожалуйста, попробуйте позже.';
    }
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
    }
  }
};
</script>

<style scoped>
.users {
  max-width: max-content;
  margin: 0 auto;
  padding: 20px;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.user-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.user-card:hover {
  border-color: #8B5CF6;
}

.user-info {
  font-size: 16px;
  color: #333;
  font-weight: 600;
  text-align: start;
}

.user-email {
  font-size: 14px;
  color: #999;
}

.toggle-card {
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  color: #666;
}
</style>
