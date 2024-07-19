<script>
  import { DataTable } from "carbon-components-svelte";
  //props for DataTable
  export let headers;
  export let rows;

  import { Pagination } from "carbon-components-svelte";

</script>

<div class="table-paginationbar-container">
  <div class = "table-container">
    <DataTable
    headers={headers}
    rows={rows}
    />
  </div>

  <div class="pagination-container">
    <Pagination totalItems={20} pageSizes={[5, 10, 20]}/>
  </div>
</div>

<style>
  .table-paginationbar-container {
    /* margin-bottom: 20px; */
    padding: 20px;
    /* display: flex; */
    flex-direction: row;
    height: 100%;
    
  }

  .table-container{
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    grid-column: 0;
  }
  
  .pagination-container {
    flex-shrink: 0;
    align-self: flex-end;
    grid-column: 1;
  }

</style>
