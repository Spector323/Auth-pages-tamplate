<template>
    <footer>
        <div class="container-footer">
        <div class="cn-block">
            <div class="cn-img">
                <img src="../assets/fb.svg" alt="">
                <img src="../assets/insta.svg" alt="">
                <img src="../assets/Group.svg" alt="">
                <img src="../assets/Linkedin.svg" alt="">
            </div>
            <p>Copyright ©2020 All rights reserved </p>
        </div>
    </div>
    </footer>
</template>

<script>
export default{
    
}
</script>

<style scoped>
    .container-footer{
        display: flex;
        justify-content: center;
    }
    .cn-block{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .cn-img{
        display: flex;
        gap: 50px;
    }
</style>