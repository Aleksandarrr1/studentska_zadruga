document.getElementById('studentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const alert = document.getElementById('studentAlert');
  alert.innerHTML = `
    <h5 class="mb-3">Podaci o studentu:</h5>
    <table class="table table-bordered table-sm mb-0">
      <tr><th>Ime i prezime</th><td>${data.ime}</td></tr>
      <tr><th>Email</th><td>${data.email}</td></tr>
      <tr><th>Fakultet</th><td>${data.fakultet}</td></tr>
      <tr><th>Godina fakulteta</th><td>${data.godina}</td></tr>
      <tr><th>Poruka</th><td>${data.poruka || "-"}</td></tr>
    </table>`;
  alert.classList.remove('d-none');
});

document.getElementById('employerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const alert = document.getElementById('employerAlert');
  alert.innerHTML = `
    <h5 class="mb-3">Podaci o firmi:</h5>
    <table class="table table-bordered table-sm mb-0">
      <tr><th>Ime firme</th><td>${data.firma}</td></tr>
      <tr><th>Email</th><td>${data.email}</td></tr>
      <tr><th>Broj studenata</th><td>${data.broj}</td></tr>
      <tr><th>Pozicija</th><td>${data.pozicija}</td></tr>
      <tr><th>Poruka</th><td>${data.poruka || "-"}</td></tr>
    </table>`;
  alert.classList.remove('d-none');
});