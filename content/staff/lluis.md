---
title: 'Lluis Vila' # in any language you want
url: "/lluis"
description: 'Mi historia como buceador e instructor'
disableShare: true
layout: legal
ShowReadingTime: false
showToc: false
Image: /tech_diving.jpg
cover:
    image: /lluis.png
---



{{< rawhtml >}}
<style>

/* Timeline Container */
.timeline {
  margin: 20px auto;
  padding: 20px;
}

.fotito {
  width: 100%;
  max-width: 400px;
  height: auto;
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
}

/* Card container */
.card {
  position: relative;
  max-width: 1200px;
}

/* setting padding based on even or odd */
.card:nth-child(odd) {
  padding: 30px 0 30px 30px;
}
.card:nth-child(even) {
  padding: 30px 30px 30px 0;
}
/* Global ::before */
.card::before {
  content: "";
  position: absolute;
  width: 50%;
  border: solid var(--primary);
}

/* Setting the border of top, bottom, left */
.card:nth-child(odd)::before {
  left: 0px;
  top: -4.5px;
  bottom: -4.5px;
  border-width: 5px 0 5px 5px;
  border-radius: 50px 0 0 50px;
}

/* Setting the border of top, bottom, right */
.card:nth-child(even)::before {
  right: 0;
  top: 0;
  bottom: 0;
  border-width: 5px 5px 5px 0;
  border-radius: 0 50px 50px 0;
}

/* Removing the border if it is the first card */
.card:first-child::before {
  border-top: 0;
  border-top-left-radius: 0;
}

/* Removing the border if it is the last card  and it's odd */
.card:last-child:nth-child(odd)::before {
  border-bottom: 0;
  border-bottom-left-radius: 0;
}

/* Removing the border if it is the last card  and it's even */
.card:last-child:nth-child(even)::before {
  border-bottom: 0;
  border-bottom-right-radius: 0;
}

/* Information about the timeline */
.info {
  display: flex;
  flex-direction: column;
  background: var(--card-background-color);
  color: gray;
  border-radius: 10px;
  padding: 10px;
}

/* Title of the card */
.title {
  color: var(--primary);
  position: relative;
}

/* Timeline dot  */
.title::before {
  content: "";
  position: absolute;
  margin-top:15px;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 999px;
  border: 3px solid var(--primary);
}

/* text right if the card is even  */
.card:nth-child(even) > .info > .title {
  text-align: right;
}

/* setting dot to the left if the card is odd */
.card:nth-child(odd) > .info > .title::before {
  left: -45px;
}

/* setting dot to the right if the card is odd */
.card:nth-child(even) > .info > .title::before {
  right: -45px;
}

@media only screen and (max-width: 500px) {
    .corto {
        display: block;
    }
    .largo{
        display: none;
    }
  }
@media only screen and (min-width: 500px) {
    .corto {
        display: none;
    }
    .largo{
        display: block;
    }
  }
  }

</style>
<div class="timeline">
  <div class="outer">
    <div class="card">
      <div class="info">
        <h3 class="title">Actualidad</h3>
        <h4>Buceando sin parar</h4>
        <div>
            <img src="/a1f003ee-b4ec-472a-9e9b-cccb4a88004b.jpeg" class="fotito"  />
            <p class="largo" style="text-align: justify">En este momento, mi enfoque principal se centra en la inmersión en ambientes de cuevas, empleando la técnica de configuración sidemount en el buceo técnico. Mi compromiso no solo se limita a explorar estas fascinantes cuevas, sino también a compartir mi experiencia y conocimientos. Me encuentro ofreciendo cursos especializados a buceadores, abarcando todos los niveles, con el propósito de formar a futuros exploradores del buceo técnico y de cuevas. Esta labor educativa y de entrenamiento se realiza en colaboración con nuestro equipo, donde nos esforzamos por proporcionar una formación completa y segura para aquellos apasionados por estas modalidades de buceo.</p>
            <p class="corto" style="text-align: justify">En la actualidad, me dedico con gran dedicación al buceo técnico en entornos de cuevas, empleando la técnica de configuración sidemount. Además, imparto cursos de todos los niveles a aquellos entusiastas del buceo técnico y de cuevas que han optado por recibir formación con nuestro equipo.</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="info">
        <h3 class="title">2022</h3>
        <h4 style="text-align: right">Comienzo con el buceo en cuevas</h4>
        <div>
            <img src="/7b24eb01-a507-4072-bad6-2dd769b9304a.jpeg" class="fotito"  />
            <p class="largo" style="text-align: justify">En este momento, gracias al apoyo de David de las Heras, he obtenido la certificación como instructor TDI Intro to Tech y como instructor TDI de cavernas utilizando la configuración Sidemount. Este logro representa un avance significativo hacia mi objetivo de convertirme en formador en entornos cerrados. La historia continúa...</p>
            <p class="corto" style="text-align: justify">En este momento, gracias al apoyo de David de las Heras, he obtenido la certificación como instructor TDI Intro to Tech y como instructor TDI de cavernas utilizando la configuración Sidemount. Este logro representa un avance significativo hacia mi objetivo de convertirme en formador en entornos cerrados. La historia continúa..</p>
        </div>
      </div>
    </div>
    
    <div class="card">
      <div class="info">
        <h3 class="title">2015</h3>
        <h4>Comienzo con el buceo técnico</h4>
        <div>
            <img src="/af88c58c-6ae9-44c1-b70f-d785fc0e4d4f.jpeg" class="fotito"  />
            <p class="largo" style="text-align: justify">La aventura no se detiene ahí. A medida que exploraba diferentes tipos de inmersiones, me sentía cada vez más atraído por entornos marinos más delicados y desafiantes. Fue entonces cuando surgió en mí el anhelo de sumergirme en el mundo del buceo en cuevas. En el año 2015, de la mano de Deniss Kozlovs, inicié mi travesía en el buceo técnico. Durante este tiempo, adquirí certificaciones significativas, como buceador TDI Fullcave, Trimix, Nitrox Avanzado y Procedimientos Descompresivos.</p>
            <p class="corto" style="text-align: justify">La experiencia no termina ahí. Al realizar distintos tipos de inmersiones, me atrajeron entornos marinos más delicados y desafiantes. En 2015, con Deniss Kozlovs, comencé mi aventura en el buceo técnico, obteniendo certificaciones como buceador TDI Fullcave, Trimix, Nitrox Avanzado y Procedimientos Descompresivos.</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="info">
        <h3 class="title">2012</h3>
        <h4 style="text-align: right">Comienzo a ser instructor</h4>
        <div>
            <img src="/4c6f2599-ed22-4238-babb-3ba0d064c03e.jpeg" class="fotito"  />
            <p class="largo" style="text-align: justify">El respaldo incondicional de mis amigos y familiares ha sido fundamental en el logro de un sueño personal: obtener la certificación como Instructor PADI. Este hito representa una continuación significativa en mi trayectoria formativa, permitiéndome avanzar en mi capacitación como instructor especializado en MASTER SCUBA DIVER TRAINER. Su apoyo constante ha sido un pilar invaluable en este emocionante viaje hacia el dominio y la excelencia en el mundo del buceo.</p>
            <p class="corto" style="text-align: justify">Mis amigos y familiares me brindaron aliento y apoyo para lograr un sueño: obtener la certificación como Instructor PADI. Este paso marca la continuación de mi formación como instructor especializado en MASTER SCUBA DIVER TRAINER.</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="info">
        <h3 class="title">2003</h3>
        <h4>Comienzo a bucear</h4>
        <div>
            <img src="/628a8d4f-fe45-4ce6-afb1-515019dd01d6.jpeg" class="fotito" />
            <p class="largo" style="text-align: justify">Mis primeros pasos como buceador de 1 estrella FECDAS se remontan al año 2003, en l’Escala (Girona - Costa Brava), un lugar verdaderamente paradisíaco para sumergirse. Desde el principio, quedó patente que este entorno era mi hogar, donde los sonidos se desvanecían, reinaba la serenidad y la belleza de los diversos paisajes subacuáticos me cautivaba cada vez más. A lo largo del tiempo, fui acumulando experiencia y ampliando mis habilidades mediante la formación en distintas especialidades, tales como buceo en pecios, grutas, inmersiones profundas, sidemount, entre otras. Esta evolución me llevó a obtener la certificación como Guía de Grupo, permitiéndome colaborar con diversos Centros de Buceo.</p>
            <p class="corto" style="text-align: justify">En 2003, comencé como buceador de 1 estrella FECDAS en l’Escala (Girona - Costa Brava), un lugar paradisíaco. Desde entonces, me he especializado en diversas áreas del buceo, obteniendo la certificación como Guía de Grupo para colaborar con Centros de Buceo.</p>
        </div>
      </div>
    </div>

  </div>
</div>
{{< /rawhtml >}}
