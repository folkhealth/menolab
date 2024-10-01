export const mockData = {
  "name": "q-greutate",
  "pipeline": "default",
  "dealstage": "appointmentscheduled",
  "info": [
    {
      "id": 1,
      "type": "intro",
      "settings": {
        "intro_text": "Bun venit la Folk!<br><br/>Suntem aici pentru a te ajuta să pierzi în greutate și să îți îmbunătățești sănătatea.<br><br/>Te rugăm să răspunzi la câteva întrebări despre tine, stilul tău de viață și obiceiurile tale zilnice. <br><br/>Răspunsurile tale ne vor ajuta să creăm un plan personalizat pentru tine.",
        "primary_button_text": "Continuă",
        "disclaimer": "Apăsând „Continuă”, ești de acord cu utilizarea răspunsurilor tale conform <a href='https://google.com' target='_blank'>Politicii noastre de confidențialitate</a>."
      }
    },
    {
      "id": 2,
      "type": "steps",
      "settings": {
        "heading": "Care sunt pașii pe care îi vom parcurge",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "steps": [
          {
            "text": "Răspunde la întrebări despre stilul tău de viață",
            "helper": "Răspunde la întrebări despre dieta, activitatea fizică și obiceiurile tale zilnice.",
            "status": "checked"
          },
          {
            "text": "Completează-ți profilul",
            "helper": "Răspunde la întrebări despre corpul tău, cum ar fi greutatea, înălțimea, etc.",
            "status": "unchecked"
          },
          {
            "text": "Primește un plan personalizat",
            "helper": "Un expert în sănătate va analiza toate informațiile tale și va crea un plan personalizat pentru pierderea în greutate într-un mod sănătos.",
            "status": "unchecked"
          },
          {
            "text": "Monitorizează-ți progresul",
            "helper": "Evaluează-ți progresul pentru a vedea cât de mult ai avansat în călătoria ta de pierdere în greutate.",
            "status": "unchecked"
          }
        ]
      }
    },
    {
      "id": 3,
      "type": "single_option",
      "settings": {
        "question": "Care este motivația ta numărul unu pentru a pierde în greutate?",
        "helper": "Alege opțiunea care descrie cel mai bine motivul tău principal.",
        "secondary_button_text": "Înapoi",
        "options": [
          {
            "text": "Doresc să mă simt mai bine zi de zi"
          },
          {
            "text": "Am un eveniment important în curând și trebuie să slăbesc"
          },
          {
            "text": "Vreau să îmi îmbunătățesc aspectul fizic"
          },
          {
            "text": "Vreau să devin mai sănătos"
          },
          {
            "text": "Presiune din partea familiei/prietenilor"
          },
          {
            "text": "Altceva"
          }
        ]
      }
    },
    {
      "id": 4,
      "type": "multiple_option",
      "settings": {
        "question": "Ce alte obiective ai dori să atingi în această călătorie?",
        "helper": "Selectează toate opțiunile care se aplică.",
        "secondary_button_text": "Înapoi",
        "primary_button_text": "Continuă",
        "options": [
          {
            "text": "Să am mai multă energie"
          },
          {
            "text": "Să dorm mai bine"
          },
          {
            "text": "Să am mai puține pofte"
          },
          {
            "text": "Să am o stare de spirit mai bună"
          },
          {
            "text": "Să îmi îmbunătățesc sănătatea"
          },
          {
            "text": "Să reduc medicamentele pe care le iau"
          },
          {
            "text": "Să am o viață sexuală mai bună"
          }
        ]
      }
    },
    {
      "id": 5,
      "type": "custom_form",
      "settings": {
        "question": "Care este greutatea ta actuală?",
        "helper": "Introdu greutatea în kilograme.",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "numeric",
            "label": "Greutatea actuală",
            "measurement": "Kg",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 6,
      "type": "custom_form",
      "settings": {
        "question": "La ce greutate iți dorești să ajungi?",
        "helper": "Introdu greutatea în kilograme.",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "numeric",
            "label": "Greutatea dorită",
            "measurement": "Kg",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 7,
      "type": "single_option",
      "settings": {
        "question": "Ai mai încercat să slabești?",
        "secondary_button_text": "Înapoi",
        "options": [
          {
            "text": "Da",
            "jump": 8
          },
          {
            "text": "Nu",
            "jump": 10
          }
        ]
      }
    },
    {
      "id": 8,
      "type": "custom_form",
      "settings": {
        "question": "Ce metode ai încercat pentru a slăbi?",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "textarea",
            "label": "Enumeră metodele",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 9,
      "type": "custom_form",
      "settings": {
        "question": "De ce crezi că aceste metode nu au fost de succes?",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "textarea",
            "label": "De ce crezi că aceste metode nu au funcționat?",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 10,
      "type": "single_option",
      "settings": {
        "question": "Care crezi că va fi cel mai mare obstacol în călătoria ta de pierdere în greutate?",
        "helper": "Alege opțiunea care descrie cel mai bine provocarea anticipată.",
        "secondary_button_text": "Înapoi",
        "options": [
          {
            "text": "Am un program aglomerat și nu am timp pentru exerciții sau gătit",
            "jump": 12
          },
          {
            "text": "Sunt un mâncător emoțional",
            "jump": 12
          },
          {
            "text": "Sunt nerăbdător și renunț ușor",
            "jump": 12
          },
          {
            "text": "Am dificultăți în a-mi schimba obiceiurile alimentare",
            "jump": 12
          },
          {
            "text": "Mă simt descurajat din cauza lipsei de progres",
            "jump": 12
          },
          {
            "text": "Am probleme de sănătate care îmi fac dificilă pierderea în greutate",
            "jump": 11
          },
          {
            "text": "Altceva",
            "jump": 12
          }
        ]
      }
    },
    {
      "id": 11,
      "type": "custom_form",
      "settings": {
        "question": "Care sunt problemele de sănătate care îți fac dificilă pierderea în greutate.",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "textarea",
            "label": "Problemele de sănătate",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 12,
      "type": "scale",
      "settings": {
        "question": "Cât de sănătos este stilul tău de viață actual?",
        "helper": "Evaluează de la 0 (foarte nesănătos) la 5 (foarte sănătos).",
        "secondary_button_text": "Înapoi",
        "options": [
          {
            "text": "Stilul meu de viață este foarte nesănătos"
          },
          {
            "text": "Dieta și activitatea mea necesită multă muncă"
          },
          {
            "text": "Știu ce trebuie să fac, dar am nevoie de ajutor pentru a începe"
          },
          {
            "text": "Am câteva obiceiuri sănătoase, dar mai am mult de lucru"
          },
          {
            "text": "Mănânc bine și rămân activ majoritatea timpului"
          },
          {
            "text": "Stilul meu de viață este foarte sănătos"
          }
        ]
      }
    },
    {
      "id": 13,
      "type": "multiple_option",
      "settings": {
        "question": "Ce folosești de obicei pentru a urmări progresul atunci când încerci să pierzi în greutate?",
        "helper": "Selectează toate opțiunile care se aplică.",
        "secondary_button_text": "Înapoi",
        "primary_button_text": "Continuă",
        "options": [
          {
            "text": "Cântar"
          },
          {
            "text": "Banda de măsurat"
          },
          {
            "text": "Analiza grăsimii corporale"
          },
          {
            "text": "Fotografii"
          },
          {
            "text": "Îmbrăcăminte"
          }
        ]
      }
    },
    {
      "id": 14,
      "type": "custom_form",
      "settings": {
        "question": "Care sunt mesele și gustările tale tipice pe parcursul zilei?",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "textarea",
            "label": "Descrie mesele și gustările pe care le consumi într-o zi obișnuită.",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 15,
      "type": "single_option",
      "settings": {
        "question": "Câte fructe mănânci pe zi?",
        "helper": "Selectează opțiunea care descrie cel mai bine cantitatea de fructe pe care o consumi zilnic.",
        "secondary_button_text": "Înapoi",
        "options": [
          {
            "text": "1-2 porții"
          },
          {
            "text": "2-4 porții"
          },
          {
            "text": "Mai mult de 4 porții"
          }
        ]
      }
    },
    {
      "id": 16,
      "type": "multiple_option",
      "settings": {
        "question": "Ce tipuri de activitate fizică îți plac?",
        "helper": "Selectează toate opțiunile care se aplică.",
        "secondary_button_text": "Înapoi",
        "primary_button_text": "Continuă",
        "options": [
          {
            "text": "Mersul pe jos"
          },
          {
            "text": "Alergatul"
          },
          {
            "text": "Yoga"
          },
          {
            "text": "Pilates"
          },
          {
            "text": "Ciclism"
          },
          {
            "text": "Ridicat de greutăți"
          },
          {
            "text": "Înot"
          },
          {
            "text": "Altceva"
          }
        ]
      }
    },
    {
      "id": 17,
      "type": "scale",
      "settings": {
        "question": "Care este nivelul tău de stres?",
        "helper": "Evaluează de la 0 (stres foarte scăzut) la 5 (stres extrem de ridicat).",
        "secondary_button_text": "Înapoi",
        "options": [
          {
            "text": "Nu sunt stresat deloc.",
            "jump": 19
          },
          {
            "text": "Sunt foarte puțin stresat.",
            "jump": 19
          },
          {
            "text": "Am un nivel moderat de stres.",
            "jump": 19
          },
          {
            "text": "Sunt destul de stresat.",
            "jump": 18
          },
          {
            "text": "Sunt foarte stresat.",
            "jump": 18
          },
          {
            "text": "Sunt extrem de stresat.",
            "jump": 18
          }
        ]
      }
    },
    {
      "id": 18,
      "type": "custom_form",
      "settings": {
        "question": "Ai încercat vreodată tehnici de relaxare, cum ar fi meditația sau exercițiile de respirație?",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "option",
            "option": "Da"
          },
          {
            "type": "option",
            "option": "Nu"
          }
        ]
      }
    },
    {
      "id": 19,
      "type": "multiple_option",
      "settings": {
        "question": "Care dintre următoarele obiceiuri contribuie la creșterea ta în greutate?",
        "helper": "Selectează toate opțiunile care se aplică.",
        "secondary_button_text": "Înapoi",
        "primary_button_text": "Continuă",
        "options": [
          {
            "text": "Mănânc porții mari de mâncare"
          },
          {
            "text": "Beau mult alcool"
          },
          {
            "text": "Iau gustări frecvente între mese"
          },
          {
            "text": "Mănânc de obicei mâncare la pachet"
          },
          {
            "text": "Mănânc când mă plictisesc"
          },
          {
            "text": "Mănânc când sunt stresat"
          },
          {
            "text": "Am renunțat recent la fumat"
          },
          {
            "text": "Mănânc multe dulciuri"
          },
          {
            "text": "Am un stil de viață sedentar"
          }
        ]
      }
    },
    {
      "id": 20,
      "type": "custom_form",
      "settings": {
        "question": "Există membri ai familiei tale care sunt supraponderali?",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "option",
            "option": "Da",
            "jump": 21
          },
          {
            "type": "option",
            "option": "Nu",
            "jump": 22
          }
        ]
      }
    },
    {
      "id": 21,
      "type": "custom_form",
      "settings": {
        "question": "Care sunt persoanele din familie cu probleme de greutate?",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "textarea",
            "label": "Menționeză care sunt persoanele din familie cu probleme de greutate.",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 22,
      "type": "custom_form",
      "settings": {
        "question": "Crezi că alte persoane îți influențează pierderea sau creșterea în greutate?",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "option",
            "option": "Da",
            "jump": 23
          },
          {
            "type": "option",
            "option": "Nu",
            "jump": 24
          }
        ]
      }
    },
    {
      "id": 23,
      "type": "custom_form",
      "settings": {
        "question": "Cum crezi că alții îți influențează pierderea sau creșterea în greutate?",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "textarea",
            "label": "Cum te influențează alte persoane?",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 24,
      "type": "custom_form",
      "settings": {
        "question": "Care este cea mai mare dificultate în gestionarea greutății tale?",
        "helper": "Descrie dificultățile pe care le întâmpini în gestionarea greutății tale.",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "textarea",
            "label": "Dificultăți în gestionarea greutății",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 25,
      "type": "custom_form",
      "settings": {
        "question": "Trăiești într-un mediu care susține un stil de viață sănătos?",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "option",
            "option": "Da"
          },
          {
            "type": "option",
            "option": "Nu"
          }
        ]
      }
    },
    {
      "id": 26,
      "type": "custom_form",
      "settings": {
        "question": "Ai fost diagnosticat cu vreo afecțiune medicală?",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "option",
            "option": "Da",
            "jump": 27
          },
          {
            "type": "option",
            "option": "Nu",
            "jump": 28
          }
        ]
      }
    },
    {
      "id": 27,
      "type": "custom_form",
      "settings": {
        "question": "Care sunt afecțiunile medicale cu care ai fost diagnosticat?",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "textarea",
            "label": "Enumeră orice afecțiuni medicale cu care ai fost diagnosticat.",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 28,
      "type": "custom_form",
      "settings": {
        "question": "Folosești în prezent vreun medicament sau supliment?",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "option",
            "option": "Da",
            "jump": 29
          },
          {
            "type": "option",
            "option": "Nu",
            "jump": 30
          }
        ]
      }
    },
    {
      "id": 29,
      "type": "custom_form",
      "settings": {
        "question": "Care sunt medicamentele sau suplimentele pe care le folosești în prezent?",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "textarea",
            "label": "Enumeră toate medicamentele și suplimentele pe care le iei în prezent.",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 30,
      "type": "steps",
      "settings": {
        "heading": "Care sunt pașii pe care îi vom parcurge",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "steps": [
          {
            "text": "Răspunde la întrebări despre stilul tău de viață",
            "helper": "Răspunde la întrebări despre dieta, activitatea fizică și obiceiurile tale zilnice.",
            "status": "checked"
          },
          {
            "text": "Completează-ți profilul",
            "helper": "Răspunde la întrebări despre corpul tău, cum ar fi greutatea, înălțimea, etc.",
            "status": "checked"
          },
          {
            "text": "Primește un plan personalizat",
            "helper": "Un expert în sănătate va analiza toate informațiile tale și va crea un plan personalizat pentru pierderea în greutate într-un mod sănătos",
            "status": "unchecked"
          },
          {
            "text": "Monitorizează-ți progresul",
            "helper": "Evaluează-ți progresul pentru a vedea cât de mult ai avansat în călătoria ta de pierdere în greutate.",
            "status": "unchecked"
          }
        ]
      }
    },
    {
      "id": 31,
      "type": "custom_form",
      "settings": {
        "question": "Ce vârstă ai?",
        "helper": "Introdu vârsta ta în ani",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "numeric",
            "label": "Vârsta",
            "measurement": "Ani",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 32,
      "type": "custom_form",
      "settings": {
        "question": "Care este înălțimea ta?",
        "helper": "Introdu înălțimea ta în centimetri.",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "numeric",
            "label": "Inălțime",
            "measurement": "cm",
            "mandatory": true,
            "error_message": "Camp obligatoriu"
          }
        ]
      }
    },
    {
      "id": 33,
      "type": "custom_form",
      "settings": {
        "question": "Care este sexul tău?",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "option",
            "option": "Bărbat",
            "jump": 37
          },
          {
            "type": "option",
            "option": "Femeie",
            "jump": 34
          }
        ]
      }
    },
    {
      "id": 34,
      "type": "custom_form",
      "settings": {
        "question": "Ai un ciclu menstrual regulat?",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "option",
            "option": "Da"
          },
          {
            "type": "option",
            "option": "Nu"
          }
        ]
      }
    },
    {
      "id": 35,
      "type": "custom_form",
      "settings": {
        "question": "Suferi de Sindromul Ovarelor Polichistice?",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "option",
            "option": "Da"
          },
          {
            "type": "option",
            "option": "Nu"
          }
        ]
      }
    },
    {
      "id": 36,
      "type": "custom_form",
      "settings": {
        "question": "Folosești pilule contraceptive?",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "option",
            "option": "Da"
          },
          {
            "type": "option",
            "option": "Nu"
          }
        ]
      }
    },
    {
      "id": 37,
      "type": "single_option",
      "settings": {
        "question": "Cât de hotărât ești să faci schimbări în stilul de viață pentru a-ți atinge obiectivele de greutate?",
        "helper": "(Alege opțiunea care reflectă cel mai bine nivelul tău de angajament.",
        "secondary_button_text": "Înapoi",
        "options": [
          {
            "text": "Nu doresc să fac schimbări"
          },
          {
            "text": "Sunt dispus să fac schimbări minore"
          },
          {
            "text": "Sunt deschis la ideea de a face ajustări semnificative"
          },
          {
            "text": "Sunt hotărât să fac schimbări substanțiale"
          },
          {
            "text": "Sunt dedicat să fac schimbări majore și să progresez constant"
          }
        ]
      }
    },
    {
      "id": 38,
      "type": "custom_form",
      "settings": {
        "question": "Vrei să ne spui ceva în plus care crezi că ar putea avea un impact asupra pierderii tale în greutate?",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "fields": [
          {
            "type": "textarea",
            "label": "Enumeră orice informație care crezi că ar putea avea un impact",
            "mandatory": false
          }
        ]
      }
    },
    {
      "id": 39,
      "type": "contact",
      "settings": {
        "heading": "Cum dorești să îți prezentăm planul personalizat pentru pierderea în greutate?",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi",
        "contact": [
          {
            "text": "Ședință de coaching online",
            "description": "Participi la o ședință de coaching online în care îți este prezentat planul tău personalizat pentru pierderea în greutate de la un expert în sănătate.",
            "image_url": "https://cdn.shopify.com/s/files/1/0761/6112/2639/files/recommendation.jpg?v=1713449257"
          },
          {
            "text": "Email cu recomandări",
            "description": "Primești planul personalizat pe email, cu recomandări pentru pierderea în greutate de la un expert în sănătate.",
            "image_url": "https://cdn.shopify.com/s/files/1/0761/6112/2639/files/email.jpg?v=1718020196"
          }
        ]
      }
    },
    {
      "id": 40,
      "type": "register_form",
      "settings": {
        "heading": "Datele tale de contact",
        "helper": "Te rugăm să ne oferi informațiile tale de contact pentru a-ți putea trimite planul personalizat și pentru a putea discuta eventuale detalii suplimentare.",
        "first_name_label": "Prenume",
        "last_name_label": "Nume",
        "email_label": "Email",
        "text_error_message": "Camp obligatoriu",
        "email_error_message": "Format invalid de email",
        "primary_button_text": "Continuă",
        "secondary_button_text": "Înapoi"
      }
    },
    {
      "id": 41,
      "type": "message",
      "settings": {
        "text": "<span id='ty_name'></span>, felicitări, ai făcut un pas important pentru sănătatea ta. <br/><br /><span id='ty_email'>Un expert în sănătate va revizui informațiile tale și îți va trimite în curând planul personalizat prin email.</span> <span id='ty_online'>Un expert în sănătate te va contacta pentru a stabili detaliile ședinței de coaching online.</span> <br /><br />De acum înainte, vei avea alături de tine un partener de sănătate pe viață.",
        "primary_button_text": "Explorează mai mult",
        "url": "https://folkhealth.ro"
      }
    }
  ]
}