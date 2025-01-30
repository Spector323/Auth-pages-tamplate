<template>
    <header>
        <div class="container-header">
        <div class="cn-block">
            <router-link to="/home">Home</router-link>
            <router-link to="/users">Users</router-link>
            <router-link to="/profile">Profile</router-link>
        </div>
        </div>
    </header>
</template>

<script>
export default{
    
}
</script>

<style scoped>
    .container-header{
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .cn-block{
        display: flex;
        gap: 40px;
        font-size: 24px;
    }
</style>