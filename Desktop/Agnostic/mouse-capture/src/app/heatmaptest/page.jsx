"use client";
// import { HeatMapComponent, Inject, Legend, Tooltip, Adaptor } from '../../../node_modules/@syncfusion/ej2-react-heatmap';
import HeatMap from 'react-heatmap-grid';
import '../../../node_modules/@syncfusion/ej2-base/styles/material.css'; // Ou outro tema de sua escolha
import { useEffect } from 'react';
import $ from "jquery";

export default function HeatMapTest() {

  var Xposition = 0;
  var Yposition = 0;
  var width;
  var height;
  var Xpos;
  var Ypos;
  var pos;
  var MatrisPosition;
  var ip;
  var city;

  function zero(rows, cols) {
    var array = [], row = [];
    while (cols--) row.push(0);
    while (rows--) array.push(row.slice());
    return array;
  }

  $(document).ready(function () {
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";

      (e || window.event).returnValue = confirmationMessage; //Gecko + IE
      return confirmationMessage;                            //Webkit, Safari, Chrome
    });

    var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var body = document.body,
      html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    MatrisPosition = zero(Math.ceil(height / 40), Math.ceil(width / 40));

    console.log(MatrisPosition);

    window.onload = init;
    function init() {
      if (window.Event) {
        document.captureEvents(Event.MOUSEMOVE);
      }
      document.onmousemove = getCursorXY;
    }

    function getCursorXY(e) {
      Xposition = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
      Yposition = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

      Xom = Math.floor(Xposition / 40);
      Yom = Math.floor(Yposition / 40);

      MatrisPosition[Yom][Xom] += 1;

      console.log(MatrisPosition);
    }
  });

  // useEffect(()=>{
  //   getCursorXY();
  // },[MouseEvent.onmousemove])

  const size = 6; // Defina o tamanho da grade (ex: 50x50)
  let vet = []

  for(let i=0; i<40;i++){
    vet.push(i);
  }

  const data = [
    [10, 20, 30, 40, 50],
    [50, 40, 30, 20, 10],
    [30, 40, 50, 10, 20],
    [50, 10, 40, 30, 20],
    [20, 40, 10, 30, 50]
  ]

  return (
    <div>
      <div style={{ height: '100vh', width: '100vw' }}>
        <HeatMap
          xLabels={vet} // Labels vazios
          yLabels={vet}
          data={data}
          square // Faz cada célula ser quadrada
          height={window.innerHeight / size}
        // Configurações de cores e outros estilos podem ser ajustados aqui
        />
      </div>

      {/* <HeatMapComponent id='heatmap'
        titleSettings={{ text: 'Temperaturas Semanais por Hora' }}
        xAxis={{ labels: [0,1,2,3,4] }}
        yAxis={{ labels: [0,1,2,3,4] }} // Adicione mais conforme necessário
        dataSource={data}
        cellSettings={{
          showLabel: false,
          format: '{value}°C'
        }}
        paletteSettings={{
          palette: [{ value: 20, color: 'blue' }, { value: 35, color: 'red' }],
        }}
        tooltipRender={(args) => {
          args.content = [`${args.xLabel} | ${args.yLabel} : ${args.value}°C`];
        }}
      >
        <Inject services={[Legend, Tooltip, Adaptor]} />

      </HeatMapComponent> */}
    </div>
  )
}