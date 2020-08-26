<template>
  <div class="home-wrapper">
    <div class="container">
      <img src="~/assets/images/logo.svg" />
      <h2 class="home-wrapper__title">Um movimento pela acesso ilimitado a conteúdos de educação</h2>
      <iframe
        class="home-wrapper__video"
        type="text/html"
        src="https://www.youtube.com/embed/rHax1Pg-iSM"
        frameborder="0"
      />

      <div class="button-wrapper">
        <button class="button-wrapper__item button-wrapper__item--blue">
          <div class="button-wrapper__image">
            <i class="fas fa-book-open fa-lg" />
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
        <p>Total de 285 assinaturas já realizadas</p>
        <p>Compartilhe!</p>
      </div>
      <div class="social-media-wrapper">
        <i class="fab fa-facebook fa-4x" />
        <i class="fab fa-twitter fa-4x" />
        <i class="fab fa-whatsapp fa-4x" />
        <i class="fab fa-linkedin fa-4x" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>

.home-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}

.home-wrapper__title {
  color: #406FFC;
  margin-top: 0.5rem;
  text-align: center;
}

.home-wrapper__video {
  height: 300px;
  margin-top: 1rem;
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
  justify-content: space-between;
  padding-top: 1rem;
}

.social-media-wrapper i {
  cursor: pointer;
}

</style>
