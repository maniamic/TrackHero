<script>
  let { children } = $props();
</script>

<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">🏁 TrackHero</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="/tracks">Strecken</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/vehicles">Fahrzeuge</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/drivers">Fahrer:innen</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container mt-4">
  {@render children()}
</div>