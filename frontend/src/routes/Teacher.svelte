<script>
    import TableComponent from "../components/TableComponent.svelte"; 
  
    let headers = [
      { key: "id", value: "ID" },
      { key: "name", value: "Name" },
      { key: "gender", value: "Gender" },
      { key: "position", value: "Position" },
    ];
  
    let rows = [
      { id: "1", name: "Teacher_name 1", gender: "Male", position: "Associate Professor" },
      { id: "2", name: "Teacher_name 2", gender: "Male", position: "Assistant Professor" },
      { id: "3", name: "Teacher_name 3", gender: "Female", position: "HOD" },
      { id: "4", name: "Teacher_name 3", gender: "Female", position: "ADOC" }
    ];
  </script>
  
  <main>
    <h1 class="heading">Teacher Data</h1>
    <TableComponent {headers} {rows} />
  </main>
  
  <style>
    .heading {
      font-family: 'Arial', sans-serif;
      font-size: 2.5rem;
      text-align: center;
      color: #479aff;

      /* text-shadow: 2px 2px 4px rgba(216, 74, 74, 0.3); */
      margin-bottom: 20px;
      /* background: linear-gradient(90deg, rgba(255, 99, 71, 1) 0%, rgba(255, 165, 0, 1) 100%); */
      /* -webkit-background-clip: text; */
      /* color: transparent; */
      position: relative;
    }
  
    .heading::before, .heading::after {
      content: '';
      display: block;
      width: 50px;
      height: 4px;
      background-color: #479aff;
      margin: 0 auto;
      margin-top: 10px;
      margin-bottom: 10px;
      border-radius: 2px;
    }
  
    .heading::after {
      width: 100px;
      background-color: #479aff;
    }
  
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
    }
  </style>
  