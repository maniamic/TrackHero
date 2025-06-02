<script>
  export let data;
  export let form;
</script>

<a href="/tracks">← Zurück</a>
<h1 class="mb-4">➕ Zeit einreichen für {data.track.name}</h1>

<form method="POST" class="row g-3">
  <div class="col-md-6">
    <label class="form-label">Fahrer:in wählen</label>
    <select name="driver_id" class="form-select" required>
      <option disabled selected value="">Bitte wählen</option>
      {#each data.drivers as driver}
        <option value={driver._id}>{driver.name}</option>
      {/each}
    </select>
  </div>

  <div class="col-md-6">
    <label class="form-label">Fahrzeug wählen</label>
    <select name="vehicle_id" class="form-select" required>
      <option disabled selected value="">Bitte wählen</option>
      {#each data.vehicles as v}
        <option value={v._id}>{v.brand} {v.model} ({v.year})</option>
      {/each}
    </select>
  </div>

  <div class="col-md-6">
    <label class="form-label">Rundenzeit (in Sekunden)</label>
    <input type="number" step="0.001" min="1" name="time_seconds" class="form-control" required />
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-success">Zeit einreichen</button>
  </div>
</form>

{#if form?.success}
  <p class="mt-3 text-success">✅ Rundenzeit erfolgreich eingereicht.</p>
{/if}
