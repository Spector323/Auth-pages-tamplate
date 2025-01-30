<template>
  <div class="profile">
    <h1>My profile</h1>
    <div v-if="user" class="block-main">
      <div class="profile-bl">
        <p><strong>Username:</strong> {{ user.username }} </p>
        <p><strong>Name:</strong> {{ user.firstName }}</p>
        <p><strong>Lastname:</strong> {{ user.lastName }}</p>
        <p><strong>Gender:</strong> {{ user.gender }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
      </div>
      <img :src="user.image" alt="Аватар"  class="img-bl"/>
    </div>
    <p v-else-if="error" style="color: red;">{{ error }}</p>
    <p v-else>Загрузка данных...</p>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        user: null,
      };
    },
    async created() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.$router.push('/login');
        return;
      }
      const response = await fetch('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      this.user = data;
    },
  };
  </script>
  
  <style scoped>
  .profile {
    max-width: 800px;
    margin-inline: auto;
  }
  h1{
    text-align: center;
  }
  .block-main{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .profile-bl{
    display: flex;
    flex-direction: column;
  }
  .profile-bl p{
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 20px;
    max-width: max-content;
    padding: 10px 20px;
    border-radius: 10px;
  }
  .img-bl{
    width: 280px;
    height: 280px;
    border-radius: 50%;
    border: 1px solid #333;
  }
  </style>