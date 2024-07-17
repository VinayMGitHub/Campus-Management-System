<script>
  import { DataTable } from "carbon-components-svelte";
  export let headers;
  export let rows;
</script>

<DataTable
  headers={headers}
  rows={rows}
/>


<style></style>