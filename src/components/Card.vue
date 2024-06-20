<template>
    <div class="card">
      <p class="card-title"><img :src="time.team.logos[0].href" height="100px"></p>
      <p class="card-title">{{ times.nome }}</p>
      <ul class="card-description">
        <li>{{ times.idade }}</li>
        <li>{{ times.estaduais}}</li>
        <li>{{ times.brasileiros}}</li>
        <li>{{ times.libertadores}}</li>
        <li>{{ times.copabrasil}}</li>
        <li>{{ times.sulamericana}}</li>
        <li>{{ times.mundiais}}</li>
      </ul>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        type: Object,
        required: true
    }
}
</script>

<style>

</style>