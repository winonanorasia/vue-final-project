<template>
    <div class="price-card text-center">
        <div class="circle-icon position-relative mx-auto">
            <img :src="`${image}`" alt="" class="position-absolute top-50 start-50 translate-middle">
        </div>
            <p>{{plan}}</p>
            <h2>{{price}}</h2>
            <h3 class="mt-4">{{title}}</h3>
            <li>Promo (All Member)</li>
            <li>Partner (All Member)</li>
            <li>CS Prioritas (Platinum)</li>
            <li>Promo Ekslusif (Platinum)</li>
            <li>Catatan Belanja (All Member)</li>
            <li>Brand Membership (All Member)</li>
            <li>Voucher Ulang Tahun (Platinum)</li>
            <li>Voucher Gratis Ongkir (All Member)</li>
        <div>
            <button class="btn-submit rounded-pill mt-3">Choose plan</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['plan', 'image', 'price', 'title']
}
</script>
