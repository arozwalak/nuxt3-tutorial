<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, in provident maxime harum tenetur asperiores sint, illum iure libero error obcaecati fugit officiis dolores. Corporis unde delectus ullam quis accusantium?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, in provident maxime harum tenetur asperiores sint, illum iure libero error obcaecati fugit officiis dolores. Corporis unde delectus ullam quis accusantium?</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    // const { data } = await useFetch('/api/ninja?name=mario', {
    //     method: 'post',
    //     body: { age: '35' }
    // })
    const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
    h2 {
        margin-bottom: 20x;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>