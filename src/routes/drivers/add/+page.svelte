<script>
  let { form } = $props();
</script>

<a href="/drivers">Zurück</a>
<h1>➕ Fahrer:in hinzufügen</h1>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label class="form-label">Name</label>
    <input name="name" class="form-control" type="text" required />
  </div>
  <div class="mb-3">
    <label class="form-label">Geburtsjahr</label>
    <input name="birth_year" class="form-control" type="number" required />
  </div>
  <div class="mb-3">
    <label class="form-label">Nationalität</label>
    <input name="nationality" class="form-control" type="text" required />
  </div>
  <button type="submit" class="btn btn-primary">Fahrer:in hinzufügen</button>
</form>

{#if form?.success}
  <p class="mt-3 text-success">✅ Fahrer:in wurde erfolgreich hinzugefügt.</p>
{/if}