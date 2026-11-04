---
title: 'Fabio Rueda' # in any language you want
seoTitle: "Fabio Rueda - Fundador e Instructor Principal | Sidemount Spain"
url: "/fabio"
description: 'Fundador e Instructor Principal de Sidemount Spain. Especialista en buceo técnico, trim y sidemount en Cataluña y España.'
seoDescription: "Conoce a Fabio Rueda, fundador e instructor principal de Sidemount Spain (sidemount.es). Formador técnico en configuración lateral, trimado avanzado y buceo en cuevas."
disableShare: true
layout: legal
ShowReadingTime: false
showToc: false
Image: /tech_diving.webp
cover:
    image: /fabio_avatar.webp
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
        <h4>Fundador e Instructor Principal de Sidemount Spain</h4>
        <div>
            <img src="/yo.webp" class="fotito"  />
            <p class="largo" style="text-align: justify">Como fundador e instructor principal de Sidemount Spain (sidemount.es), dirijo la formación especializada en buceo técnico, trimado avanzado y configuración lateral en Cataluña y España. Mi vida gira en torno al buceo técnico y en cuevas, una disciplina que combino con mi profesión como ingeniero de datos y mapas. Esta combinación me permite aplicar la máxima rigurosidad técnica, el análisis métrico y la precisión matemática a la enseñanza del sidemount y la espeleología subacuática. En Sidemount Spain no enseñamos sidemount como una especialidad secundaria de catálogo: nos dedicamos de forma exclusiva a formar a buceadores técnicos bajo los estándares más exigentes de la industria.</p>
            <p class="corto" style="text-align: justify">Fundador e instructor principal de Sidemount Spain (sidemount.es). Especialista en formación técnica en montaje lateral (sidemount) y buceo en cuevas en Cataluña y España, fusionando la ingeniería de datos con la máxima precisión y disciplina bajo el agua.</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="info">
        <h3 class="title">2024</h3>
        <h4>Especializándome como instructor técnico con los mejores en la especialidad</h4>
        <div>
            <img src="/sdrill-audrey.webp" class="fotito"  />
            <p class="largo" style="text-align: justify">Durante el transcurso de este año, he alcanzado un hito significativo en mi desarrollo profesional como instructor al obtener la certificación en sidemount técnico en Malta, bajo la tutela de Audrey Cudel, una destacada instructora reconocida en la especialidad. Esta evaluación representó un proceso riguroso y exigente que ha ampliado mi competencia y conocimiento en técnicas avanzadas de buceo, específicamente en el contexto del sidemount. La instrucción recibida y el éxito obtenido en esta evaluación constituyen una validación tangible de mi habilidad para impartir formación de alta calidad en este campo especializado del buceo técnico. Este logro no solo refleja mi dedicación y compromiso con la excelencia profesional, sino que también fortalece mi capacidad para brindar una enseñanza efectiva y segura a futuros alumnos en esta disciplina exigente y técnica del buceo.</p>
            <p class="corto" style="text-align: justify">Durante este año, he avanzado como instructor al completar con éxito mi evaluación de sidemount técnico en Malta, bajo la dirección de Audrey Cudel, una instructora líder en la especialidad. Esta certificación representa un hito significativo en mi desarrollo profesional, validando mi competencia para impartir formación de alta calidad en técnicas avanzadas de buceo.</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="info">
        <h3 class="title">2023</h3>
        <h4 style="text-align: right">Comienzo a ser instructor</h4>
        <div>
            <img src="/clase.webp" class="fotito"  />
            <p class="largo" style="text-align: justify">Tras una intensa trayectoria como buceador especializado en cuevas y la configuración sidemount, sentí un fuerte llamado en mi interior, una necesidad de compartir toda la valiosa experiencia y conocimientos que había adquirido a lo largo de mi recorrido. Esa convicción me llevó a tomar la decisión de convertirme en instructor, aspirando a guiar a otros en el mismo camino que he recorrido para llegar a ser el buceador de cuevas que soy en la actualidad. La pasión por transmitir no solo las habilidades técnicas sino también la mentalidad disciplinada y el profundo respeto por este entorno subacuático motivaron mi elección de convertirme en un instructor, con la esperanza de inspirar y preparar a otros buceadores para abrazar este apasionante y desafiante mundo submarino.</p>
            <p class="corto" style="text-align: justify">Tras mi experiencia en cuevas y el buceo con configuración sidemount, sentí una fuerte vocación por transmitir mis conocimientos. Decidí convertirme en instructor con el deseo de compartir tanto habilidades técnicas como la mentalidad y el respeto necesarios para explorar el mundo submarino, aspirando a guiar a otros buceadores en su viaje hacia la exploración de cuevas submarinas.</p>
        </div>
      </div>
    </div>
    
    <div class="card">
      <div class="info">
        <h3 class="title">2020</h3>
        <h4>Comienzo con el buceo de cuevas</h4>
        <div>
            <img src="/GOPR1774.webp" class="fotito"  />
            <p class="largo" style="text-align: justify">Después de acumular una sólida experiencia en el buceo en aguas abiertas, sentí la llamada para adentrarme en un nuevo desafío: el buceo en cuevas. Con esa meta en mente, decidí seguir mi camino hacia el buceo de cuevas bajo la guía experta de Javier de Miguel, en la cautivadora cueva del Moraig. Fue allí donde consolidé los fundamentos esenciales para desenvolverme con seguridad en este entorno desafiante y fascinante. A través del riguroso entrenamiento y la orientación experta, adquirí la disciplina y el enfoque necesarios para operar de manera segura en estas condiciones, comprendiendo la importancia de la preparación meticulosa y el respeto por el entorno subterráneo. Este período de formación no solo fortaleció mis habilidades, sino que también me brindó una comprensión más profunda y una apreciación renovada por la belleza y complejidad del buceo en cuevas.</p>
            <p class="corto" style="text-align: justify">Bajo la guía experta de Javier de Miguel en la cueva del Moraig, consolidé los fundamentos esenciales para adentrarme de manera segura en el desafiante mundo del buceo en cuevas. Este riguroso entrenamiento no solo fortaleció mis habilidades, sino que también amplió mi comprensión y aprecio por la belleza y complejidad de este entorno submarino.</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="info">
        <h3 class="title">2018</h3>
        <h4 style="text-align: right">Comienzo en el buceo técnico</h4>
        <div>
            <img src="/tdi_sidemount.webp" class="fotito"  />
            <p class="largo" style="text-align: justify">El mundo del buceo técnico se abrió ante mí como un desafío irresistible después de mi incursión inicial en el buceo recreativo. Fascinado por la idea de explorar cuevas submarinas al estilo de un astronauta, decidí adentrarme en el buceo técnico desde sus cimientos, adoptando la configuración sidemount. Determinado a dominar esta disciplina desde el principio, me formé con el antiguo referente en el sidemount en España. El proceso fue exigente y complejo, llevándome a superar desafíos que ampliaron mis límites. A pesar de la intensidad, encontré una nueva pasión en este enfoque más técnico del buceo. La fusión entre la exploración intrépida y el desafío técnico me atrapó por completo, convirtiendo lo que solía ser un pasatiempo en una dedicación seria y absorbente que me motivó a explorar aún más las profundidades desconocidas del mundo submarino.</p>
            <p class="corto" style="text-align: justify">Me adentré en el desafiante mundo del buceo técnico, adoptando la configuración sidemount, con el antiguo referente en el sidemount en España. Este enfoque exigente y emocionante amplió mis límites, convirtiendo mi pasión por el buceo en una dedicación absorbente, fusionando la exploración intrépida con desafíos técnicos, llevándome a explorar aún más las profundidades submarinas desconocidas.</p>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="info">
        <h3 class="title">2014</h3>
        <h4>Comienzo a bucear</h4>
        <div>
            <img src="/IMG-20141231-WA0071.webp" class="fotito" />
            <p class="largo" style="text-align: justify">Inspirado por la pasión de mi hermano, me sumergí en el mundo del buceo realizando mi curso de Open Water en Barcelona. Con rapidez adquirí las habilidades necesarias y comencé a explorar como buceador recreativo, navegando por las aguas de Canarias, los exuberantes arrecifes de Filipinas, las profundidades de Borneo en Indonesia y los cautivadores paisajes del Mar Rojo. Durante esa temporada, impulsado por mi curiosidad y deseo de perfeccionar mis habilidades, continué mi formación completando cursos adicionales como Advanced y Rescue de PADI. Estos cursos no solo expandieron mis conocimientos técnicos, sino que también fortalecieron mi confianza y entendimiento de la seguridad en el buceo, permitiéndome sumergirme con mayor profundidad en la maravillosa experiencia submarina.</p>
            <p class="corto" style="text-align: justify">Inspirado por mi hermano, comencé mi aventura en el buceo en Barcelona y exploré lugares como Canarias, Filipinas, Borneo e Indonesia. Completé cursos de PADI como Advanced y Rescue, ampliando mis habilidades y confianza en esta experiencia submarina.</p>
        </div>
      </div>
    </div>

  </div>
</div>
{{< /rawhtml >}}
