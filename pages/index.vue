<template>
  <div class="home-wrapper">
    <section class="home-section">
      <div class="container">
        <div class="header-wrapper">
          <div class="icon-wrapper">
            <img class="icon-wrapper__item" src="~/assets/images/logo.svg" alt="Internet pela educação" />
            <h2 class="home-wrapper__title">Um movimento pela acesso ilimitado a conteúdos de educação</h2>
          </div>
          <iframe
            title="Internet pela Educação - Um movimento pelos estudantes"
            class="home-wrapper__video"
            type="text/html"
            src="https://www.youtube.com/embed/rHax1Pg-iSM"
            frameborder="0"
          />
        </div>

        <div class="content-wrapper">
          <div class="button-wrapper">
            <button class="button-wrapper__item button-wrapper__item--blue" @click="goToSignaturePage">
              <div class="button-wrapper__image">
                <i class="fas fa-book-open fa-lg"/>
              </div>
              Assine
            </button>
            <button class="button-wrapper__item button-wrapper__item--red">
              <div class="button-wrapper__image">
                <i class="fas fa-desktop fa-lg" />
              </div>
              Saiba mais
            </button>
          </div>
          <div class="information-wrapper">
            <div class="text-wrapper">
              <p>Total de {{ countSignatures }} assinaturas já realizadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="home-section home-section--blue">
      <div class="container">
        <div class="support-wrapper">
          <h1>Quem apoia</h1>
          <div class="sponsors-list">
            <img v-for="(item, index) in sponsors" :key="index" :src="item.data.src" :alt="item.data.alt">
          </div>
        </div>
      </div>
    </section>
    <section class="home-section">
      <div class="container">
        <div class="share-wrapper">
          <h1>Compartilhe</h1>
          <div class="social-media-wrapper">
            <i class="fab fa-facebook fa-4x" />
            <i class="fab fa-twitter fa-4x" />
            <i class="fab fa-whatsapp fa-4x" />
            <i class="fab fa-linkedin fa-4x" />
          </div>
        </div>
      </div>
    </section>
    <section class="home-section home-section--blue">
      <div class="container">
        <div class="logo-wrapper">
          <img width="200" src="https://d335luupugsy2.cloudfront.net/cms/files/48377/1595364057/$xk5y4cl99e" alt="Quero Educação">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countSignatures: 0,
      sponsors: [],
    }
  },
  mounted() {
    this.getSignatureCount();
    this.getSponsors();
  },
  methods: {
    goToSignaturePage() {
      this.$router.push('/signature');
    },
    getSignatureCount() {
      this.$axios.get('/.netlify/functions/count-signature')
      .then(({ data }) => {
        this.countSignatures = data;
      });
    },
    getSponsors() {
      this.$axios.get('/.netlify/functions/select-all-sponsors')
      .then(({ data }) => {
        this.sponsors = data;
      });
    },
  }
}
</script>

<style>

.home-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2rem;
}

.home-section {
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
}

.home-section--blue {
  background-color: #002850;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home-wrapper__title {
  color: #406FFC;
  margin-top: 0.5rem;
  text-align: start;
}

.home-wrapper__video {
  height: 300px;
  width: 100%;
}

.button-wrapper {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
}

.button-wrapper__item {
  align-items: center;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: bold;
  height: 10rem;
  justify-content: space-between;
  padding: 1rem;
  text-decoration: none;
  transition: background-color .2s;
  width: 12rem;
}

.button-wrapper__item--blue {
  background-color: #406FFC;
}

.button-wrapper__item--red {
  background-color: #FCCFD2;
}

.button-wrapper__item--blue:hover {
  background-color: #3963e2;
}

.button-wrapper__item--red:hover {
  background-color: #e2babd;
}

.button-wrapper__image {
  align-items: flex-start;
  display: flex;
  padding: 0.5rem 0 0 0.5rem;
  width: 100%;
}

.information-wrapper {
  align-items: center;
  color: #406FFC;
  display: flex;
  font-size: 1rem;
  flex-direction: column;
  padding-top: 1rem;
}

.social-media-wrapper {
  color: #002850;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
}

.social-media-wrapper i {
  cursor: pointer;
}

.support-wrapper {
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sponsors-list {
  margin-top: 1rem;
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
}

.sponsors-list__item {
  align-self: center;
  justify-self: center;
  width: 100%;
}

.share-wrapper {
  align-items: center;
  color: #002850;
  display: flex;
  flex-direction: column;
}

.logo-wrapper {
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .container {
    width: 768px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 992px;
  }
}

@media (min-width: 1200px) {
  .header-wrapper {
    display: flex;
    padding: 1rem;
  }

  .home-wrapper__title {
    font-size: 1.7rem;
  }

  .home-wrapper__video {
    width: 50%;
    height: 200px;
  }

  .icon-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .icon-wrapper__item {
    width: 80%;
  }

  .content-wrapper {
    display: flex;
  }

  .button-wrapper {
    justify-content: start;
    width: 60%;
  }

  .button-wrapper__item {
    height: 4rem;
    font-size: 1rem;
    flex-direction: row;
    justify-content: center;
  }

  .button-wrapper__item div {
    padding-right: 1rem;
  }

  .button-wrapper__item--blue {
    margin-right: 1rem;
  }

  .button-wrapper__image {
    padding: 0;
    width: auto;
    justify-content: center;
    align-items: center;
  }


  .information-wrapper {
    padding-top: 0;
    width: 40%;
  }

  .information-wrapper p {
    text-align: center;
  }

  .social-media-wrapper {
    padding-top: 0;
    padding-bottom: 0;
  }

  .sponsors-list__item {
    width: 65%;
  }
}

</style>
