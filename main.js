var calendar = [
  {
    "date": "2023-08-30",
    "name": "Lighting Square Chess 3",
    "register": "http://googleform....",
    "entries": "http://googlesheet"
  },
  {
    "date": "2023-08-10",
    "name": "Lighting Square Chess 2",
    "register": "http://googleform....",
    "entries": "http://googlesheet"
  },
  {
    "date": "2023-07-02",
    "name": "Lighting Square Chess 1",
    "register": "http://googleform....",
    "entries": "http://googlesheet"
  }
];

function toggleLinks() {
  var links = document.getElementById("links");
  links.style.display = links.style.display == "none" ? "block" : "none";
}

function createCalendar() {
  var htmlString = '';
  for (var i = 0; i < calendar.length; i++) {
    var item = calendar[i];
    htmlString += '<tr><td class="border border-slate-300">' + item.name + 
      '</td><td class="border border-slate-300">' + item.date + 
      '</td><td class="border border-slate-300"><a href="' + item.register + 
      '">Register</a></td><td class="border border-slate-300"><a href="' + item.entries + 
      '">Entries</a></td></tr>';
  }
  var content = document.getElementById("content");
  content.innerHTML += htmlString;
}