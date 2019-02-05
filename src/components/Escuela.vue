<template>
	<v-container fluid>
		<v-layout row wrap>
			<v-flex xs10 offset-xs1>
				<v-toolbar dark color="blue" dense>
          <v-icon large color="white">ballot</v-icon>
          <v-toolbar-title>Escuelas</v-toolbar-title>
          <v-divider class="mx-2" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <v-btn slot="activator" fab dark small color="green">
              <v-icon dark>add</v-icon>
            </v-btn>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout row wrap>
                    Controles del formulario
                  </v-layout>                  
                </v-container>
              </v-card-text>
            </v-card>            
          </v-dialog>
          
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
              <td class="text-xs-center">
                <v-icon small color="green" v-if="props.item.status">done</v-icon>
                <v-icon v-else small color="red">clear</v-icon>
              </td>
              <td class="justify-center layout px-0">
                <v-icon small class="mr-2" color="indigo darken-1" @click="editItem(props.item)">
                  edit
                </v-icon>
                <v-icon small color="red darken-1">delete</v-icon>
              </td>
						</template>
					</v-data-table>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
  name: "Escuela",
  data: () => ({
    dialog: false,
    headers: [
          {text: '#', value: 'posicion', sortable: false, width: '5%'},
          {text: 'Escuela', value: 'escuela', align: 'left', sortable: false, width: '60%'},          
          {text: 'CCT', value: 'clave', align: 'center', sortable: false, width: '5%'},          
          {text: 'Nivel', value: 'nivel', align: 'center', sortable: false, width: '15%'},
          {text: 'Turno', value: 'turno',  align: 'center', sortable: false, width: '5%'},         
          {text: 'Estado', value: 'status', align: 'center', sortable: false, width: '5%'},
          {text: 'Acciones', sortable: false, width: '5%'},

    ],
    escuelas: [],
    editedIndex: -1,
    editedItem:{
      posicion:'',
      escuela:'',
      clave:'',
      nivel:'',
      turno:'',
      status:''
    },
    defaultItem:{
      posicion:'',
      escuela:'',
      clave:'',
      nivel:'',
      turno:'',
      status:''
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nueva Escuela' : 'Editar Escuela'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.escuelas = [
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
            status: false
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
    },
    editItem (item) {
      this.editedIndex = this.escuelas.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    }
  }
}
</script>

<style scoped>

</style>