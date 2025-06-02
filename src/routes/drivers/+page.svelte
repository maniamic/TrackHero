<script>
  export let data;

  let sortAsc = true;
  let sortedDrivers = [...data.drivers];

  function sortByYear() {
    sortAsc = !sortAsc;
    sortedDrivers.sort((a, b) =>
      sortAsc ? a.birth_year - b.birth_year : b.birth_year - a.birth_year
    );
    sortedDrivers = [...sortedDrivers]; 
  }
</script>


<div class="d-flex justify-content-between align-items-center mb-4">
  <h1 class="m-0">👤 Fahrer:innen</h1>
  <a href="/drivers/add" class="btn btn-primary">+ Fahrer:in hinzufügen</a>
</div>

<table class="table table-striped table-hover table-bordered">
  <thead class="table-light">
    <tr>
      <th>Name</th>
      <th>
        Geburtsjahr
        <button class="btn btn-sm btn-link" on:click={sortByYear}>
          {sortAsc ? '↑' : '↓'}
        </button>
      </th>
      <th>Nationalität</th>
    </tr>
  </thead>
  <tbody>
    {#each sortedDrivers as driver}
      <tr>
        <td>{driver.name}</td>
        <td>{driver.birth_year}</td>
        <td>{driver.nationality}</td>
      </tr>
    {/each}
  </tbody>
</table>
