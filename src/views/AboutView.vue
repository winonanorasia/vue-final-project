<template>

  <section id="about" class="overflow-hidden">
    <div class="container">
      <div class="container-fluid about mt-5 mb-5 text-center">
        <div class="row">
          <div class="col-12">
            <h3>About Us</h3>
            <span>Hello everybody. Founded in pandemic year, Fashion Shop comes with a variety of kind and sweet colors as a characteristic of Muslim women who always spread kindness</span>
            <div class="mt-5 mb-2">
              <button class="button-secondary rounded-pill">Our Summary</button>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="aboutcard d-lg-flex align-items-center mx-auto">
          <div class="col-md-6 mx-auto my-auto">
            <div class="imgcard">
              <img src="/assets/img/store1.png"/>
            </div>
          </div>
  
          <div class="col-md-6 mx-auto my-auto">
            <span>Fashion Shophood always inspires us to present a comfortable hijab daily and many color choices that can express Fashion Storehood days.
            Express your day with Fashion colors</span><br><br>
            <h3>Vision</h3>
            <span>Fashion Shop has established itself as a special store for Muslim women to make it easier for consumers to shop, which is based in Sidoarjo and will continue throughout the world and even the world.
            Fashion Shop is also an online store that is able to give the impression of being satisfied and comfortable in the hearts of its customers and so that consumers will continue to buy and become loyal customers</span><br><br>
            <h3>Mission</h3>
            <span><li>Customer satisfaction is our main goal</li>
            <li>Make it easier for Muslim women who have a lot of busyness and activities to make it easier for them to shop</li>
            <li>Able to provide a variety of clothing choices that always follow current trends</li>
            <li>By providing the best service for customers, in the form of convenience in shopping and guaranteed quality of products and goods at comparative prices</li>
            <li>Continue to develop networks and relationships to attract consumers to be interested in shopping at the Fashion Shop online or come directly to the store</li></span>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12 mb-5 text-center team">
          <h3>Our team</h3>
          <span>Dedicated to Muslim women with good quality and affordable prices</span> 
        </div>
        
        <div class="teamcard d-lg-flex mx-auto align-items-center">
          <div class="col-md-3 text-center">
            <CardTeam name="Putri Shalihah" tittle="CEO" :image="'/assets/img/ceo.jpg'" />
          </div>

          <div class="col-md-3 text-center">
            <CardTeam name="Rachel Madeline" tittle="CFO" :image="'/assets/img/cfo.jpg'" />
          </div>

          <div class="col-md-3 text-center">
            <CardTeam name="Nadia Ayu" tittle="Branch Manager Area I" :image="'/assets/img/manager.jpg'" />
          </div>

          <div class="col-md-3 text-center">
            <CardTeam name="Cantika Shafiyyah" tittle="Branch Manager Area II" :image="'assets/img/test1.jpg'" />
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
      document.title = "About us";
    },
    components: {
    CardTeam
  }
}
</script>
