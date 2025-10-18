const jobs = [
  {title: "Barista u kafiću", hours: "15 sati nedeljno", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHODCHeo3GZ4_rxIZd_6XMX2uYEqdHaB3_wYbtoRYQsdlFvzzWLvB6ogiZSSZOqVfuTv8&usqp=CAU"},
  {title: "Prodavac u butiku", hours: "12 sati nedeljno", img: "https://plusexclusive.rs/wp-content/uploads/2024/05/2148312201-1.jpg"},
  {title: "Vozač dostave", hours: "35 sati nedeljno", img: "https://www.njemacka-posao.com/wp-content/uploads/2019/05/Screenshot_2.png"},
  {title: "Recepcioner u hotelu", hours: "38 sati nedeljno", img: "https://star.study/assets/photos/article/big/1733343894-picture-1732883356.webp?v1733343962"},
  {title: "Magacioner", hours: "40 sati nedeljno", img: "https://oldweb.nefertiti.rs/wp-content/uploads/2021/12/magacioner.jpg"},
  {title: "Grafički dizajner", hours: "20 sati nedeljno", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutJQkFcyl-jZ5v9tUZHvlL4Fa_GIzBz37Mw&s"},
  {title: "IT tehničar", hours: "25 sati nedeljno", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"},
  {title: "Čistač/čistačica", hours: "30 sati nedeljno", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnO9P7wecKCdN2VxBKwjM0_lyKEAvsfKwPpw&s"},
  {title: "Host/hostesa", hours: "20 sati nedeljno", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"}
];

const gallery = document.querySelector('.job-gallery');

jobs.forEach((job, index) => {
  const card = document.createElement('div');
  card.className = 'job-card';
  card.innerHTML = `
    <img src="${job.img}" alt="${job.title}">
    <div class="job-info">
      <h3>${job.title}</h3>
      <p>${job.hours}</p>
    </div>
  `;
  card.addEventListener('click', () => openModal(job));
  gallery.appendChild(card);
});

const modal = document.getElementById('jobModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalHours = document.getElementById('modalHours');
const closeBtn = document.querySelector('.close');

function openModal(job) {
  modalImg.src = job.img;
  modalTitle.textContent = job.title;
  modalHours.textContent = job.hours;
  modal.style.display = 'flex';
}

closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };
