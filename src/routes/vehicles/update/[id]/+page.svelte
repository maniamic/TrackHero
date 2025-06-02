<script>
  const { data, form } = $props();
  const { vehicle } = data;
</script>

<a href="/vehicles">← Zurück</a>
<h1>✏️ Fahrzeug bearbeiten</h1>

<form method="POST" action="?/update">
  <div class="mb-3">
    <label class="form-label">Marke</label>
    <input name="brand" class="form-control" type="text" bind:value={vehicle.brand} required />
  </div>
  <div class="mb-3">
    <label class="form-label">Modell</label>
    <input name="model" class="form-control" type="text" bind:value={vehicle.model} required />
  </div>
  <div class="mb-3">
    <label class="form-label">Baujahr</label>
    <input name="year" class="form-control" type="number" bind:value={vehicle.year} required />
  </div>
  <div class="mb-3">
    <label class="form-label">Leistung (PS)</label>
    <input name="horsepower" class="form-control" type="number" bind:value={vehicle.horsepower} required />
  </div>
  <button class="btn btn-primary" type="submit">Fahrzeug speichern</button>
</form>

{#if form?.success}
  <p class="mt-3 text-success">✅ Fahrzeug wurde erfolgreich aktualisiert.</p>
{/if}
