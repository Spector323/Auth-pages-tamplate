<template>
    <div class="container-main">
        <div class="cn-block">
            <div class="block-text">
                <h1>Home page </h1>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet <br>
                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam <br> 
                    consequat sunt nostrud amet.
                </p>
                <router-link to="/login">
                    <button class="text-btn">Authorization</button>
                </router-link>
                
            </div>
            <img src="../assets/tools.png" alt="" width="400px">
        </div>
    </div>
</template>

<script>
export default{
}
</script>

<style scoped>
.container-main{
    align-items: center;
    display: flex;
    justify-content: space-between;
}
.cn-block{
    display: flex;
    justify-content: space-between;
    gap: 200px;

}
.block-text{
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.text-btn {
  border: 1px solid transparent;
  width: 230px;
  height: 50px;
  font-size: 22px;
  font-weight: 500;
  font-family: inherit;
  background-color: #FF6464;
  color: #fff;
  cursor: pointer;
  transition: border-color 0.25s;
}
.text-btn:hover {
    background-color: rgb(255, 168, 168);
}

</style>