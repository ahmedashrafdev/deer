<template>
  <section id="banner">
    <div class="container">
      <div class="banner">
        <div class="banner__image">
          <a href="saveumoney.co" target="_blank"
            ><img
              src="http://demo.towerthemes.com/tt_koparion/image/catalog/cmsblock/img-top-skybook1.jpg"
              alt="Sum"
            /><span class="text">
              <span class="text1"
                >G. Meyer Books &amp; Spiritual Traveler Press</span
              >
              <span class="text2">Sale up to 30% off</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>
<style scoped>
.banner {
  width: 100%;
  overflow: hidden;
}
.banner__image {
  position: relative;
}
.banner__image img {
  width: 100%;
  transition: all 300ms ease-in;
}

.text {
  position: absolute;
  left: 5%;
  top: 50%;
  z-index: 2;
  color: #fff;
  text-align: center;
  transform: translateY(-50%);
}

.text .text1 {
  font-weight: 700;
  font-size: 20px;
  text-transform: capitalize;
  color: #fff;
  display: block;
  line-height: 1;
  margin-bottom: 7px;
}
.text .text2 {
  font-size: 28px;
  line-height: 1;
  text-transform: uppercase;
  display: block;
  color: #fff;
  margin-right: -218px;
}

.banner__image a::before {
  content: '';
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.banner__image:hover a::before {
  opacity: 1;
}

.banner__image:hover img {
  transform: scale3d(1.05, 1.05, 1.05);
}
@media (max-width: 991px) {
  .text .text1 {
    font-size: 16px;
  }
  .text .text2 {
    font-size: 20px;
    margin-right: -170px;
  }
}
@media (max-width: 479px) {
  .text .text1 {
    font-size: 10px;
    margin-bottom: 3px;
  }
  .text .text2 {
    font-size: 12px;
    margin-right: 0;
  }
}
</style>
