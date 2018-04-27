<template>
    <div class="col-md-12">
	<div class="box-contenido-titulo">
		Lista de clientes
	</div>
	<div class="box-contenido">
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Nombres</th>
					<th>Ape. Paterno</th>
					<th>Ape. Materno</th>
                    <th>Edad.</th>
					<th>Fec. de Registro</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="clientes in arrayClientes" :key="clientes.id">
					<td v-text="clientes.nombres"></td>
					<td v-text="clientes.ape_pa"></td>
					<td v-text="clientes.ape_ma"></td>
					<td v-text="clientes.fec_nac"></td>
					<td>{{ moment(clientes.created_at).format('MMMM Do YYYY, h:mm:ss a') }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
</template>

<script>
var moment = require('moment');
    export default {
        data(){
			return{
				moment:moment,
				nombres:'',
				ape_pa:'',
				ape_ma:'',
				fec_nac:'',
				created_at:'',
				arrayClientes:[]
			}
		},
		methods:{
		listarClientes(){
			let me = this;
			axios.get('/clientes').then(function (response){
				me.arrayClientes = response.data;
			})
			.catch(function (error){
				console.log(error);
			});
		}
		},
		mounted(){
			this.listarClientes();
		}

	}
</script>
