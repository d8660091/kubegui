<template>
  <div class="container">
    <!-- As a link -->
    <nav class="navbar bg-body-tertiary navbar-expand-lg">
      <div class="container-fluid">
        <NuxtLink class="navbar-brand" to="/">Home</NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/secrets">Secrets</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <NuxtWelcome /> -->
    <NuxtPage />
  </div>
</template>

<script>
</script>
