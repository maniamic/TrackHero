<script>
	export let data;
</script>

<div class="d-flex justify-content-between align-items-center mb-4">
	<h1 class="m-0">🚗 Fahrzeuge</h1>
	<a href="/vehicles/add" class="btn btn-primary">+ Fahrzeug hinzufügen</a>
</div>

<!-- Top 3 -->
<h4 class="mb-3">🏆 Die Top 3 (PS-stärkste Fahrzeuge)</h4>

<div class="row mb-5">
	{#each data.topVehicles as vehicle}
		<div class="col-md-4 mb-3">
			<div class="card h-100 shadow-sm">
				<div class="card-body">
					<h5 class="card-title">{vehicle.brand} {vehicle.model}</h5>
					<p class="card-text">
						Baujahr: {vehicle.year}<br />
						<span class="cardspace">
							Leistung: <strong>{vehicle.horsepower} PS</strong>
							<span class="spacer"></span>
							<a href={`/vehicles/update/${vehicle._id}`} class="edit" title="PS bearbeiten">edit</a
							>
						</span>
					</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<!-- Fahrzeugliste -->
<h4 class="mb-3">Alle Fahrzeuge</h4>

<div class="table-responsive">
	<table class="table table-striped table-bordered align-middle">
		<thead class="table-light">
			<tr>
				<th>Marke</th>
				<th>Modell</th>
				<th>Baujahr</th>
				<th>Leistung (PS)</th>
			</tr>
		</thead>
		<tbody>
			{#each data.otherVehicles as v}
				<tr>
					<td>{v.brand}</td>
					<td>{v.model}</td>
					<td>{v.year}</td>
					<td class="cardspace">
						{v.horsepower} PS
						<span class="spacer"></span>
						<a href={`/vehicles/update/${v._id}`} class="edit" title="PS bearbeiten">edit</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.spacer {
		flex-grow: 1;
	}
	.edit {
		color: #03ebfc;
	}
	.cardspace {
		display: flex;
	}
</style>
