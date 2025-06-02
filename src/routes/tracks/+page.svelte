<script>
  export let data;
</script>

<h1 class="mb-4">🏁 Alle Rennstrecken</h1>

<div class="row">
  {#each data.tracks as track}
    <div class="col-md-4 mb-4">
      <div class="card h-100 shadow-sm">
        <img
          src={`/images/${track.image_url}`}
          class="card-img-top"
          alt={track.name}
          style="height: 200px; object-fit: cover;"
        />
        <div class="card-body">
          <h4 class="card-title">{track.name}</h4>
          <p class="card-text">{track.description}</p>
        </div>
        <div class="card-footer text-end">
        <a href={`/tracks/${track._id}`} class="btn btn-primary">Zur Strecke</a>
        </div>
      </div>
    </div>
  {/each}
</div>