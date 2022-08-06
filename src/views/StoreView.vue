<template>

  <section id="ourstore" class="overflow-hidden">
    <div class="container">
      <div class="container-fluid ourstore mt-5 mb-5 text-center">
        <div class="row">
          <div class="col-12">
            <h3>Welcome to Fashion Shop Store</h3>
            <span>Hello everybody. Founded in pandemic year, Fashion Shop comes with a variety of kind and sweet colors as a characteristic of Muslim women who always spread kindness</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="storecard d-lg-flex align-items-center mx-auto">
          <div class="col-md-6 mx-auto my-auto">
            <div class="imgcard">
              <img src="/assets/img/store2.png"/>
            </div>
          </div>
  
          <div class="col-md-6 mx-auto my-auto">
            <span>Fashion Shop hood is a Fashion Shop call to friends who have faithfully accompanied our journey to this day. Fashion Shop hood always enliven, involved directly or indirectly in every event that exists.
            <br><br>Come and be a part of the Fashion Shop hood by using Fashion Shop products and tag your best photos on Instagram @fashionshop and @fashionshophood, you who are lucky will Minshop repost on the Fashion Shop website and will get a 10% discount. Minshop waiting for your photo</span>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 mb-5 text-center team">
          <h3>Branch Office</h3>
          <span>We've branch office in several regions in Indonesia, especially in East Java and Central Java </span> 
        </div>
        
        <div class="teamcard d-lg-flex mx-auto align-items-center">
          <div class="col-md-3 text-center">
            <CardTeam name="Surabaya" tittle="2 kantor cabang" :image="'/assets/img/surabaya.png'" />
          </div>

          <div class="col-md-3 text-center">
            <CardTeam name="Malang" tittle="2 kantor cabang" :image="'/assets/img/malang.png'" />
          </div>

          <div class="col-md-3 text-center">
            <CardTeam name="Kediri" tittle="1 kantor cabang" :image="'/assets/img/kediri.png'" />
          </div>

          <div class="col-md-3 text-center">
            <CardTeam name="Semarang" tittle="3 kantor cabang" :image="'assets/img/semarang.png'" />
          </div>
        </div>

      </div>

      
    </div>
  </section>

</template>

<script>
import CardTeam from '@/components/CardTeam.vue'

export default {
    setup() {
    },
    mounted() {
      document.title = "Our Store";
    },
    components: {
    CardTeam
  }
}
</script>
