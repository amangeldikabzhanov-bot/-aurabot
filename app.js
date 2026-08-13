const content = document.getElementById("content");
const title = document.getElementById("pageTitle");

/* =========================
   DASHBOARD
========================= */

function dashboard() {
  return `
    <div class="hero">
      <div>
        <div class="eyebrow">AURABOT WORKSPACE</div>
        <h1>Қайырлы күн! 👋</h1>
        <p>Боттарыңыздың жұмысын бір жерден басқарыңыз.</p>
      </div>

      <button class="primary" onclick="go('bots')">
        + Жаңа бот жасау
      </button>
    </div>

    <div class="cards">
      ${metric("WhatsApp Status", "🟢", "Demo Connected", "Online")}
      ${metric("Messages Today", "💬", "1,284", "+18.4%")}
      ${metric("AI Responses", "✦", "927", "+12.8%")}
      ${metric("Active Contacts", "◎", "486", "+9.2%")}
    </div>

    <div class="grid">

      <div class="card">
        <div class="metric-top">
          <div>
            <h3>Messages overview</h3>
            <div class="muted">Соңғы 7 күн</div>
          </div>
          <span>Weekly ▾</span>
        </div>

        <div class="chart">
          ${[45,72,55,88,64,96,78]
            .map(x => `<div class="bar" style="height:${x}%"></div>`)
            .join("")}
        </div>

        <div class="bar-labels">
          ${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
            .map(x => `<span>${x}</span>`)
            .join("")}
        </div>
      </div>

      <div class="card">
        <h3>Recent conversations</h3>

        <div class="activity">
          ${conversation(
            "Аружан",
            "Сәлем! Бүгін кешке бос үстел бар ма?",
            "2m",
            "AR"
          )}

          ${conversation(
            "Данияр",
            "Тапсырысымның статусын білгім келеді.",
            "8m",
            "DA"
          )}

          ${conversation(
            "Мадина",
            "Рақмет! Бронь расталды ма?",
            "15m",
            "MA"
          )}

          ${conversation(
            "Ернар",
            "Менюді жібере аласыз ба?",
            "24m",
            "ER"
          )}
        </div>
      </div>

    </div>
  `;
}

/* =========================
   HELPERS
========================= */

function metric(name, icon, value, trend) {
  return `
    <div class="card">
      <div class="metric-top">
        <span>${name}</span>
        <span class="metric-icon">${icon}</span>
      </div>

      <div class="metric">${value}</div>

      <div class="trend">${trend}</div>
    </div>
  `;
}

function conversation(name, message, time, initials) {
  return `
    <div class="conversation">

      <div class="c-avatar">
        ${initials}
      </div>

      <div>
        <strong>${name}</strong>
        <p>${message}</p>
      </div>

      <time>${time}</time>

    </div>
  `;
}

function head(pageTitle, buttonText = "") {
  return `
    <div class="page-head">
      <h1>${pageTitle}</h1>

      ${
        buttonText
          ? `<button class="primary">${buttonText}</button>`
          : ""
      }
    </div>
  `;
}

/* =========================
   BOT BUILDER
========================= */

function builder() {
  return `
    ${head("Bot Builder", "+ Жаңа бот")}

    <div class="builder">

      <div class="card form-card">

        <div class="field">
          <label>Bot name</label>
          <input value="Arua Restaurant Bot">
        </div>

        <div class="field">
          <label>Business name</label>
          <input value="Arua Restaurant">
        </div>

        <div class="field">
          <label>Bot personality</label>

          <select>
            <option>Friendly & Professional</option>
            <option>Sales</option>
            <option>Custom</option>
          </select>
        </div>

        <div class="field">
          <label>AI instructions</label>

          <textarea>
Клиенттерге қазақ тілінде жылы әрі кәсіби жауап бер.
Меню, бронь және жұмыс уақыты туралы ақпарат бер.
Білмейтін ақпаратты ойдан шығарма.
          </textarea>
        </div>

        <button
          class="primary"
          onclick="saveBot()"
        >
          Сақтау
        </button>

      </div>

      <div class="preview">

        <div class="phone">

          <div class="phone-head">
            Arua Restaurant · online
          </div>

          <div class="chat">

            <div class="bubble bot">
              Сәлем! 👋 Arua Restaurant-қа қош келдіңіз.
              Қалай көмектесе аламын?
            </div>

            <div class="quick">
              <button>🍽 Меню</button>
              <button>📅 Үстел брондау</button>
              <button>📍 Мекенжай</button>
              <button>👨‍💬 Оператор</button>
            </div>

            <div class="bubble user">
              4 адамға бүгін кешке үстел бар ма?
            </div>

            <div class="bubble bot">
              Әрине! 19:00 және 20:30 уақыттарына бос орын бар.
              Қай уақытты таңдайсыз?
            </div>

          </div>

        </div>

      </div>

    </div>
  `;
}

function saveBot() {
  alert("Бот баптаулары сақталды ✓");
}

/* =========================
   CONVERSATIONS
========================= */

function conversations() {
  const names = [
    "Аружан",
    "Данияр",
    "Мадина",
    "Ернар",
    "Айдана",
    "Нұрлан"
  ];

  const messages = [
    "Сәлем! Бүгін кешке бос үстел бар ма?",
    "Тапсырысымның статусын білгім келеді.",
    "Рақмет! Бронь расталды ма?",
    "Менюді жібере аласыз ба?",
    "Жұмыс уақытыңыз қандай?",
    "Мекенжайды жібере аласыз ба?"
  ];

  return `
    ${head("Conversations")}

    <div class="toolbar">

      <input
        class="input"
        placeholder="Клиенттерден іздеу..."
      >

      <button
        class="primary"
        onclick="alert('AI Reply дайындалуда')"
      >
        AI Reply
      </button>

    </div>

    <div class="card">

      <div class="conversation">

        ${names
          .map((name, i) =>
            conversation(
              name,
              messages[i],
              `${i + 2}m`,
              name.slice(0, 2).toUpperCase()
            )
          )
          .join("")}

      </div>

    </div>
  `;
}

/* =========================
   CONTACTS
========================= */

function contacts() {
  const names = [
    "Аружан",
    "Данияр",
    "Мадина",
    "Ернар",
    "Айдана"
  ];

  return `
    ${head("Contacts", "+ Add contact")}

    <div class="toolbar">

      <input
        class="input"
        placeholder="Аты немесе телефон бойынша іздеу..."
      >

    </div>

    <table class="table">

      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Status</th>
          <th>Last contact</th>
          <th>Tags</th>
        </tr>
      </thead>

      <tbody>

        ${names
          .map(
            (name, i) => `
              <tr>
                <td><strong>${name}</strong></td>
                <td>+7 7${i}0 123 45 67</td>
                <td>
                  <span class="badge">Active</span>
                </td>
                <td>Today</td>
                <td>Customer</td>
              </tr>
            `
          )
          .join("")}

      </tbody>

    </table>
  `;
}

/* =========================
   TEMPLATES
========================= */

function templates() {
  const items = [
    "Reservation confirmation",
    "Order status",
    "Welcome message",
    "Follow-up"
  ];

  return `
    ${head("Templates", "+ Create template")}

    <div class="cards">

      ${items
        .map(
          item => `
            <div class="card">

              <div class="metric-top">
                <span>UTILITY</span>
                <span>⋮</span>
              </div>

              <h3 style="margin:18px 0 8px">
                ${item}
              </h3>

              <p class="muted">
                Сәлем! 👋 Сіздің сұранысыңыз сәтті қабылданды.
              </p>

              <span class="badge">
                Approved
              </span>

            </div>
          `
        )
        .join("")}

    </div>
  `;
}

/* =========================
   AUTOMATIONS
========================= */

function automations() {
  const items = [
    "New Customer Welcome",
    "Reservation Confirmation",
    "Inactive Customer",
    "Order Follow-up"
  ];

  return `
    ${head("Automations", "+ New automation")}

    <div class="cards">

      ${items
        .map(
          item => `
            <div class="card">

              <div class="metric-top">
                <span>⚡ Automation</span>
                <span>🟢</span>
              </div>

              <h3 style="margin:18px 0 8px">
                ${item}
              </h3>

              <p class="muted">
                Trigger → AI response → WhatsApp message
              </p>

              <button
                class="primary"
                style="margin-top:12px"
              >
                Edit
              </button>

            </div>
          `
        )
        .join("")}

    </div>
  `;
}

/* =========================
   AI ASSISTANT
========================= */

function ai() {
  return `
    ${head("AI Assistant")}

    <div class="grid">

      <div class="card form-card">

        <div class="field">
          <label>AI personality</label>

          <select>
            <option>Friendly & Professional</option>
            <option>Sales Expert</option>
            <option>Support Agent</option>
          </select>
        </div>

        <div class="field">
          <label>Business knowledge</label>

          <textarea>
Меню, бағалар, жұмыс уақыты, мекенжай, бронь ережелері...
          </textarea>
        </div>

        <div class="field">
          <label>Response rules</label>

          <textarea>
Қысқа, түсінікті жауап бер.
Қазақ тілін бірінші таңда.
          </textarea>
        </div>

        <button
          class="primary"
          onclick="alert('AI settings сақталды ✓')"
        >
          Save AI settings
        </button>

      </div>

      <div class="card">

        <h3>AI Preview</h3>

        <div class="activity">

          ${conversation(
            "Customer",
            "4 адамға үстел керек",
            "now",
            "CU"
          )}

          ${conversation(
            "AuraBot",
            "Әрине! Қай уақыт сізге ыңғайлы? 😊",
            "now",
            "AB"
          )}

        </div>

      </div>

    </div>
  `;
}

/* =========================
   ANALYTICS
========================= */

function analytics() {
  return `
    ${head("Analytics")}

    <div class="cards">

      ${metric(
        "Total Messages",
        "💬",
        "18,492",
        "+24%"
      )}

      ${metric(
        "AI Responses",
        "✦",
        "13,721",
        "+31%"
      )}

      ${metric(
        "Bookings",
        "📅",
        "384",
        "+14%"
      )}

      ${metric(
        "Conversion Rate",
        "◒",
        "18.7%",
        "+3.2%"
      )}

    </div>

    <div
      class="card"
      style="margin-top:16px"
    >

      <h3>Performance overview</h3>

      <div class="chart">

        ${[35,52,46,70,63,82,91,74,88,96]
          .map(
            x =>
              `<div class="bar" style="height:${x}%"></div>`
          )
          .join("")}

      </div>

    </div>
  `;
}

/* =========================
   INTEGRATIONS
========================= */

function integrations() {
  return `
    ${head("Integrations")}

    <div class="cards">

      <div class="card">

        <div class="metric-icon">◉</div>

        <h3 style="margin:15px 0 6px">
          WhatsApp Cloud API
        </h3>

        <p class="muted">
          Demo Connected
        </p>

        <button
          class="primary"
          style="margin-top:10px"
          onclick="configureWhatsApp()"
        >
          Configure
        </button>

      </div>


      <div class="card">

        <div class="metric-icon">✦</div>

        <h3 style="margin:15px 0 6px">
          OpenAI
        </h3>

        <p class="muted">
          Connect your service
        </p>

        <button
          class="primary"
          style="margin-top:10px"
          onclick="alert('OpenAI интеграция әзірге дайындалуда.')"
        >
          Connect
        </button>

      </div>


      <div class="card">

        <div class="metric-icon">▦</div>

        <h3 style="margin:15px 0 6px">
          Google Sheets
        </h3>

        <p class="muted">
          Connect your service
        </p>

        <button
          class="primary"
          style="margin-top:10px"
          onclick="alert('Google Sheets интеграция әзірге дайындалуда.')"
        >
          Connect
        </button>

      </div>


      <div class="card">

        <div class="metric-icon">➤</div>

        <h3 style="margin:15px 0 6px">
          Telegram
        </h3>

        <p class="muted">
          Connect your service
        </p>

        <button
          class="primary"
          style="margin-top:10px"
          onclick="alert('Telegram интеграция әзірге дайындалуда.')"
        >
          Connect
        </button>

      </div>

    </div>
  `;
}

/* =========================
   WHATSAPP
========================= */

function configureWhatsApp() {
  alert(
    "WhatsApp Cloud API баптауы\n\n" +
    "Келесі қадамда WhatsApp Business және Meta API қосамыз."
  );
}

/* =========================
   SETTINGS
========================= */

function settings() {
  return `
    ${head("Settings")}

    <div class="card form-card">

      <div class="field">
        <label>Business name</label>
        <input value="Arua Restaurant">
      </div>

      <div class="field">
        <label>Default language</label>

        <select>
          <option>Kazakh (KZ)</option>
          <option>Russian (RU)</option>
          <option>English (EN)</option>
        </select>
      </div>

      <div class="field">
        <label>Timezone</label>

        <select>
          <option>Asia/Almaty</option>
        </select>
      </div>

      <button
        class="primary"
        onclick="alert('Settings saved ✓')"
      >
        Save changes
      </button>

    </div>
  `;
}

/* =========================
   PAGES
========================= */

const pages = {
  dashboard: {
    title: "Dashboard",
    html: dashboard()
  },

  bots: {
    title: "Bot Builder",
    html: builder()
  },

  conversations: {
    title: "Conversations",
    html: conversations()
  },

  contacts: {
    title: "Contacts",
    html: contacts()
  },

  templates: {
    title: "Templates",
    html: templates()
  },

  automations: {
    title: "Automations",
    html: automations()
  },

  ai: {
    title: "AI Assistant",
    html: ai()
  },

  analytics: {
    title: "Analytics",
    html: analytics()
  },

  integrations: {
    title: "Integrations",
    html: integrations()
  },

  settings: {
    title: "Settings",
    html: settings()
  }
};

/* =========================
   NAVIGATION
========================= */

function go(page) {
  if (!pages[page]) return;

  document
    .querySelectorAll(".nav")
    .forEach(item => {
      item.classList.toggle(
        "active",
        item.dataset.page === page
      );
    });

  content.innerHTML = pages[page].html;
  title.textContent = pages[page].title;

  const sidebar = document.querySelector(".sidebar");

  if (sidebar) {
    sidebar.classList.remove("open");
  }
}

/* =========================
   NAV BUTTONS
========================= */

document
  .querySelectorAll(".nav")
  .forEach(item => {
    item.onclick = () => {
      go(item.dataset.page);
    };
  });


/* =========================
   MOBILE MENU
========================= */

const mobileMenu =
  document.getElementById("mobileMenu");

if (mobileMenu) {
  mobileMenu.onclick = () => {

    const sidebar =
      document.querySelector(".sidebar");

    if (sidebar) {
      sidebar.classList.toggle("open");
    }

  };
}


/* =========================
   START APP
========================= */

go("dashboard");
