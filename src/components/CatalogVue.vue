<template>
    <div class="catalog-card">
        <div class="circle-icon position-relative mx-auto">
            <img :src="`${image}`" alt="" class="position-absolute top-50 start-50 translate-middle">
        </div>
        <h3 class="mt-4">{{title}}</h3>
        <p class="mt-2">{{desc}}</p>
    </div>
</template>

<script>
export default {
        props: ['desc', 'title', 'image']
    }
</script>