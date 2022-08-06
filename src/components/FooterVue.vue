<template>
    <footer class="d-flex align-items-center position-relative">
        <div class="container-fluid">
        <div class="container">
            <div class="row">
            <div class="col-md-7 logo d-flex align-items-center">
                <img src="/assets/img/fashion-shop-luxury.jpg" width="100" alt="">
                <a href="#" class="ms-2"><h5>Fashion Shop</h5></a>
            </div>
            <div class="link col-md-5 d-flex justify-content-evenly">
                <router-link to="/">Home</router-link>
                <router-link to="/pricing">Member</router-link>
                <router-link to="/gallery">Gallery</router-link>
                <router-link to="/contact">Contact</router-link>
                <router-link to="/about">About</router-link>
            </div>
            </div>
            <div class="row position-absolute copyright start-50 translate-middle text-center">
            <p>Copyright &copy;Fashion Shop All Right Reserved.</p>
            </div>
        </div>
        </div>
    </footer>
</template>