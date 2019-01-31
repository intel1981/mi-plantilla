<template>
	<v-container fluid>
		<v-layout row wrap>
			<v-flex xs10 offset-xs1>
				<v-toolbar dark color="blue" dense>
          <v-icon large color="white">ballot</v-icon>
          <v-toolbar-title>Escuelas</v-toolbar-title>
        </v-toolbar>
					<v-data-table
					:headers="headers"
					:items="desserts"
					class="elevation-1">
						<template slot="items" slot-scope="props">
							<td>{{ props.item.name }}</td>
						</template>
					</v-data-table>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
  name: "Escuela",
  data () {
      return {
        headers: [
          {
            text: 'Nombre',
            align: 'left',
            sortable: false,
            value: 'name'
          }
        ],
        desserts: [
          {
            name: 'Centro De Atención Para Estudiantes Con Discapacidad'
          },
          {
            name: 'Centro de Bachillerato Técnologico Industrial Y De Servicios Num. 28'
          }
        ]
      }
    }
}
</script>

<style scoped>

</style>