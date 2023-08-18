<template>
    <div class="card">
        <slot/>
    </div>
</template>
<style scoped>
.card {
    width: 540px;
    height: 415px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 1px 1px 2px  rgba(82, 90, 102, 0.1), 2px 2px 8px  rgba(82, 90, 102, 0.15);
    margin: 20px;
}
</style>