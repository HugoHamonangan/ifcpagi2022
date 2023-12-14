const apiUrlMatkul = 'https://ifcmowninkapi.000webhostapp.com/public/data/api/mata-kuliah/readTheAPI';

fetch(apiUrlMatkul)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Assuming data is an array of objects
    const apiDataTableBodyMatkul = document.getElementById('table-matkul').querySelector('tbody');

    // Clear existing content
    apiDataTableBodyMatkul.innerHTML = '';

     no=1;
    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${no++}</td>
        <td>${item.kode_matkul}</td>
        <td>${item.matkul}</td>
        <td>${item.dosen_pengajar}</td>
        <td>${item.sks}</td>        
      `;

      // Append the new element to the container
      apiDataTableBodyMatkul.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
