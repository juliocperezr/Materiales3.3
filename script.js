const recursos = [

{
titulo:"Cuaderno ¡Yo Decido! Mi futuro",
contenido:`
<h2>Cuaderno ¡Yo Decido! Mi futuro</h2>

<p>Diseñado para brindar a las y los adolescentes herramientas que les permitan tomar decisiones sobre su sexualidad y su futuro.</p>

<a href="https://www.gob.mx/conapo/documentos/cuaderno-yo-decido-mi-futuro" target="_blank" class="btn">Consultar</a>
`
},

{
titulo:"Kiko y la Mano",
contenido:`
<h2>Kiko y la Mano</h2>
<p>Cuento infantil que tiene como objetivo enseñar a niñas y niños de manera sencilla y apropiada para su edad cómo reconocer y prevenir situaciones de abuso sexual-</p>

<a href="https://www.gob.mx/sipinna/documentos/cuento-infantil-kiko-y-la-mano-explica-con-sencillez-la-regla-de-kiko-para-prevenir-el-abuso-sexual-infantil?idiom=es " target="_blank" class="btn">Consultar</a>
`
},

{
titulo:"¿Cómo le hago?",
contenido:`
<h2>¿Cómo le hago?
</h2>
<p>Página creada por la Secretaría de las Mujeres en México, que se enfoca en brindar información clara, accesible sobre la sexualidad, salud reproductiva y prevención del embarazo adolescente.</p>

<a href="https://comolehago.org/ " target="_blank" class="btn">Consultar</a>
`
},

{
titulo:"Micrositio Estrategia Nacional para la Prevención del Embarazo en Adolescentes (ENAPEA)",
contenido:`
<h2>Micrositio Estrategia Nacional para la Prevención del Embarazo en Adolescentes (ENAPEA)</h2>

<p>Herramienta de consulta para el personal docente, con el fin de proporcionar información y recursos que les permitan comprender la gravedad del embarazo en adolescentes en México.</p>

<a href="https://www.gob.mx/conapo/articulos/micrositio-estrategia-nacional-para-la-prevencion-del-embarazo-en-adolescentes-enapea" target="_blank" class="btn">Consultar</a>
`
},

{
titulo:"Salud Sexual y Reproductiva de Adolescentes",
contenido:`
<h2>Salud Sexual y Reproductiva de Adolescentes</h2>
<p>Este espacio de la Secretaría de Salud del Gobierno de México contiene espacios para brindar atención en salud sexual y reproductiva a adolescentes.</p>


<a href="https://www.gob.mx/salud/es/articulos/servicios-amigables-para-adolescentes-277747?idiom=es" target="_blank" class="btn">Consultar</a>
`
},

{
titulo:"Repositorio. Igualdad de género",
contenido:`
<h2>Repositorio. Igualdad de género</h2>
<p>Portal institucional del Gobierno de la Ciudad de México dedicado a promover y garantizar los derechos de las mujeres y niñas, al igual que fomentar la igualdad sustantiva y erradicar la violencia de género.</p>



<a href="https://www.semujeres.cdmx.gob.mx/ " target="_blank" class="btn">Consultar</a>
`
},

{
titulo:"Cuentos para niños y niñas sobre la prevención del abuso infantil (basados en leyendas Ñähñu)",
contenido:`
<h2>Cuentos para niños y niñas sobre la prevención del abuso infantil (basados en leyendas Ñähñu)</h2>

<p>Material que presenta tres cuentos infantiles que abordan la prevención del abuso sexual infantil desde una perspectiva culturalmente pertinente.</p>

<a href="https://www.gob.mx/cms/uploads/attachment/file/548959/cuentos-hnahnu-prevencion-abuso-infantil-inpi.pdf   " target="_blank" class="btn">Ver</a>
`
},

{
titulo:"Repositorio. Prevención de la Violencia Sexual contra Niñas, Niños y Adolescentes",
contenido:`
<h2>Repositorio. Prevención de la Violencia Sexual contra Niñas, Niños y Adolescentes
</h2>


<p>Tiene como objetivo proporcionar herramientas e información clara, sencilla y pertinente para el acceso a servicios de salud, justicia y atención en casos de violencia sexual ejercida contra niñas, niños y adolescentes.</p>

<a href="https://www.gob.mx/sipinna/acciones-y-programas/repositorio-prevencion-de-la-violencia-sexual-contra-ninas-ninos-y-adolescentes  " target="_blank" class="btn">Ver</a>
`
},

{
titulo:"Guía ética para la transformación de México. Juego de lotería.",
contenido:`
<h2>Guía ética para la transformación de México. Juego de lotería.</h2>

<p>Juego que contiene un conjunto de principios y valores que permiten construir una vida y sociedad mejores. Con el propósito de incrementar el bienestar físico, psicológico, emocional, espiritual, político, social, económico y ambiental de todas y todos.</p>

<a href="http://www.indesol.gob.mx/alas-para-el-cambio/descarga/Loteri%CC%81a-INDESOL-Final-Gui%CC%81a.pdf  " target="_blank" class="btn">Consultar</a>
`
},

{
titulo:"Entornos escolares y seguros en las escuelas de educación básica",
contenido:`
<h2>Entornos escolares y seguros en las escuelas de educación básica</h2>
<p>Documento que contribuye a la formación y sensibilidad de la comunidad educativa, mediante la participación de niñas, niños y adolescentes en las actividades escolares y la participación de la comunidad para construir entornos escolares.</p>

<a href="https://educacionbasica.sep.gob.mx/multimedia/RSC/BASICA/Documento/202009/202009-RSC-leLPWSqZY7- 5_EntornosEscolaresSegurosenEscuelasdeEducacinBsicaSimplificadoSept2020.pdf  " target="_blank" class="btn">Consultar</a>
`
}

];

// GENERAR MENU
const menu = document.getElementById("menu");

recursos.forEach((r)=>{
    const item=document.createElement("div");
    item.className="menu-item";
    item.textContent=r.titulo;

    item.onclick=()=>{
        document.querySelectorAll(".menu-item").forEach(i=>i.classList.remove("active"));
        item.classList.add("active");

        document.getElementById("visor").innerHTML=`
        <div class="card">
            ${r.contenido}
        </div>`;
    };

    menu.appendChild(item);
});

// BUSCADOR
document.getElementById("buscador").addEventListener("input",function(){
    const val=this.value.toLowerCase();
    document.querySelectorAll(".menu-item").forEach(i=>{
        i.style.display=i.textContent.toLowerCase().includes(val)?"block":"none";
    });
});