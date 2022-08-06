<template>
  <HeroVue/>
  <section id="catalog">
    <div class="container">
        <div class="row mt-4">
          <div class="col-12 text-center">
            <h2>Our Catalog</h2>
            <span class="subtitle">Fashion Store comes with a variety of kind and sweet colors as a characteristic of Muslim women who always spread kindness</span>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-3 text-center">
            <CatalogVue title="Outfit" desc="consists of blouse, dress, jacket, tunic, skirt, pajama, shirt, sweater, tops, pants, and one set" :image="'/assets/img/dress.png'"/>
          </div>
          <div class="col-md-3 text-center">
            <CatalogVue title="Accessoris" desc="consists of bag, gift box, masker, scrunchie, and headloop masker" :image="'/assets/img/accessoris.png'"/>
          </div>
          <div class="col-md-3 text-center">
            <CatalogVue title="Hijab Daily" desc="consists of plain square, voal square, ironless square, plain pashimina, voal pashmina, texture pashmina, ironless pashimina, bergo, khimar, syari" :image="'/assets/img/hijab-logo.png'"/>
          </div>
          <div class="col-md-3 text-center">
            <CatalogVue title="Prayer Set (Mukena)" desc="consists of mecca prayer set, medinah prayer set and meeda prayer set" :image="'/assets/img/mukena.png'"/>
          </div>
        </div>
    </div>
  </section>
  <SearchVue/>
  <section id="ourdesign">
    <div class="container-fluid mb-5">
      <div class="container position-relative">
          <div class="position-absolute top-50 start-0">
            <h2>Our Product</h2>
          </div>
          <div class="position-absolute top-50 end-0 mt-3">
            <router-link to="/gallery">
              <button class="button-secondary rounded-pill">More ></button>
            </router-link>
          </div>
      </div>
    </div>
    <div class="container mt-2 mb-2">
      <div class="ms-5 me-5">
        <CardDesign/>
      </div>
    </div>
  </section>
  <section id="review">
    <div class="container-fluid overlay h-100 position-relative">
      <div class="container">
        <div class="row">
          <div class="col-md-6 slide-review position-absolute top-50 start-0 translate-middle-y mx-auto w-50">
            <ReviewVue/>
          </div>
          <div class="col-md-6 our-review position-absolute top-50 end-0 translate-middle-y w-50 ms-3 me-5">
            <h2>What they says?</h2>
            <span>Good product is finding that perfect balance between the way something looks and how it functions.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ContactVue/>
</template>

<script>
// @ is an alias to /src
import HeroVue from '@/components/HeroVue.vue'
import CatalogVue from '@/components/CatalogVue.vue'
import SearchVue from '@/components/SearchVue.vue'
import ContactVue from '@/components/ContactVue.vue'
import CardDesign from '@/components/CardDesign.vue'
import ReviewVue from '@/components/ReviewVue.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      web_name : "Fashion Shop"
    }
  },
  mounted() {
    document.title = "Fashion Shop";
  },
  components: {
    HeroVue,
    CatalogVue,
    SearchVue,
    ContactVue,
    CardDesign,
    ReviewVue
  }
}
</script>
