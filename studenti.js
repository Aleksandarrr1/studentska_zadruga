const students = [
  {name: "Marko Jovović", exp: "2 godine iskustva", year: "3. godina FTN", img: "https://randomuser.me/api/portraits/men/32.jpg"},
  {name: "Ana Petrović", exp: "1 godina iskustva", year: "2. godina PMF", img: "https://randomuser.me/api/portraits/women/45.jpg"},
  {name: "Luka Nikolić", exp: "3 godine iskustva", year: "4. godina VPŠ", img: "https://randomuser.me/api/portraits/men/18.jpg"},
  {name: "Maja Stanković", exp: "2 godine iskustva", year: "3. godina VTŠ", img: "https://randomuser.me/api/portraits/women/29.jpg"},
  {name: "Nikola Ilić", exp: "1 godina iskustva", year: "2. godina FF", img: "https://randomuser.me/api/portraits/men/41.jpg"},
  {name: "Jelena Pavlović", exp: "3 godine iskustva", year: "4. godina EF", img: "https://randomuser.me/api/portraits/women/54.jpg"},
  {name: "Stefan Kostić", exp: "2 godine iskustva", year: "3. godina MF", img: "https://randomuser.me/api/portraits/men/12.jpg"},
  {name: "Ivana Marković", exp: "1 godina iskustva", year: "2. godina FTN", img: "https://randomuser.me/api/portraits/women/25.jpg"},
];

const container = document.querySelector('.student-gallery');

students.forEach(student => {
  const card = document.createElement('div');
  card.className = 'student-card';
  card.innerHTML = `
    <img src="${student.img}" alt="${student.name}">
    <h3>${student.name}</h3>
    <p>${student.exp}</p>
    <p>${student.year}</p>
  `;
  container.appendChild(card);
});