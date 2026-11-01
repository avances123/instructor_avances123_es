---
title: "Valores M y Gradient Factors en Bühlmann ZHL-16: Guía Técnica sin Dogmas"
seoTitle: "Valores M y Gradient Factors (GF) en Bühlmann ZHL-16 | Sidemount Spain"
description: "Cómo funciona realmente el algoritmo Bühlmann ZHL-16: valores M, cinética de gases tisulares y ajuste de Gradient Factors (GF Low / GF High) explicados por un ingeniero."
seoDescription: "Explicación técnica y matemática de los valores M y Factores de Gradiente (GF Low/High) en el algoritmo Bühlmann ZHL-16 para buceo técnico."
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

Cuando un ordenador de buceo o un planificador como *Subsurface* muestra una profundidad de parada, está traduciendo un cálculo de presiones a metros. Esa conversión depende de la presión en superficie y de la densidad del agua; no es un detalle cosmético, porque afecta a las profundidades mostradas.

El modelo **Bühlmann ZHL-16** representa la evolución de las tensiones de gas inerte en 16 compartimentos teóricos. Aquí explicamos sus valores M y los **factores de gradiente (Gradient Factors o GF)** utilizados para modificar los límites del modelo.

> Este artículo es divulgativo: no valida perfiles ni recomienda ajustes de GF para una inmersión concreta. Ningún algoritmo elimina el riesgo de enfermedad descompresiva (ED). La planificación requiere formación, procedimientos apropiados y atención a los límites del equipo y de la mezcla respirada.

---

## 1. El concepto de Valor M (*M-Value*): La frontera de sobresaturación

Los compartimentos son construcciones matemáticas, no tejidos identificados uno a uno. En el modelo, cada gas inerte se carga o se elimina según la diferencia entre su presión inspirada modelada y su tensión en el compartimento. El sentido del intercambio puede variar entre compartimentos y entre gases, especialmente después de un cambio de mezcla.

Al ascender, la reducción de presión ambiente puede producir **sobresaturación**. Pueden detectarse burbujas después de una inmersión incluso en ausencia de síntomas; la presencia de burbujas y el diagnóstico de ED no son equivalentes [3, 4].

El **valor M**, concepto asociado a Robert Workman y desarrollado en la formulación de Bühlmann, es el límite de tensión de gas inerte que el modelo asigna a un compartimento a una presión ambiente dada. Es un límite modelado, no una frontera fisiológica individual que garantice la ausencia de ED.

En el modelo de Bühlmann, la relación entre la presión ambiente y la tolerancia máxima del tejido es una función lineal gobernada por dos coeficientes específicos ($a$ y $b$) para cada uno de los 16 compartimentos:

$$\text{Valor M} = \frac{P_{\text{amb}}}{b} + a$$

Para un compartimento y GF del 100 %, la presión ambiente límite se obtiene despejando la ecuación:

$$P_{\text{amb, límite}} = b\,(P_{\text{comp}} - a)$$

Aquí $P_{\text{comp}}$ es la tensión de gas inerte del compartimento y las presiones usan unidades coherentes. El coeficiente $a$ es la ordenada en el origen de esta recta; $b$ determina su pendiente, que en esta formulación es $1/b$. La extrapolación a presión cero no debe interpretarse como una medida fisiológica directa. Para helio y nitrógeno se usan coeficientes distintos; con ambos gases, las implementaciones combinan los coeficientes según las tensiones modeladas.

---

## 2. Qué representa el gráfico de presiones

Si representamos la tensión total de gas inerte de un compartimento frente a la presión ambiente, la diagonal $P_{\text{comp}} = P_{\text{amb}}$ sirve como referencia de gradiente cero. La recta de valor M representa el límite del modelo para GF del 100 %. Entre ambas pueden dibujarse límites con GF menores.

La posición respecto a la diagonal **no indica por sí sola si el compartimento carga o elimina gas**. Para saberlo hay que comparar la tensión de cada gas con su presión inspirada modelada y considerar cómo cambia a lo largo del tiempo. Tampoco identifica una zona clínicamente segura: puede ocurrir ED dentro de los límites del modelo, y cruzar la línea M no implica necesariamente síntomas ni una formación descontrolada de burbujas.

---

## 3. Factores de gradiente (Gradient Factors)

Los factores de gradiente modifican el límite de sobresaturación utilizado por el modelo sin cambiar sus semiperíodos. Para un compartimento y una presión ambiente dados, GF es la fracción del gradiente entre la presión ambiente y el valor M:

$$P_{\text{límite GF}} = P_{\text{amb}} + GF\,(M - P_{\text{amb}})$$

En esta ecuación, GF se expresa como fracción: 70 % equivale a 0,70. No significa el 70 % del valor M absoluto ni una reducción del 30 % del riesgo de ED. Las implementaciones suelen utilizar dos ajustes, **GF Low** y **GF High**. No miden directamente cómo responde el cuerpo a la inmersión.

{{< rawhtml >}}
<div id="d3-buhlmann-container" style="background: #111827; border: 1px solid #374151; border-radius: 12px; padding: 1.5rem; margin: 2rem 0; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);">
  <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
    <div>
      <h3 style="margin: 0; color: #f9fafb; font-size: 1.2rem; font-weight: 600;">Gráfico conceptual de Gradient Factors</h3>
      <p style="margin: 0.25rem 0 0 0; color: #9ca3af; font-size: 0.85rem;">Ejemplo para un compartimento de nitrógeno, con primera parada hipotética a 3 bar y superficie a 1 bar. No calcula una inmersión, cargas tisulares ni paradas reales; no usar para planificar.</p>
    </div>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
      <button type="button" class="gf-btn" onclick="setGF(50, 70)" style="display: inline-block; width: auto; margin: 0; background: #1f2937; border: 1px solid #4b5563; color: #e5e7eb; padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">50 / 70</button>
      <button type="button" class="gf-btn" onclick="setGF(50, 85)" style="display: inline-block; width: auto; margin: 0; background: #1f2937; border: 1px solid #4b5563; color: #e5e7eb; padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">50 / 85</button>
      <button type="button" class="gf-btn" onclick="setGF(30, 70)" style="display: inline-block; width: auto; margin: 0; background: #1f2937; border: 1px solid #4b5563; color: #e5e7eb; padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">30 / 70</button>
      <button type="button" class="gf-btn" onclick="setGF(100, 100)" style="display: inline-block; width: auto; margin: 0; background: #1f2937; border: 1px solid #4b5563; color: #e5e7eb; padding: 5px 12px; border-radius: 6px; font-size: 0.8rem; cursor: pointer;">100 / 100</button>
    </div>
  </div>

  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; margin-bottom: 1.5rem; background: #1f2937; padding: 1rem; border-radius: 8px;">
    <div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
        <label for="gf-low-slider" style="color: #60a5fa; font-weight: 500; font-size: 0.9rem;">GF Low (primera parada hipotética):</label>
        <span id="gf-low-val" style="color: #60a5fa; font-weight: 700; font-family: monospace;">50%</span>
      </div>
      <input type="range" id="gf-low-slider" min="10" max="100" value="50" step="5" style="width: 100%; cursor: pointer;" oninput="updateFromSliders()">
      <small style="color: #9ca3af; font-size: 0.75rem; display: block; margin-top: 2px;">Limita el gradiente al disparar la parada más profunda.</small>
    </div>
    <div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
        <label for="gf-high-slider" style="color: #f59e0b; font-weight: 500; font-size: 0.9rem;">GF High (límite en superficie):</label>
        <span id="gf-high-val" style="color: #f59e0b; font-weight: 700; font-family: monospace;">70%</span>
      </div>
      <input type="range" id="gf-high-slider" min="30" max="100" value="70" step="5" style="width: 100%; cursor: pointer;" oninput="updateFromSliders()">
      <small style="color: #9ca3af; font-size: 0.75rem; display: block; margin-top: 2px;">Límite modelado en superficie, no tensión real de salida.</small>
    </div>
  </div>

  <div style="position: relative; width: 100%; overflow: hidden;">
    <svg id="buhlmann-svg" viewBox="0 0 760 480" style="width: 100%; height: auto; display: block;"></svg>
    <div id="chart-tooltip" style="position: absolute; display: none; background: rgba(17, 24, 39, 0.95); border: 1px solid #4b5563; border-radius: 6px; padding: 8px 12px; font-size: 0.8rem; color: #f3f4f6; pointer-events: none; z-index: 10; box-shadow: 0 4px 6px rgba(0,0,0,0.3); font-family: monospace;"></div>
  </div>

  <div style="display: flex; justify-content: space-around; flex-wrap: wrap; gap: 1rem; margin-top: 1.25rem; font-size: 0.8rem; color: #d1d5db; border-top: 1px solid #374151; padding-top: 1rem;">
    <div style="display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; background: rgba(239, 68, 68, 0.6); border: 1px solid #ef4444; border-radius: 2px;"></span>
      <span>Por encima del valor M modelado</span>
    </div>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; background: rgba(245, 158, 11, 0.4); border: 1px dashed #f59e0b; border-radius: 2px;"></span>
      <span>Entre el límite GF y el valor M</span>
    </div>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; background: rgba(16, 185, 129, 0.4); border: 1px solid #10b981; border-radius: 2px;"></span>
      <span>Entre la diagonal y el límite GF</span>
    </div>
    <div style="display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; background: rgba(59, 130, 246, 0.3); border: 1px solid #3b82f6; border-radius: 2px;"></span>
      <span>Por debajo de la diagonal</span>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/d3@7"></script>
<script>
(function() {
  let gfLow = 50;
  let gfHigh = 70;

  // Nitrógeno, compartimento 5 / 27 min; ejemplo de Subsurface [1].
  const a = 0.62;
  const b = 0.8126;
  const pStop1 = 3.0; // Primera parada hipotética, no calculada
  const pSurface = 1.0; // 1.0 bar absoluto

  const margin = {top: 30, right: 35, bottom: 55, left: 65};
  const width = 760 - margin.left - margin.right;
  const height = 480 - margin.top - margin.bottom;

  const svg = d3.select("#buhlmann-svg");
  const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleLinear().domain([1.0, 4.5]).range([0, width]);
  const y = d3.scaleLinear().domain([1.0, 6.5]).range([height, 0]);

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
    .text("Presión ambiente absoluta P_amb (bar)");

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
  const equilLabel = g.append("text").attr("fill", "#60a5fa").attr("font-size", "11px").text("Diagonal P_comp = P_amb (0% GF)");
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
    const pMin = 1.0;
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
      .text("Valor M modelado (GF 100%)");

    // Línea GF
    const samplePoints = d3.range(pMin, pMax + 0.05, 0.1);
    const gfLineData = samplePoints.map(p => ({p: p, tol: pTolGf(p, gfLow, gfHigh)}));

    const lineGen = d3.line().x(d => x(d.p)).y(d => y(d.tol));
    gfPath.datum(gfLineData).attr("d", lineGen);

    gfLabel
      .attr("x", x(1.8))
      .attr("y", y(pTolGf(1.8, gfLow, gfHigh)) - 8)
      .attr("transform", `rotate(-34, ${x(1.8)}, ${y(pTolGf(1.8, gfLow, gfHigh))})`)
      .text(`Límite con GF (${gfLow}/${gfHigh})`);

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
    gfHighText.attr("x", x(pSurface) + 10).attr("y", y(gfHighPt) + 4).text(`Límite GF High (${gfHigh}%): ${gfHighPt.toFixed(2)} bar`);

    const gfLowPt = pTolGf(pStop1, gfLow, gfHigh);
    pGfLowDot.attr("cx", x(pStop1)).attr("cy", y(gfLowPt));
    gfLowText.attr("x", x(pStop1) - 130).attr("y", y(gfLowPt) - 10).text(`Parada hipotética GF Low (${gfLow}%): ${gfLowPt.toFixed(2)} bar`);
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

* **GF Low:** influye en el límite utilizado para determinar la profundidad de la primera parada obligatoria, cuando existe. Su efecto depende del perfil y de los compartimentos que controlan el ascenso.
* **GF High:** fija el factor aplicado al límite modelado en superficie. Un 70 % deja sin utilizar el 30 % del gradiente modelado entre la presión ambiente y el valor M, no un 30 % de riesgo clínico.
* **Interpolación:** muchas implementaciones interpolan GF entre la primera parada y la superficie y presentan paradas en incrementos de profundidad. Los detalles, incluidos los escalones y el comportamiento sin paradas obligatorias, dependen del dispositivo o programa.

---

## 4. Configuraciones habituales de GF: Criterio frente a mitos

Una parada más profunda no es necesariamente más segura. Durante ella, algunos compartimentos lentos pueden continuar cargando gas mientras otros lo eliminan. Cambiar el reparto de tiempo entre paradas también modifica el perfil completo, por lo que no basta con comparar una profundidad aislada.

Blatteau y colaboradores estudiaron perfiles concretos con aire a 50 y 60 metros en grupos pequeños: los resultados de las paradas profundas añadidas variaron según el protocolo y uno de ellos se asoció con un caso de ED [2]. En otro trabajo, De Ridder y colaboradores compararon mediante simulación perfiles GF con tablas de referencia para inmersiones con aire no repetitivas; cuestionaron que un GF Low bajo fuera necesariamente más seguro en ese contexto [5]. La comparación con tablas no es un ensayo clínico de cada ajuste.

Estos resultados no prueban que todas las paradas profundas sean perjudiciales ni validan una pareja de GF para cualquier inmersión con trimix, cambios de gas o inmersiones repetitivas. Las combinaciones del gráfico son ejemplos matemáticos, no recomendaciones. La elección operativa debe hacerse dentro de la formación y los procedimientos aplicables al perfil y al equipo utilizados.

---

## 5. Control de profundidad durante la descompresión

Controlar la flotabilidad y la profundidad ayuda a ejecutar el perfil previsto, respetar los techos indicados y evitar ascensos involuntarios. El modelo puede calcular la evolución de los compartimentos mientras cambia la presión: no exige permanecer inmóvil ni mantener una profundidad milimétrica.

Como aproximación, con 1 bar en superficie y un aumento de 0,1 bar por metro, subir de 6 a 5 metros reduce la presión absoluta de 1,6 a 1,5 bar, un 6,25 % respecto a la presión inicial. Subir de 3 a 2 metros la reduce de 1,3 a 1,2 bar, aproximadamente un **7,7 %**. Son ejemplos de presión, no estimaciones de riesgo: la presión real depende del entorno y no se puede inferir una probabilidad de ED a partir de esa variación aislada.

El sidemount es una configuración con la que se puede entrenar el control de flotabilidad y el trim. Su comodidad y estabilidad dependen del ajuste, del equipo y de la técnica; no garantizan una posición perfecta ni una descompresión más segura que otra configuración bien utilizada.

### Referencias

1. [Subsurface, implementación del modelo de descompresión](https://raw.githubusercontent.com/Subsurface-divelog/subsurface/master/core/deco.cpp). Código fuente y coeficientes usados en el ejemplo; es una implementación de referencia, no una validación clínica.
2. [Blatteau JE y colaboradores. Bubble incidence after staged decompression from 50 or 60 msw: effect of adding deep stops. 2005](https://pubmed.ncbi.nlm.nih.gov/15892549/). Estudio experimental de perfiles concretos con aire.
3. [Doolette DJ. Venous gas emboli detected by two-dimensional echocardiography are an imperfect surrogate endpoint for decompression sickness. 2016](https://pubmed.ncbi.nlm.nih.gov/27044455/).
4. [Bakovic D y colaboradores. High-grade bubbles in left and right heart in an asymptomatic diver at rest after surfacing. 2008](https://pubmed.ncbi.nlm.nih.gov/18581949/). Caso de burbujas sin síntomas de ED.
5. [De Ridder S y colaboradores. Selecting optimal air diving gradient factors for Belgian military divers: more conservative settings are not necessarily safer. 2023](https://europepmc.org/articles/PMC10735712). Comparación por simulación para inmersiones con aire no repetitivas.

---

### ¿Quieres dominar la teoría y la ejecución en el agua?
En **Sidemount Spain** no enseñamos a coleccionar carnets: desgranamos la física, la configuración y la técnica en el agua mediante vídeo-análisis exhaustivo.

* Conoce nuestro curso de formación técnica: [Curso TDI Sidemount](/cursos/buceo-tecnico/sidemount/)
* Explora la transición técnica con dos botellas: [Curso TDI Intro to Tech](/cursos/buceo-tecnico/itt/)
* Mira la serie completa de teoría en YouTube: [Lista de reproducción «Deco para nerds» en YouTube](https://www.youtube.com/playlist?list=PLzyxNTrI75wBF9p-fjY6gqK-3AKo5PDRA)
