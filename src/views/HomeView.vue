<template>
  <main class="main">
    <section class="promo center">
      <div class="wrapper__projects">
        <h2 class="heading heading__promo">Let Your Home<br>Be Unique</h2>
        <p class="desc desc__promo">There are many variations of<br>the passages of lorem Ipsum fromavailable, majority.
        </p>
        <a href="#" class="btn">
          Get Started
          <img src="../assets/img/Vector.svg" width="15px" height="13px" alt="arrow" class="arrow__btn">
        </a>
      </div>
    </section>

    <section class="projects center">
      <h2 class="heading heading__projects">Follow Our Projects</h2>
      <p class="desc desc__projects">It is a long established fact that a reader will be distracted by the of readable
        <br>content of page lookings at its layouts points.
      </p>
      <div class="card__wrapper">
        <div class="card">
          <img src="../assets/img/card1.jpg" width="548px" height="525px" alt="Desc and chair" class="img__card">
          <div class="card__wrapper">
            <div class="card__subwrapper">
              <h3 class="subheading subheading__card">Modern Kitchan</h3>
              <p class="breadcrumbs">Decor / Artchitecture</p>
            </div>
            <a href="#">
              <img src="../assets/img/arrow.svg" width="52px" height="52px" alt="arrow" class="arrow__card">
            </a>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/card2.jpg" width="548px" height="525px" alt="Desc and chair" class="img__card">
          <div class="card__wrapper">
            <div class="card__subwrapper">
              <h3 class="subheading subheading__card">Modern Kitchan</h3>
              <p class="breadcrumbs">Decor / Artchitecture</p>
            </div>
            <a href="#">
              <img src="../assets/img/arrow.svg" width="52px" height="52px" alt="arrow" class="arrow__card">
            </a>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/card3.jpg" width="548px" height="525px" alt="Desc and chair" class="img__card">
          <div class="card__wrapper">
            <div class="card__subwrapper">
              <h3 class="subheading subheading__card">Modern Kitchan</h3>
              <p class="breadcrumbs">Decor / Artchitecture</p>
            </div>
            <a href="#">
              <img src="../assets/img/arrow.svg" width="52px" height="52px" alt="arrow" class="arrow__card">
            </a>
          </div>
        </div>
        <div class="card">
          <img src="../assets/img/card4.jpg" width="548px" height="525px" alt="Desc and chair" class="img__card">
          <div class="card__wrapper">
            <div class="card__subwrapper">
              <h3 class="subheading subheading__card">Modern Kitchan</h3>
              <p class="breadcrumbs">Decor / Artchitecture</p>
            </div>
            <a href="#">
              <img src="../assets/img/arrow.svg" width="52px" height="52px" alt="arrow" class="arrow__card">
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="indicators center">
      <div class="indicator">
        <p class="num__indicator">12</p>
        <p class="desc__indicator">Years Of Experiance</p>
      </div>
      <div class="band"></div>
      <div class="indicator">
        <p class="num__indicator">85</p>
        <p class="desc__indicator">Success Project</p>
      </div>
      <div class="band"></div>
      <div class="indicator">
        <p class="num__indicator">15</p>
        <p class="desc__indicator">Years Of Experiance</p>
      </div>
      <div class="band"></div>
      <div class="indicator">
        <p class="num__indicator">95</p>
        <p class="desc__indicator">Happy CUstomers</p>
      </div>
    </section>

    <section class="articles center">
      <h2 class="heading heading__projects">Articles & News</h2>
      <p class="desc desc__projects">It is a long established fact that a reader will be distracted by the of readable
        content
        <br>of a page when lookings at its layouts the points of using.
      </p>
      <div class="articles__wrapper">
        <div class="article">
          <img src="../assets/img/article1.jpg" alt="Kitchan" class="img__article">
          <h3 class="subheading subheading__article">Let’s Get Solution For<br>Building Construction<br>Work
          </h3>
          <div class="article__wrapper">
            <p class="date">26 December,2022</p>
            <a href="#">
              <img src="../assets/img/arrow.svg" width="52px" height="52px" alt="arrow" class="arrow__article">
            </a>
          </div>
        </div>
        <div class="article  article_dark">
          <img src="../assets/img/article2.jpg" alt="Flat" class="img__article">
          <h3 class="subheading subheading__article">Low Cost Latest Invented<br>Interior Designing<br>Ideas.
          </h3>
          <div class="article__wrapper">
            <p class="date">22 December,2022</p>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                <circle cx="26" cy="26.267" r="26" fill="white" />
                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
        <div class="article">
          <img src="../assets/img/article3.jpg" alt="Interior" class="img__article">
          <h3 class="subheading subheading__article">Best For Any Office &<br>Business Interior<br>Solution
          </h3>
          <div class="article__wrapper">
            <p class="date">25 December,2022</p>
            <a href="#">
              <img src="../assets/img/arrow.svg" width="52px" height="52px" alt="arrow" class="arrow__article">
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style  lang="scss">
* {
  margin: 0;
  padding: 0;
}

.page-body {
  font-family: 'Jost', sans-serif;
  color: #292F36;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style-type: none;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.heading,
.num__indicator,
.subheading {
  font-family: 'DM Serif Display', serif;
  font-weight: inherit;
}

.header {
  display: flex;
  justify-content: space-between;
  padding-top: 61px;
  padding-bottom: 57px;
}

.logo {
  display: flex;
  gap: 10px;
}

.nav__header {
  display: flex;
  justify-content: space-between;
  width: 243px;
  font-size: 20px;
}

.promo {
  background-image: url(../assets/img/banner.jpg);
  min-height: 758px;
  background-position: center;
  background-repeat: no-repeat;
}

.wrapper__projects {
  padding-top: 208px;
  padding-left: 90px;
}

.heading__promo {
  padding-bottom: 18px;
  font-size: 65px;
  line-height: 80px;
}

.desc {
  color: #4D5053;

  &__promo {
    margin-bottom: 21px;
  }
}

.btn {
  padding: 26px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 221px;
  border-radius: 18px;
  background: #292F36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  color: #FFF;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.36px;
}

.arrow__btn {
  margin-left: 5px;
}

.projects {
  padding-top: 96px;
  padding-bottom: 101px;
}

.heading__projects {
  text-align: center;
  font-size: 50px;
  font-style: normal;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.desc__projects {
  text-align: center;
  line-height: 150%;
  letter-spacing: 0.22px;
  margin-bottom: 93px;
}

.card__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 56px;
}

.img__card {
  margin-bottom: 24px;
}

.subheading__card {
  font-size: 25px;
  letter-spacing: 0.5px;
}

.breadcrumbs {
  color: #4D5053;
  line-height: 150%;
}

.indicators {
  padding: 151px inherit;
  display: flex;
  background: #F4F0EC;
  justify-content: space-around;
  color: #4D5053;
  line-height: 150%;
}

.num__indicator {
  color: #CDA274;
  font-size: 85px;
  letter-spacing: 1.7px;
  margin-bottom: 45px;
  text-align: center;
}

.top__blog {
  height: 356px;
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
  background-image: url(../assets/img/top__blog.jpg);
  position: relative;
  margin-bottom: 200px;
}

.top__blog-details {
  background-image: url(../assets/img/top__blog-details.jpg);
}

.wrapper__blog {
  position: absolute;
  bottom: 0;
  left: calc(50% - 250px);
  padding: 41px 78px;
  border-radius: 37px 37px 0px 0px;
  background: #FFF;
}

.heading__blog {
  font-size: 50px;
  padding-bottom: 15px;
}

.breadcrumbs__blog {
  color: #4D5053;
  line-height: 150%;
  text-align: center;
}

.heading__latest {
  margin-bottom: 27px;
}

.wrapper__latest {
  padding: 22px;
  border-radius: 62px;
  border: 1px solid #E7E7E7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  display: flex;
  gap: 65px;
  align-items: center;
}

.subheading__latest {
  margin-bottom: 22px;
}

.desc__latest {
  line-height: 150%;
  color: #4D5053;
}

.desc__bottom {
  margin-top: 30px;
  margin-bottom: 51px;
}

.band {
  background-color: #CDA274;
  width: 1px;
  height: 130px;
}

.articles {
  padding-top: 96px;
  padding-bottom: 96px;
}

.heading__articles_blog {
  margin-bottom: 30px;
}

.articles__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 27px;
}

.article {
  border: 1px solid #E7E7E7;
  padding: 21px;
  border-radius: 62px;
  width: 382px;
  box-sizing: border-box;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}

.img__article {
  margin-bottom: 21px;
  position: relative;
  color: #CDA274;
  border-radius: 50px 50px 0px 0px;
}

.subheading__article {
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 30px;
  max-width: 260px;
}

.article__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.article_dark {
  background: #F4F0EC;
}

.desc__article {
  color: #4D5053;
  font-family: Jost;
  font-size: 16px;
  line-height: 150%;
  /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
  background-color: #fff;
  padding: 8px;
  border-radius: 8px 8px 8px 0px;
  position: absolute;
  margin-left: 18px;
  top: 3595px;

}

.date {
  color: #4D5053;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.16px;
  text-transform: capitalize;
}

.pagination {
  margin-top: 51px;
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 104px;
}

.footer {
  display: flex;
  gap: 101px;
  padding-bottom: 140px;
  color: #4D5053;
  line-height: 150%;
  /* 33px */
  letter-spacing: 0.22px;
}

.heading__logo {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 50px */
}

.desc__logo {
  margin-top: 25px;
  margin-bottom: 25px;
}

.subheading__footer {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  /* 31.25px */
}

.social {
  display: flex;
  gap: 54px;
}

.nav {
  display: grid;
  gap: 25px;

  .nav_list {
    display: grid;
    gap: 25px;
  }
}

.contact {
  margin-left: 282px;
}
</style>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  }
}
</script>
