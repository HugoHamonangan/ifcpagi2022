const apiUrlTugas = 'https://ifcmowninkapi.000webhostapp.com/public/data/api/tugas-kuliah/readTheAPI';

fetch(apiUrlTugas)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Assuming data is an array of objects
    const apiDataTableBodyTugas = document.getElementById('table-tugas').querySelector('tbody');

    // Clear existing content
    apiDataTableBodyTugas.innerHTML = '';

    no = 1;
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${no++}</td>
        <td>${item.matkul}</td>
        <td>${item.tugas}</td>
        <td>${item.mulai}</td>
        <td>${item.selesai}</td>        
        <td>${item.format_file}</td>        
      `;      
      apiDataTableBodyTugas.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
