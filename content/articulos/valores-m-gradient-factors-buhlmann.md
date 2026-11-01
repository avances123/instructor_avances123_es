---
title: "Valores M y Gradient Factors en Bühlmann ZHL-16: Guía Técnica sin Dogmas"
seoTitle: "Valores M y Gradient Factors (GF) en Bühlmann ZHL-16 | Sidemount Spain"
description: "Cómo funciona realmente el algoritmo Bühlmann ZHL-16: valores M, cinética de gases tisulares y ajuste de Gradient Factors (GF Low / GF High) explicados por un ingeniero."
seoDescription: "Explicación técnica y matemática de los valores M y Factores de Gradiente (GF Low/High) de Erik Baker en el algoritmo Bühlmann ZHL-16 para buceo técnico."
layout: legal
ShowReadingTime: false
showToc: false
math: true
weight: 3
cover:
    image: /articulos-img/deco-m-values-gradient-factors.webp
---

# La física real detrás de tu ordenador de buceo

{{< rawhtml >}}
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; margin: 1.5rem 0 2rem 0; box-shadow: 0 4px 20px rgba(0,0,0,0.35);">
  <iframe 
    src="https://www.youtube-nocookie.com/embed/MnVKxapiPv0" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border:0;" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
    loading="lazy"
    title="Deco para nerds [4 M-VALUES Y GF] - Taller Bühlmann ZHL-16">
  </iframe>
</div>
{{< /rawhtml >}}

Cuando miras la pantalla de un *Shearwater*, un *Garmin* o planificas una inmersión técnica en *Subsurface*, el software te muestra metros de profundidad y minutos de tiempo de parada. Sin embargo, **el algoritmo de descompresión no tiene ni idea de qué es un metro ni qué es el agua de mar**.

El algoritmo **Bühlmann ZHL-16** es un motor matemático que solo entiende de **presiones absolutas y tensiones de gas inerte**. Los metros son un mero artificio cosmético que añade la interfaz del ordenador aplicando correcciones de densidad, salinidad y presión barométrica en superficie.

En esta sesión del taller técnico *«Deco para nerds»*, analizamos con mentalidad de sistemas cómo se calcula la frontera entre una desaturación controlada y el riesgo de enfermedad descompresiva: el concepto de **Valor M** y el ajuste de **Factores de Gradiente (Gradient Factors - GF)** introducido por Erik Baker.

---

## 1. El concepto de Valor M (*M-Value*): La frontera de sobresaturación

Durante el descenso y el tiempo de fondo (*on-gassing*), los diferentes compartimentos tisulares del cuerpo absorben gas inerte (nitrógeno y helio) porque la presión parcial alveolar en los pulmones es mayor que la tensión de gas en los tejidos. Al ascender, la presión ambiente disminuye y se produce la inversión: la tensión del gas en el tejido pasa a ser mayor que la presión externa (*off-gassing*).

En ese momento el tejido entra en **sobresaturación**. El cuerpo humano puede tolerar cierto grado de sobresaturación sin que el gas disuelto precipite en fase gaseosa libre (microburbujas sintomáticas).

El **Valor M** (definido históricamente por Robert Workman y perfeccionado por Albert Bühlmann) es la **máxima tensión de gas inerte que un compartimento tisular específico puede soportar a una presión ambiente determinada sin manifestar síntomas de enfermedad descompresiva (ED)**.

En el modelo de Bühlmann, la relación entre la presión ambiente y la tolerancia máxima del tejido es una función lineal gobernada por dos coeficientes específicos ($a$ y $b$) para cada uno de los 16 compartimentos:

$$\text{Valor M} = \frac{P_{\text{amb}}}{b} + a$$

O, expresado desde la perspectiva inversa del algoritmo (que calcula techos de ascenso seguros en función de la tensión actual del tejido):

$$P_{\text{amb, tolerada}} = \frac{P_{\text{comp}} - a}{b}$$

* **Coeficiente $a$:** Representa la tolerancia de sobresaturación del tejido a presión cero (tensión intrínseca admisible).
* **Coeficiente $b$:** Pendiente de la recta que determina cómo varía la tolerancia a medida que aumenta la presión ambiente absoluta.

---

## 2. Las tres zonas de presión en el buceo

Si representamos en un gráfico cartesiano la **Presión del Tejido** frente a la **Presión Ambiente**, el espacio de inmersión queda dividido en tres franjas críticas:

1. **Zona de Saturación / Carga (*On-gassing*):** 
   Situada por debajo de la línea de 45° ($y = x$, donde $P_{\text{tejido}} = P_{\text{ambiente}}$). La presión ambiente es superior a la del tejido; el compartimento está absorbiendo gas inerte.
2. **Zona de Ventana Descompresiva Segura (*Off-gassing*):** 
   Comprendida entre la línea de saturación ($GF = 0\%$) y la línea de Valor M ($GF = 100\%$). Aquí la presión en el tejido es superior a la presión ambiente, lo que fuerza la difusión del gas hacia la sangre y los alvéolos, pero **dentro de los límites de tolerancia biológica calculados por el algoritmo**.
3. **Zona Crítica de Sobresaturación:** 
   Cualquier punto que cruce por encima de la línea del Valor M. El gradiente de presión supera la capacidad de retención en solución del tejido, disparando la formación descontrolada de burbujas en el lecho vascular o en los tejidos conectivos.

> **Importante:** La línea de Valor M no es una frontera binaria infalible. Es un umbral estadístico calibrado empíricamente. Factores como la hidratación, temperatura corporal, esfuerzo en fondo, perfil de inmersión y edad alteran la respuesta biológica individual.

---

## 3. Erik Baker y el hackeo de la línea roja: Factores de Gradiente (*Gradient Factors*)

El problema del modelo Bühlmann clásico es que sus valores M originales están «grabados a fuego» en las matrices matemáticas. Si buceas un domingo de verano a 22 °C en un agua tranquila, tu perfil biológico no es el mismo que si estás realizando una inmersión profunda a 10 °C con esfuerzo físico severo.

En la década de 1990, el ingeniero **Erik Baker** ideó una solución elegante: en lugar de tocar las ecuaciones tisulares subyacentes, introdujo un **factor de proporcionalidad sobre el gradiente máximo permitido**.

Los **Factores de Gradiente (GF)** permiten al buceador comprimir la ventana de sobresaturación mediante dos porcentajes: **GF Low** y **GF High**.

{{< rawhtml >}}
<div id="d3-buhlmann-container" style="background: #111827; border: 1px solid #374151; border-radius: 12px; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
    <div>
      <h3 style="margin: 0; color: #f9fafb; font-size: 1.2rem; font-weight: 600;">Simulador Interactivo de Gradient Factors (Erik Baker)</h3>
      <p style="margin: 0.25rem 0 0 0; color: #9ca3af; font-size: 0.85rem;">Compara el límite teórico de Bühlmann frente a la rampa de descompresión real según tus GF</p>
    </div>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <button type="button" class="gf-btn" onclick="setGF(50, 70)" style="display: inline-block; width: auto; margin: 0; background: #1f2937; border: 1px solid #4b5563; color: #e5e7eb; padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">50 / 70 (Tech)</button>
      <button type="button" class="gf-btn" onclick="setGF(50, 85)" style="display: inline-block; width: auto; margin: 0; background: #1f2937; border: 1px solid #4b5563; color: #e5e7eb; padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">50 / 85 (Estándar)</button>
      <button type="button" class="gf-btn" onclick="setGF(30, 70)" style="display: inline-block; width: auto; margin: 0; background: #1f2937; border: 1px solid #4b5563; color: #e5e7eb; padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">30 / 70 (Deep Stops)</button>
      <button type="button" class="gf-btn" onclick="setGF(100, 100)" style="display: inline-block; width: auto; margin: 0; background: #1f2937; border: 1px solid #4b5563; color: #e5e7eb; padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">100 / 100 (Bühlmann puro)</button>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem; background: #1f2937; padding: 1rem; border-radius: 8px;">
    <div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
        <label for="gf-low-slider" style="color: #60a5fa; font-weight: 500; font-size: 0.9rem;">GF Low (Primera Parada Profunda):</label>
        <span id="gf-low-val" style="color: #60a5fa; font-weight: 700; font-family: monospace;">50%</span>
      </div>
      <input type="range" id="gf-low-slider" min="10" max="100" value="50" step="5" style="width: 100%; cursor: pointer;" oninput="updateFromSliders()">
      <small style="color: #9ca3af; font-size: 0.75rem; display: block; margin-top: 2px;">Limita el gradiente al disparar la parada más profunda.</small>
    </div>
    <div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
        <label for="gf-high-slider" style="color: #f59e0b; font-weight: 500; font-size: 0.9rem;">GF High (Salida a Superficie M₀):</label>
        <span id="gf-high-val" style="color: #f59e0b; font-weight: 700; font-family: monospace;">70%</span>
      </div>
      <input type="range" id="gf-high-slider" min="30" max="100" value="70" step="5" style="width: 100%; cursor: pointer;" oninput="updateFromSliders()">
      <small style="color: #9ca3af; font-size: 0.75rem; display: block; margin-top: 2px;">Margen de sobresaturación al romper la superficie.</small>
    </div>
  </div>

  <div style="position: relative; width: 100%; overflow: hidden;">
    <svg id="buhlmann-svg" viewBox="0 0 760 480" style="width: 100%; height: auto; display: block;"></svg>
    <div id="chart-tooltip" style="position: absolute; display: none; background: rgba(17, 24, 39, 0.95); border: 1px solid #4b5563; border-radius: 6px; padding: 8px 12px; font-size: 0.8rem; color: #f3f4f6; pointer-events: none; z-index: 10; box-shadow: 0 4px 6px rgba(0,0,0,0.3); font-family: monospace;"></div>
  </div>

  <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 1rem; margin-top: 1.25rem; font-size: 0.8rem; color: #d1d5db; border-top: 1px solid #374151; padding-top: 1rem;">
    <div style="display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; background: rgba(239, 68, 68, 0.6); border: 1px solid #ef4444; border-radius: 2px;"></span>
      <span>Zona Crítica (ED / Burbujas)</span>
    </div>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; background: rgba(245, 158, 11, 0.4); border: 1px dashed #f59e0b; border-radius: 2px;"></span>
      <span>Margen de Conservadurismo GF</span>
    </div>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; background: rgba(16, 185, 129, 0.4); border: 1px solid #10b981; border-radius: 2px;"></span>
      <span>Ventana Deco Segura (Off-gassing)</span>
    </div>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; background: rgba(59, 130, 246, 0.3); border: 1px solid #3b82f6; border-radius: 2px;"></span>
      <span>Carga de Gas (On-gassing)</span>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script>
(function() {
  let gfLow = 50;
  let gfHigh = 70;

  // Parámetros representativos de tejido medio Bühlmann (Tejido 5 / 27 min)
  const a = 1.1698;
  const b = 0.8618;
  const pStop1 = 3.0; // 20m = 3.0 bar
  const pSurface = 1.0; // 1.0 bar absoluto

  const margin = {top: 30, right: 35, bottom: 55, left: 65};
  const width = 760 - margin.left - margin.right;
  const height = 480 - margin.top - margin.bottom;

  const svg = d3.select("#buhlmann-svg");
  const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear().domain([0.8, 4.5]).range([0, width]);
  const y = d3.scaleLinear().domain([0.8, 5.5]).range([height, 0]);

  // Ejes
  const xAxis = d3.axisBottom(x).ticks(8).tickFormat(d => d + " bar");
  const yAxis = d3.axisLeft(y).ticks(8).tickFormat(d => d + " bar");

  g.append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis)
    .attr("color", "#6b7280")
    .selectAll("text")
    .attr("fill", "#9ca3af")
    .attr("font-size", "11px");

  g.append("g")
    .attr("class", "y-axis")
    .call(yAxis)
    .attr("color", "#6b7280")
    .selectAll("text")
    .attr("fill", "#9ca3af")
    .attr("font-size", "11px");

  // Gridlines
  g.append("g")
    .attr("class", "grid")
    .call(d3.axisLeft(y).ticks(8).tickSize(-width).tickFormat(""))
    .attr("stroke", "#374151")
    .attr("stroke-opacity", 0.3);

  g.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).ticks(8).tickSize(-height).tickFormat(""))
    .attr("stroke", "#374151")
    .attr("stroke-opacity", 0.3);

  // Etiquetas de Ejes
  g.append("text")
    .attr("x", width / 2)
    .attr("y", height + 42)
    .attr("fill", "#d1d5db")
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "500")
    .text("Presión Ambiente P_amb (Presión externa / Profundidad)");

  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -45)
    .attr("fill", "#d1d5db")
    .attr("text-anchor", "middle")
    .attr("font-size", "13px")
    .attr("font-weight", "500")
    .text("Tensión de Gas en el Tejido P_comp (bar)");

  // Capas de áreas
  const onGassingArea = g.append("path").attr("fill", "rgba(59, 130, 246, 0.15)");
  const offGassingArea = g.append("path").attr("fill", "rgba(16, 185, 129, 0.2)");
  const gfBufferArea = g.append("path").attr("fill", "rgba(245, 158, 11, 0.18)");
  const criticalArea = g.append("path").attr("fill", "rgba(239, 68, 68, 0.18)");

  // Líneas
  const mValueLine = g.append("line").attr("stroke", "#ef4444").attr("stroke-width", 2.5);
  const equilLine = g.append("line").attr("stroke", "#3b82f6").attr("stroke-width", 2).attr("stroke-dasharray", "4,4");
  const gfPath = g.append("path").attr("stroke", "#f59e0b").attr("stroke-width", 2.5).attr("fill", "none");

  // Etiquetas de curvas
  const mLabel = g.append("text").attr("fill", "#f87171").attr("font-size", "12px").attr("font-weight", "600");
  const equilLabel = g.append("text").attr("fill", "#60a5fa").attr("font-size", "11px").text("Equilibrio P_amb = P_tejido (0% GF)");
  const gfLabel = g.append("text").attr("fill", "#fbbf24").attr("font-size", "12px").attr("font-weight", "600");

  // Puntos interactivos destacados
  const pM0Dot = g.append("circle").attr("r", 5).attr("fill", "#ef4444").attr("stroke", "#fff").attr("stroke-width", 1.5);
  const pGfHighDot = g.append("circle").attr("r", 6).attr("fill", "#f59e0b").attr("stroke", "#fff").attr("stroke-width", 2);
  const pGfLowDot = g.append("circle").attr("r", 6).attr("fill", "#60a5fa").attr("stroke", "#fff").attr("stroke-width", 2);

  const m0Text = g.append("text").attr("fill", "#fca5a5").attr("font-size", "11px").attr("font-family", "monospace");
  const gfHighText = g.append("text").attr("fill", "#fde68a").attr("font-size", "11px").attr("font-family", "monospace");
  const gfLowText = g.append("text").attr("fill", "#bfdbfe").attr("font-size", "11px").attr("font-family", "monospace");

  function mVal(p) {
    return (p / b) + a;
  }

  function getGfAtP(p, low, high) {
    if (p >= pStop1) return low / 100;
    if (p <= pSurface) return high / 100;
    const slope = ((high - low) / 100) / (pSurface - pStop1);
    return (low / 100) + slope * (p - pStop1);
  }

  function pTolGf(p, low, high) {
    const gf = getGfAtP(p, low, high);
    const m = mVal(p);
    return p + gf * (m - p);
  }

  function render() {
    const pMin = 0.8;
    const pMax = 4.5;

    // Línea de equilibrio (y = x)
    equilLine
      .attr("x1", x(pMin)).attr("y1", y(pMin))
      .attr("x2", x(pMax)).attr("y2", y(pMax));
    equilLabel
      .attr("x", x(3.1))
      .attr("y", y(3.1) + 16)
      .attr("transform", `rotate(-32, ${x(3.1)}, ${y(3.1)})`);

    // Línea M-Value pura
    mValueLine
      .attr("x1", x(pMin)).attr("y1", y(mVal(pMin)))
      .attr("x2", x(pMax)).attr("y2", y(mVal(pMax)));
    mLabel
      .attr("x", x(2.2))
      .attr("y", y(mVal(2.2)) - 8)
      .attr("transform", `rotate(-36, ${x(2.2)}, ${y(mVal(2.2))})`)
      .text("Línea de Valor M de Bühlmann (100% límite)");

    // Línea GF
    const samplePoints = d3.range(pMin, pMax + 0.05, 0.1);
    const gfLineData = samplePoints.map(p => ({p: p, tol: pTolGf(p, gfLow, gfHigh)}));

    const lineGen = d3.line().x(d => x(d.p)).y(d => y(d.tol));
    gfPath.datum(gfLineData).attr("d", lineGen);

    gfLabel
      .attr("x", x(1.8))
      .attr("y", y(pTolGf(1.8, gfLow, gfHigh)) - 8)
      .attr("transform", `rotate(-34, ${x(1.8)}, ${y(pTolGf(1.8, gfLow, gfHigh))})`)
      .text(`Rampa GF (${gfLow}/${gfHigh})`);

    // Relleno de áreas
    const areaOnGassing = d3.area().x(d => x(d)).y0(height).y1(d => y(d));
    onGassingArea.datum(samplePoints).attr("d", areaOnGassing);

    const areaOffGassing = d3.area().x(d => x(d.p)).y0(d => y(d.p)).y1(d => y(d.tol));
    offGassingArea.datum(gfLineData).attr("d", areaOffGassing);

    const areaGfBuffer = d3.area().x(d => x(d.p)).y0(d => y(d.tol)).y1(d => y(mVal(d.p)));
    gfBufferArea.datum(gfLineData).attr("d", areaGfBuffer);

    const areaCritical = d3.area().x(d => x(d)).y0(d => y(mVal(d))).y1(0);
    criticalArea.datum(samplePoints).attr("d", areaCritical);

    // Puntos destacados
    const m0Val = mVal(pSurface);
    pM0Dot.attr("cx", x(pSurface)).attr("cy", y(m0Val));
    m0Text.attr("x", x(pSurface) + 8).attr("y", y(m0Val) - 6).text(`M₀ = ${m0Val.toFixed(2)} bar`);

    const gfHighPt = pTolGf(pSurface, gfLow, gfHigh);
    pGfHighDot.attr("cx", x(pSurface)).attr("cy", y(gfHighPt));
    gfHighText.attr("x", x(pSurface) + 10).attr("y", y(gfHighPt) + 4).text(`Salida GF High (${gfHigh}%): ${gfHighPt.toFixed(2)} bar`);

    const gfLowPt = pTolGf(pStop1, gfLow, gfHigh);
    pGfLowDot.attr("cx", x(pStop1)).attr("cy", y(gfLowPt));
    gfLowText.attr("x", x(pStop1) - 130).attr("y", y(gfLowPt) - 10).text(`1ª Parada GF Low (${gfLow}%): ${gfLowPt.toFixed(2)} bar`);
  }

  window.setGF = function(low, high) {
    gfLow = low;
    gfHigh = high;
    document.getElementById("gf-low-slider").value = low;
    document.getElementById("gf-high-slider").value = high;
    document.getElementById("gf-low-val").innerText = low + "%";
    document.getElementById("gf-high-val").innerText = high + "%";
    render();
  };

  window.updateFromSliders = function() {
    gfLow = parseInt(document.getElementById("gf-low-slider").value);
    gfHigh = parseInt(document.getElementById("gf-high-slider").value);
    document.getElementById("gf-low-val").innerText = gfLow + "%";
    document.getElementById("gf-high-val").innerText = gfHigh + "%";
    render();
  };

  render();
})();
</script>
{{< /rawhtml >}}

* **GF Low (Factor de Gradiente Bajo):** Define el porcentaje de la línea de Valor M al que el algoritmo activa la **primera parada de descompresión** (la más profunda). Un GF Low del 50 % obliga al buceador a detener su ascenso mucho antes de que el tejido líder alcance su tensión máxima admisible.
* **GF High (Factor de Gradiente Alto):** Define el porcentaje máximo de Valor M admisible en el momento de **salir a la superficie** ($M_0$). Un GF High del 70 % garantiza que saldrás del agua manteniendo un margen de seguridad del 30 % respecto al techo fisiológico de Bühlmann.
* **La pendiente lineal:** Entre la primera parada y la superficie, el ordenador calcula una interpolación lineal continua, ajustando el conservadurismo de cada parada intermedia.

Por razones históricas y operativas de descompresión por etapas, esta rampa continua se discretiza en **escalones de 3 metros (0,3 bar)**.

---

## 4. Configuraciones habituales de GF: Criterio frente a mitos

En la década de los 2000 estuvo muy extendida la moda de forzar paradas profundas empíricas utilizando valores de GF Low extremadamente agresivos (por ejemplo, `20/70` o `30/70`).

La investigación contemporánea (notablemente los estudios de la *Navy Experimental Diving Unit - NEDU* liderados por David Doolette) demostró que **paradas profundas artificialmente excesivas pueden ser contraproducentes**: obligan al buceador a detenerse a cotas donde los tejidos lentos todavía continúan cargando gas inerte (*on-gassing*), sin que los tejidos rápidos desaturen con suficiente eficacia.

### Puntos de partida recomendados en circuito abierto y trimix:
* **`50/70` – Perfil conservador técnico:** Muy utilizado en inmersiones profundas con descompresión con oxígeno al 100 %, frío o perfiles exigentes. Asegura una salida a superficie con baja tensión tisular residual.
* **`50/80` o `55/85` – Estándar equilibrado:** Excelente equilibrio entre tiempo total de descompresión (*runtime*) y ventana de desaturación eficiente en paradas someras (6 m y 3 m).

---

## 5. La conexión con el agua: Por qué la teoría matemática exige estabilidad milimétrica

Todo el cálculo de Bühlmann y Baker asume una premisa estricta: **que el buceador permanece inmóvil a una presión constante durante cada minuto de parada**.

Analicemos la física en la parada decisiva de 6 metros:
* A 6 metros, la presión absoluta es de **1,6 bar**.
* A 5 metros, la presión absoluta es de **1,5 bar**.
* **Una oscilación de apenas 1 metro representa una variación del 6,25 % en la presión absoluta**. En una parada a 3 metros (1,3 bar), esa misma oscilación representa casi un **10 % de variación súbita de presión**.

Si en tu parada de descompresión a 6 metros oscilas verticalmente arriba y abajo porque no dominas el *trim* o no tienes control fino de la flotabilidad, **estás alterando caóticamente el gradiente de difusión alveolar**. De nada sirve programar un *Shearwater* con precisión de un decimal si tu cuerpo se desplaza un metro arriba y abajo al respirar o al mover las aletas.

### Por qué el Sidemount es la plataforma ideal para la descompresión
La configuración en **Sidemount** ubica el centro de masa de las botellas exactamente alineado con el eje pulmonar y los costados del torso:
1. Permite mantener un **trim riguroso a 0° horizontal** con esfuerzo muscular cero.
2. Elimina el balanceo lateral (*roll*) que genera un bibotella pesado sobre la espalda.
3. Facilita permanecer suspendido en el agua como una estatua frente al cabo de fondeo o la boya de descompresión, garantizando que el gradiente que calculó Erik Baker se cumpla en tus tejidos con precisión milimétrica.

---

### ¿Quieres dominar la teoría y la ejecución en el agua?
En **Sidemount Spain** no enseñamos a coleccionar carnets: desgranamos la física, la configuración y la técnica en el agua mediante vídeo-análisis exhaustivo.

* Conoce nuestro curso de formación técnica: [Curso TDI Sidemount](/cursos/buceo-tecnico/sidemount/)
* Explora la transición técnica con dos botellas: [Curso TDI Intro to Tech](/cursos/buceo-tecnico/itt/)
* Mira la serie completa de teoría en YouTube: [Lista de reproducción «Deco para nerds» en YouTube](https://www.youtube.com/playlist?list=PLzyxNTrI75wBF9p-fjY6gqK-3AKo5PDRA)
