const apiUrlMahasiswa = 'https://ifcmowninkapi.000webhostapp.com/public/data/api/mahasiswa/readTheAPI';

fetch(apiUrlMahasiswa)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Assuming data is an array of objects
    const apiDataTableBodyMahasiswa = document.getElementById('mahasiswa-table').querySelector('tbody');

    // Clear existing content
    apiDataTableBodyMahasiswa.innerHTML = '';

    no = 1;

    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${no++}</td>
        <td>${item.nama}</td>
        <td>${item.nim}</td>
        <td>${item.jabatan}</td>            
      `;
      
      apiDataTableBodyMahasiswa.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
