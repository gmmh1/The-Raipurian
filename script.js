// FULL MEMBER LIST
const members = [
"Md Zabed Hossain","Miraz Moqetader","Zahidul Islam Jahid","Ariful Alam",
"Md. Ehsanul Hoque","Kamrul Al Mamun","Saiful Islam Murad","Abdul Kaiyum",
"Enayet Ullah Bablu","Monoj Roy","Uzzal Majumder","Harun or Rashid Hero",
"Rashedun Nabi Hasan","Md. Ibrahim","Gias Miaji","Iqbal Hossain",
"Sharif Hossen","Jahangir","Md Billal Hossain","Rabiul Islam",
"Mithun Banik","Md. Sarawar Amin","Md Fathme Ali","Md Mehedi Hasan",
"Wshim Kabir Sumon","Md. Mohiuddin Repon","Tanzir Hossen Hemal",
"Md Forhad Hossain","Azharul Islam","Md Tarek Hossain",
"Afzal khan Mohsin","Shojol","Syed Nazrul Islam Polen","Jafor",
"Md Nesar Uddin","Babor","Humayun Kabir Liton","Masud","Farhana",
"Md Shohel Hossen","Kawsar Alam Tawhid","Toriqul Islam Sachal",
"Tanvir Kamal","Jamiul Uddin Choyon","Anwar Hossain Ringku",
"Md Nure Alam Tareq","Jahir Bhuiyan","Sayfa Isha",
"Dr Mamunur Rashid","Sulaiman Rubel","Santa Hossain",
"Iqbal Hossain","Ibrahim khan","Rumman","Siam Bin Zahirul",
"GM Morshed Hossain","Md Zakir Hossain"
];

const grid = document.getElementById("memberGrid");

members.forEach(name=>{
  const card=document.createElement("div");
  card.className="card";

  card.innerHTML=`
    <div class="card-inner">
      <div class="front">
        <div class="avatar">${name.charAt(0)}</div>
        <div>${name}</div>
        <div style="font-size:11px;opacity:0.7">Member</div>
      </div>

      <div class="back">
        <b>${name}</b><br><br>
        Raipurian Club Member<br>
        Active Contributor
      </div>
    </div>
  `;

  card.addEventListener("click",()=>{
    card.classList.toggle("flipped");
  });

  grid.appendChild(card);
});