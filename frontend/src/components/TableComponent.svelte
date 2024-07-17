<script>
  import { DataTable } from "carbon-components-svelte";
  export let headers;
  export let rows;
</script>

<div class="table-container">
  <DataTable
    headers={headers}
    rows={rows}
  />
</div>

<style>
  .table-container {
    width: 100%;
    max-width: 1200px; /* Adjust max-width as needed */
    margin: 0 auto;
  }

</style>
