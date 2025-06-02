<script>
  let { form } = $props();
</script>

<a href="/vehicles">Zurück</a>
<h1>🚗 Fahrzeug hinzufügen</h1>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label class="form-label">Marke</label>
    <input name="brand" class="form-control" type="text" required />
  </div>
  <div class="mb-3">
    <label class="form-label">Modell</label>
    <input name="model" class="form-control" type="text" required />
  </div>
  <div class="mb-3">
    <label class="form-label">Baujahr</label>
    <input name="year" class="form-control" type="number" required />
  </div>
  <div class="mb-3">
    <label class="form-label">Leistung (PS)</label>
    <input name="horsepower" class="form-control" type="number" required />
  </div>
  <button type="submit" class="btn btn-primary">Fahrzeug speichern</button>
</form>

{#if form?.success}
  <p class="mt-3 text-success">✅ Fahrzeug erfolgreich hinzugefügt.</p>
{/if}