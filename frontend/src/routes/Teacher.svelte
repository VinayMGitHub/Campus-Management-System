<script>
    import TableComponent from "../components/TableComponent.svelte"; 
    let headers = [
    { key: "id", value: "ID" },
    { key: "name", value: "Name" },
    { key: "gender", value: "Gender" },
    { key: "position", value: "Position" },
    ];

    let rows = [
    {
      id: "1",
      name: "Load Balancer 3",
      gender: "HTTP",
      position: 3000,
    },
    {
      id: "2",
      name: "Load Balancer 3",
      gender: "HTTP",
      position: 3000,
    },
    {
      id: "3",
      name: "Load Balancer 3",
      gender: "HTTP",
      position: 3000,
    },
    {
      id: "4",
      name: "Load Balancer 3",
      gender: "HTTP",
      position: 3000,
    }
    ];

</script>

<main>
    <h1>
        <h1>Page for Teacher</h1>  
        <TableComponent headers = {headers} rows = {rows}/>
    </h1>
</main>


<style>

</style>


