const apiUrl = 'https://ifcmowninkapi.000webhostapp.com/public/data/api/jadwal-kuliah/readTheAPI';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Assuming data is an array of objects
    const apiDataTableBody = document.getElementById('table-jadwal').querySelector('tbody');

    // Clear existing content
    apiDataTableBody.innerHTML = '';

    no = 1;

    data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${no++}</td>
        <td>${item.mata_kuliah}</td>
        <td>${item.dosen_pengajar}</td>
        <td>${item.hari}</td>
        <td>${item.ruangan}</td>
        <td>${item.mulai}</td>
        <td>${item.selesai}</td>
      `;

      // Append the new element to the container
      apiDataTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
