export default {
    name: 'Card',
    props: {
        time: {
            tupe: Object,
            required: true
        }
    },
    template:`
    <div class="card">
      <p class="card-title"><img :src="time.team.logos[0].href" height="100px"></p>
      <p class="card-title">{{ time.team.name }}</p>
      <ul class="card-description">
        <li>{{ time.stats[10].value}}° Lugar</li>
        <li>{{ time.stats[3].value}} Pontos</li>
        <li>{{ time.stats[7].value}} Vitorias</li>
        <li>{{ time.stats[5].value}} Gols</li>
      </ul>
    </div>`
}