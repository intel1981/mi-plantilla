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
					:items="escuelas"
					class="elevation-1">
						<template slot="items" slot-scope="props">              
							<td class="text-xs-right">{{ props.item.posicion }}</td>
              <td>{{ props.item.escuela }}</td>
              <td class="text-xs-center">{{ props.item.clave }}</td>              
              <td class="text-xs-center">{{ props.item.nivel }}</td>
              <td class="text-xs-center">{{ props.item.turno }}</td>             
              <td class="text-xs-center">{{ props.item.status }}</td>
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
          {text: '#', value: 'posicion', sortable: false, width: '5%'},
          {text: 'Escuela', value: 'escuela', align: 'left', sortable: false, width: '60%'},          
          {text: 'CCT', value: 'clave', align: 'center', sortable: false, width: '5%'},          
          {text: 'Nivel', value: 'nivel', align: 'center', sortable: false, width: '20%'},
          {text: 'Turno', value: 'turno',  align: 'center', sortable: false, width: '5%'},         
          {text: 'Estado', value: 'status', align: 'center', sortable: false, width: '5%'}
        ],
        escuelas: [
          {
            posicion: '1',
            clave:'23DCM0033Z',
            escuela:'Centro de Estudios Tecnológicos del Mar Num. 33',
            nivel:'Media Superior',
            turno:'Matutino',            
            status: true
          },
          {
            posicion: '2',
            clave:'23DCM0033Z',
            escuela:'Centro de Estudios Tecnológicos del Mar Num. 33',
            nivel:'Media Superior',
            turno:'Vespertino',            
            status: true
          },
          {
            posicion: '3',
            clave:'23DCT0159Q',
            escuela:'Centro de Bachillerato Tecnológico Industrial y de Servicios Num. 28',
            nivel:'Media Superior',
            turno:'Matutino',            
            status: true
          },
          {
            posicion: '4',
            clave:'23DCT0159Q',
            escuela:'Centro de Bachillerato Tecnológico Industrial y de Servicios Num. 28',
            nivel:'Media Superior',
            turno:'Vespertino',           
            status: true
          }
        ]
      }
    }
}
</script>

<style scoped>

</style>