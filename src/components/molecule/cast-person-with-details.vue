<template>
  <div class="cast-person-details" v-if="castDetails">
    <div class="cast-img">
      <img
        loading="lazy"
        :src="'https://image.tmdb.org/t/p/original' + castDetails.profile_path"
        alt=""
      />
    </div>
    <div class="cast-infos">
      <h2>{{ castDetails.name }}</h2>
      <p><strong>Data de nascimento:</strong> {{ birthday() }}</p>
      <p><strong>Cidade natal: </strong>{{ castDetails.place_of_birth }}</p>
      <p v-if="castDetails.biography">
        <strong>Biografia:</strong> {{ castDetails.biography }}
      </p>
      <div class="cast-links">
        <a
          class="average-rgb--border"
          :href="'https://www.imdb.com/name/' + castDetails.imdb_id"
        >
          Ver no IMDB
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CastDetails from "../../interfaces/cast-person-details-interface";

const props = defineProps<{ castDetails: CastDetails }>();

function birthday(): string {
  const data = new Date(props.castDetails.birthday);
  return data.toLocaleDateString();
}
</script>

<style scoped>
.cast-person-details {
  display: flex;
  flex-flow: column;
  padding: 40px 20px;
}
.cast-img {
  overflow: hidden;
  position: relative;
  display: block;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 200px;
  align-self: center;
}

.cast-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cast-infos {
  display: flex;
  flex-flow: column;
  gap: 10px;
}

.cast-links {
  display: flex;
  flex-flow: row wrap;
  gap: 20px;
}

@media (min-width: 768px) {
  .cast-person-details {
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 40px 20px;
    gap: 20px;
  }
  .cast-img {
    width: 330px;
  }
}
</style>