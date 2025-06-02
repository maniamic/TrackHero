<script>
  export let data;

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = (seconds % 60).toFixed(3).padStart(6, "0");
    return `${min}:${sec}`;
  }
</script>

<h1 class="mb-3">{data.track.name}</h1>
<p>{data.track.description}</p>
<p>Die Strecke befindet sich in: {data.track.country}</p>
<p>Die Strecke ist {data.track.length_km} km lang.</p>

<img src={`/images/${data.track.image_url}`} alt="Streckenbild" class="img-fluid mb-4" />

<h3>🏁 Top 3 Rundenzeiten</h3>
<a href={`/tracks/${data.track._id}/add`} class="btn btn-primary">+ LapTime hinzufügen</a>


{#if data.topTimes.length === 0}
  <p>Keine Zeiten vorhanden.</p>
{:else}
  <table class="table table-bordered table-hover">
    <thead>
      <tr>
        <th>Platz</th>
        <th>Fahrer:in</th>
        <th>Nationalität</th>
        <th>Fahrzeug</th>
        <th>Leistung (PS)</th>
        <th>Rundenzeit</th>
      </tr>
    </thead>
    <tbody>
      {#each data.topTimes as lap, i}
        <tr>
          <td>{i + 1}</td>
          <td>{lap.driver?.name}</td>
          <td>{lap.driver?.nationality}</td>
          <td>{lap.vehicle?.brand} {lap.vehicle?.model}</td>
          <td>{lap.vehicle?.horsepower}</td>
          <td>{formatTime(lap.time_seconds)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}