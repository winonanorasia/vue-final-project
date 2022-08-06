<template>
  <section id="member">
    <div class="container">
        <div class="row mt-4">
          <div class="col-12 text-center">
            <h2>Join us to become a member</h2>
            <span class="subtitle">become a member with many benefits</span>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-md-4">
            <CardPrice plan="Small" price="15 Pesanan atau Rp.500.000" title="Silver" :image="'/assets/img/icons8-flow-chart-96.png'"/>
          </div>
          
          <div class="col-md-4">
            <CardPrice plan="Medium" price="50 Pesanan atau Rp.3.000.000" title="Gold" :image="'/assets/img/icons8-mind-map-96.png'"/>
          </div>

          <div class="col-md-4">
            <CardPrice plan="Large" price="100 Pesanan atau Rp.10.000.000" title="Platinum" :image="'/assets/img/icons8-venn-diagram-96.png'"/>
          </div>
        </div>

        <div class="row mt-5 text-center">
          <div class="col-12">
            <p>Catatan: Hanya transaksi dan pesanan selesai yang terhitung dalam progres Fashion Shop Member</p>
          </div>
        </div>

    </div>
  </section>
  
</template>

<script>
import CardPrice from '@/components/CardPrice.vue'

export default {
    setup() {
    },
    mounted() {
      document.title = "Member Plan";
    },
    components: {
      CardPrice
  }
}
</script>