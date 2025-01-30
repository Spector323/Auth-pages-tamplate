<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Authorization</h2>
      <form @submit.prevent="login">
        <label for="username">Login</label>
        <input v-model="username" type="text" id="username" required>

        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" required>

        <button type="submit">Submit</button>
      </form>
      <p v-if="error" class="error-message">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
          username: this.username,
          password: this.password
        });
        localStorage.setItem('token', response.data.accessToken);
        this.$router.push('/profile');
      } catch (err) {
        this.error = 'Invalid credentials';
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 360px;
  text-align: center;
}

h2 {
  margin-bottom: 15px;
  font-size: 20px;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

label {
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #555;
}

input {
  padding: 10px;
  border: 1px solid #fff;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  outline: none;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #333;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #666;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
