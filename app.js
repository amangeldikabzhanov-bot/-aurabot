const pages={
dashboard:{title:"Dashboard",html:dashboard()},
bots:{title:"Bot Builder",html:builder()},
conversations:{title:"Conversations",html:conversations()},
contacts:{title:"Contacts",html:contacts()},
templates:{title:"Templates",html:templates()},
automations:{title:"Automations",html:automations()},
ai:{title:"AI Assistant",html:ai()},
analytics:{title:"Analytics",html:analytics()},
integrations:{title:"Integrations",html:integrations()},
settings:{title:"Settings",html:settings()}
};
const content=document.getElementById("content"), title=document.getElementById("pageTitle");
function dashboard(){return `<div class="hero"><div><div class="eyebrow">AURABOT WORKSPACE</div><h1>Қайырлы күн! 👋</h1><p>Боттарыңыздың жұмысын бір жерден басқарыңыз.</p></div><button class="primary" onclick="go('bots')">+ Жаңа бот жасау</button></div>
<div class="cards">
${metric("WhatsApp Status","🟢","Demo Connected","Online")}
${metric("Messages Today","💬","1,284","+18.4%")}
${metric("AI Responses","✦","927","+12.8%")}
${metric("Active Contacts","◎","486","+9.2%")}
</div>
<div class="grid"><div class="card"><div class="metric-top"><div><h3>Messages overview</h3><div class="muted">Соңғы 7 күн</div></div><span>Weekly ▾</span></div><div class="chart">${[45,72,55,88,64,96,78].map(x=>`<div class="bar" style="height:${x}%"></div>`).join("")}</div><div class="bar-labels">${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(x=>`<span>${x}</span>`).join("")}</div></div>
<div class="card"><h3>Recent conversations</h3><div class="activity">${conversation("Аружан","Сәлем! Бүгін кешке бос үстел бар ма?","2m","AR")}${conversation("Данияр","Тапсырысымның статусын білгім келеді.","8m","DA")}${conversation("Мадина","Рақмет! Бронь расталды ма?","15m","MA")}${conversation("Ернар","Менюді жібере аласыз ба?","24m","ER")}</div></div></div>`}
function metric(a,i,b,t){return `<div class="card"><div class="metric-top"><span>${a}</span><span class="metric-icon">${i}</span></div><div class="metric">${b}</div><div class="trend">${t}</div></div>`}
function conversation(n,p,t,ini){return `<div class="conversation"><div class="c-avatar">${ini}</div><div><strong>${n}</strong><p>${p}</p></div><time>${t}</time></div>`}
function head(title,btn=""){return `<div class="page-head"><h1>${title}</h1>${btn?`<button class="primary">${btn}</button>`:""}</div>`}
function builder(){return `${head("Bot Builder","+ Жаңа бот")}<div class="builder"><div class="card form-card"><div class="field"><label>Bot name</label><input value="Arua Restaurant Bot"></div><div class="field"><label>Business name</label><input value="Arua Restaurant"></div><div class="field"><label>Bot personality</label><select><option>Friendly & Professional</option><option>Sales</option><option>Custom</option></select></div><div class="field"><label>AI instructions</label><textarea>Клиенттерге қазақ тілінде жылы әрі кәсіби жауап бер. Меню, бронь және жұмыс уақыты туралы ақпарат бер. Білмейтін ақпаратты ойдан шығарма.</textarea></div><button class="primary" onclick="alert('Demo: баптаулар сақталды ✓')">Сақтау</button></div><div class="preview"><div class="phone"><div class="phone-head">Arua Restaurant · online</div><div class="chat"><div class="bubble bot">Сәлем! 👋 Arua Restaurant-қа қош келдіңіз. Қалай көмектесе аламын?</div><div class="quick"><button>🍽 Меню</button><button>📅 Үстел брондау</button><button>📍 Мекенжай</button><button>👨‍💬 Оператор</button></div><div class="bubble user">4 адамға бүгін кешке үстел бар ма?</div><div class="bubble bot">Әрине! 19:00 және 20:30 уақыттарына бос орын бар. Қай уақытты таңдайсыз?</div></div></div></div></div>`}
function conversations(){return `${head("Conversations")}<div class="toolbar"><input class="input" placeholder="Клиенттерден іздеу..."><button class="primary">AI Reply</button></div><div class="card"><div class="conversation">${["Аружан","Данияр","Мадина","Ернар","Айдана","Нұрлан"].map((n,i)=>conversation(n,["Сәлем! Бүгін кешке бос үстел бар ма?","Тапсырысымның статусын білгім келеді.","Рақмет! Бронь расталды ма?","Менюді жібере аласыз ба?","Жұмыс уақытыңыз қандай?","Мекенжайды жібере аласыз ба?"][i],`${i+2}m`,n.slice(0,2).toUpperCase())).join("")}</div></div>`}
function contacts(){return `${head("Contacts","+ Add contact")}<div class="toolbar"><input class="input" placeholder="Аты немесе телефон бойынша іздеу..."></div><table class="table"><thead><tr><th>Name</th><th>Phone</th><th>Status</th><th>Last contact</th><th>Tags</th></tr></thead><tbody>${["Аружан","Данияр","Мадина","Ернар","Айдана"].map((n,i)=>`<tr><td><strong>${n}</strong></td><td>+7 7${i}0 123 45 67</td><td><span class="badge">Active</span></td><td>Today</td><td>Customer</td></tr>`).join("")}</tbody></table>`}
function templates(){return `${head("Templates","+ Create template")}<div class="cards">${["Reservation confirmation","Order status","Welcome message","Follow-up"].map((x,i)=>`<div class="card"><div class="metric-top"><span>UTILITY</span><span>⋮</span></div><h3 style="margin:18px 0 8px">${x}</h3><p class="muted">Сәлем! 👋 Сіздің сұранысыңыз сәтті қабылданды.</p><span class="badge">Approved</span></div>`).join("")}</div>`}
function automations(){return `${head("Automations","+ New automation")}<div class="cards">${["New Customer Welcome","Reservation Confirmation","Inactive Customer","Order Follow-up"].map((x,i)=>`<div class="card"><div class="metric-top"><span>⚡ Automation</span><span>🟢</span></div><h3 style="margin:18px 0 8px">${x}</h3><p class="muted">Trigger → AI response → WhatsApp message</p><button class="primary" style="margin-top:12px">Edit</button></div>`).join("")}</div>`}
function ai(){return `${head("AI Assistant")}<div class="grid"><div class="card form-card"><div class="field"><label>AI personality</label><select><option>Friendly & Professional</option><option>Sales Expert</option><option>Support Agent</option></select></div><div class="field"><label>Business knowledge</label><textarea>Меню, бағалар, жұмыс уақыты, мекенжай, бронь ережелері...</textarea></div><div class="field"><label>Response rules</label><textarea>Қысқа, түсінікті жауап бер. Қазақ тілін бірінші таңда.</textarea></div><button class="primary">Save AI settings</button></div><div class="card"><h3>AI Preview</h3><div class="activity">${conversation("Customer","4 адамға үстел керек","now","CU")}${conversation("AuraBot","Әрине! Қай уақыт сізге ыңғайлы? 😊","now","AB")}</div></div></div>`}
function analytics(){return `${head("Analytics")}<div class="cards">${metric("Total Messages","💬","18,492","+24%")}${metric("AI Responses","✦","13,721","+31%")}${metric("Bookings","📅","384","+14%")}${metric("Conversion Rate","◒","18.7%","+3.2%")}</div><div class="card" style="margin-top:16px"><h3>Performance overview</h3><div class="chart">${[35,52,46,70,63,82,91,74,88,96].map(x=>`<div class="bar" style="height:${x}%"></div>`).join("")}</div></div>`}
function integrations(){
return `${head("Integrations")}
<div class="cards">

<div class="card">
<div class="metric-icon">◉</div>
<h3 style="margin:15px 0 6px">WhatsApp Cloud API</h3>
<p class="muted">Demo Connected</p>
<button class="primary" style="margin-top:10px" onclick="configureWhatsApp()">Configure</button>
</div>

<div class="card">
<div class="metric-icon">✦</div>
<h3 style="margin:15px 0 6px">OpenAI</h3>
<p class="muted">Connect your service</p>
<button class="primary" style="margin-top:10px" onclick="alert('OpenAI интеграция әзірге дайындалуда.')">Connect</button>
</div>

<div class="card">
<div class="metric-icon">▦</div>
<h3 style="margin:15px 0 6px">Google Sheets</h3>
<p class="muted">Connect your service</p>
<button class="primary" style="margin-top:10px" onclick="alert('Google Sheets интеграция әзірге дайындалуда.')">Connect</button>
</div>

<div class="card">
<div class="metric-icon">➤</div>
<h3 style="margin:15px 0 6px">Telegram</h3>
<p class="muted">Connect your service</p>
<button class="primary" style="margin-top:10px" onclick="alert('Telegram интеграция әзірге дайындалуда.')">Connect</button>
</div>

</div>`;
}
function configureWhatsApp(){
  alert("WhatsApp Cloud API баптауы\n\nКелесі қадамда WhatsApp Business және Meta API қосамыз.");
}

function settings(){
function go(page){document.querySelectorAll(".nav").forEach(x=>x.classList.toggle("active",x.dataset.page===page));content.innerHTML=pages[page].html;title.textContent=pages[page].title;document.querySelector(".sidebar").classList.remove("open")}
document.querySelectorAll(".nav").forEach(n=>n.onclick=()=>go(n.dataset.page));
document.getElementById("mobileMenu").onclick=()=>document.querySelector(".sidebar").classList.toggle("open");
go("dashboard");
