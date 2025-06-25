var valorextra, tabelaidlogin, resultadodiaria, idquantcorrida, resultado_linhas, resultadogastos, resugastodia, resultado_pesquisa, areceberhoje, Item, abrirtela, tabelaidloginnome, tabelaidsaldo, tabelaidsaldodata, somagastodia, tabelaidgasto, tabelaidgastodata, idd, tabelaidcorridas, resposta_inserir_linha, tabelaidgastoinformacao, localdacorrida, tabelaidcorridainformacao, valorss, idnsaldo, id, opcaoselect, idngastodia, abastecimento, idquantdecorridahj, somadesaldo, tabelaidcorridacliente, todosgastodia, idss, todosareceber, quantabastecimento, todosareceberhoje, valorareceberhoje, tabelaidcorridavalor, todasdiarias, somadiarias, idareceber, locaiss, todosgastos, idngasto, todosvalores, vlabastecimento, somagastos, somaareceber, datass, tabelaidmensal, tabelaidmensalmes, todossaldos, contclick;

// Descreva esta função...
function inicio() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidsaldo+"/?user_field_names=true&filter__field_"+tabelaidsaldodata+"__"+"equal"+"="+(new Date().toLocaleDateString())+ "&order_by="+"+"+'data', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultadodiaria = data.results;
        $("#l2").html('lkkk');
    for (var Item_index2 in resultadodiaria) {
      Item = resultadodiaria[Item_index2];
      idquantcorrida = idquantcorrida + 1;
      todasdiarias.push((Item['valor']));
    }
    for (var Item_index3 in todasdiarias) {
      Item = todasdiarias[Item_index3];
      somadiarias = (txt_to_number(somadiarias)) + (txt_to_number(Item));
    }
    $("#l1").html('<span style="font-size:13px; color:#000000; font-weight:bold; font-style:normal;">'+(['Diaria: ',format_decimal_number(somadiarias, 2, false),' N° ',idquantcorrida].join(''))+' </span>');
    $("#l2").html('<span style="font-size:13px; color:#000000; font-weight:bold; font-style:normal;">'+('Media por corrida: ' + String(format_decimal_number((somadiarias / idquantcorrida), 2, false)))+' </span>');

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function todosossaldos() {
  function getRows() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidsaldo+"/?user_field_names=true&page="+'1', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_linhas = data.results;
        for (var Item_index4 in resultado_linhas) {
      Item = resultado_linhas[Item_index4];
      idss.push((Item['id']));
      locaiss.push((Item['local']));
      valorss.push((Item['valor']));
      datass.push((Item['data']));
    }
    function getRows() {
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidsaldo+"/?user_field_names=true&page="+'2', {
      method: "GET",
      headers: {
      "Authorization": "Token " + bb_baserow_token
      }
      })
      .then(response => response.json())
      .then(data => {
        resultado_linhas = data.results;
          for (var Item_index5 in resultado_linhas) {
        Item = resultado_linhas[Item_index5];
        idss.push((Item['id']));
        locaiss.push((Item['local']));
        valorss.push((Item['valor']));
        datass.push((Item['data']));
      }
      function getRows() {
        fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidsaldo+"/?user_field_names=true&page="+'3', {
        method: "GET",
        headers: {
        "Authorization": "Token " + bb_baserow_token
        }
        })
        .then(response => response.json())
        .then(data => {
          resultado_linhas = data.results;
            for (var Item_index6 in resultado_linhas) {
          Item = resultado_linhas[Item_index6];
          idss.push((Item['id']));
          locaiss.push((Item['local']));
          valorss.push((Item['valor']));
          datass.push((Item['data']));
        }
        callgastos();

        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
      getRows();

      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    getRows();

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRows();
}

// Descreva esta função...
function callgastos() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidgasto+"/?user_field_names=true&filter__field_"+tabelaidgastodata+"__"+"not_equal"+"="+'**'+ "&order_by="+"+"+'data', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultadogastos = data.results;
        idd = 0;
    var Item_list = (resultadogastos.reverse());
    for (var Item_index7 in Item_list) {
      Item = Item_list[Item_index7];
      idd = idd + 1;
      todosgastos.push((Item['valor']));
    }
    for (var Item_index8 in todosgastos) {
      Item = todosgastos[Item_index8];
      idngasto = idngasto + 1;
      somagastos = (txt_to_number(somagastos)) + (txt_to_number(Item));
    }
    callreceber();

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function callreceber() {
  function getRows() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/?user_field_names=true&page="+'1', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_linhas = data.results;
        for (var Item_index9 in resultado_linhas) {
      Item = resultado_linhas[Item_index9];
      todosareceber.push((Item['valor']));
    }
    function getRows() {
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/?user_field_names=true&page="+'2', {
      method: "GET",
      headers: {
      "Authorization": "Token " + bb_baserow_token
      }
      })
      .then(response => response.json())
      .then(data => {
        resultado_linhas = data.results;
          for (var Item_index10 in resultado_linhas) {
        Item = resultado_linhas[Item_index10];
        todosareceber.push((Item['valor']));
      }
      for (var Item_index11 in todosareceber) {
        Item = todosareceber[Item_index11];
        idareceber = idareceber + 1;
        somaareceber = (txt_to_number(somaareceber)) + (txt_to_number(Item));
      }
      callgastodia();

      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    getRows();

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRows();
}

// Descreva esta função...
function svgasto() {
  if (!document.getElementById('txtvalor').value.length) {
    window.location.href = "manutencao.html";} else {
    function insertRow() {
    let jsonData = {};
    let colunas = ['informacao', 'valor', 'data'];
    let valores = [document.getElementById('txtcorrida').value, document.getElementById('txtvalor').value, new Date().toLocaleDateString()];
    for (let i = 0; i < colunas.length; i++) {
      jsonData[colunas[i]] = valores[i];
    }
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidgasto+"/?user_field_names=true", {
      method: "POST",
      headers: {
      "Authorization": "Token " + bb_baserow_token,
      "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
      })
      .then(response => response.json())
      .then(data => {
        resposta_inserir_linha = data;
          Swal.fire('Salvo');
      window.location.href = "reset.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    insertRow();
  }
}

// Descreva esta função...
function callgastodia() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidgasto+"/?user_field_names=true&filter__field_"+tabelaidgastodata+"__"+"equal"+"="+(new Date().toLocaleDateString())+ "&order_by="+"+"+'data', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resugastodia = data.results;
        for (var Item_index12 in resugastodia) {
      Item = resugastodia[Item_index12];
      todosgastodia.push((Item['valor']));
    }
    for (var Item_index13 in todosgastodia) {
      Item = todosgastodia[Item_index13];
      idngastodia = idngastodia + 1;
      somagastodia = (txt_to_number(somagastodia)) + (txt_to_number(Item));
    }
    abastecimentos();

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function abastecimentos() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidgasto+"/?user_field_names=true&filter__field_"+tabelaidgastoinformacao+"__"+"contains"+"="+'Abastecimento'+ "&order_by="+"+"+'informacao', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_pesquisa = data.results;
        if (!resultado_pesquisa.length) {
      abastecimento = 0;
    } else {
      for (var Item_index14 in resultado_pesquisa) {
        Item = resultado_pesquisa[Item_index14];
        quantabastecimento = quantabastecimento + 1;
        todosvalores.push((Item['valor']));
      }
      for (var Item_index15 in todosvalores) {
        Item = todosvalores[Item_index15];
        vlabastecimento = (txt_to_number(vlabastecimento)) + (txt_to_number(Item));
      }
    }
    calldiariaareceberdepois();

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function svsaldo() {
  if (!document.getElementById('txtcorrida').value.length) {
    localdacorrida = 'Extra';
  } else {
    localdacorrida = document.getElementById('txtcorrida').value;
  }
  if (!document.getElementById('txtvalor').value.length) {
    function insertRow() {
    let jsonData = {};
    let colunas = ['local', 'valor', 'data', 'hora'];
    let valores = [localdacorrida, valorextra, new Date().toLocaleDateString(), new Date().toLocaleTimeString()];
    for (let i = 0; i < colunas.length; i++) {
      jsonData[colunas[i]] = valores[i];
    }
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidsaldo+"/?user_field_names=true", {
      method: "POST",
      headers: {
      "Authorization": "Token " + bb_baserow_token,
      "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
      })
      .then(response => response.json())
      .then(data => {
        resposta_inserir_linha = data;
          Swal.fire('Salvo Extra');
      window.location.href = "reset.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    insertRow();
  } else {
    function insertRow() {
    let jsonData = {};
    let colunas = ['local', 'valor', 'data', 'hora'];
    let valores = [localdacorrida, document.getElementById('txtvalor').value, new Date().toLocaleDateString(), new Date().toLocaleTimeString()];
    for (let i = 0; i < colunas.length; i++) {
      jsonData[colunas[i]] = valores[i];
    }
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidsaldo+"/?user_field_names=true", {
      method: "POST",
      headers: {
      "Authorization": "Token " + bb_baserow_token,
      "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonData)
      })
      .then(response => response.json())
      .then(data => {
        resposta_inserir_linha = data;
          Swal.fire('Salvo Normal');
      window.location.href = "reset.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    insertRow();
  }
}

// Descreva esta função...
function calldiariaareceberdepois() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/?user_field_names=true&filter__field_"+tabelaidcorridainformacao+"__"+"contains"+"="+(new Date().toLocaleDateString())+ "&order_by="+"+"+'informacao', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      areceberhoje = data.results;
        var Item_list2 = (areceberhoje.reverse());
    for (var Item_index16 in Item_list2) {
      Item = Item_list2[Item_index16];
      idquantdecorridahj = idquantdecorridahj + 1;
      todosareceberhoje.push((Item['valor']));
    }
    for (var Item_index17 in todosareceberhoje) {
      Item = todosareceberhoje[Item_index17];
      valorareceberhoje = (txt_to_number(valorareceberhoje)) + (txt_to_number(Item));
    }
    setlistsomasaldo();

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function setlistsomasaldo() {
  for (var Item_index18 in valorss) {
    Item = valorss[Item_index18];
    idnsaldo = idnsaldo + 1;
    somadesaldo = (txt_to_number(somadesaldo)) + (txt_to_number(Item));
  }
  id = 0;
  var Item_list3 = (locaiss.reverse());
  for (var Item_index19 in Item_list3) {
    Item = Item_list3[Item_index19];
    id = id + 1;
  }
  mostrar();
}

// Descreva esta função...
function mostrar() {
  $("#l3").html('<span style="font-size:13px; color:#000000; font-weight:bold; font-style:normal;">'+([['Diaria recebida: ',format_decimal_number((somadiarias - valorareceberhoje), 2, false),' N° ',idquantcorrida - idquantdecorridahj].join(''),'<br>',['Diaria a receber: ',format_decimal_number(valorareceberhoje, 2, false),' N° ',idquantdecorridahj].join(''),'<br>','Lucro do dia: ' + String(format_decimal_number((somadiarias - somagastodia), 2, false)),'<br>',[' Gasto do dia: ',format_decimal_number(somagastodia, 2, false),' N° ',idngastodia].join(''),'<br>',['A receber: ',format_decimal_number(somaareceber, 2, false),' N° ',idareceber].join(''),'<br>',['Saldo total: ',format_decimal_number(somadesaldo, 2, false),' N° ',idnsaldo].join(''),'<br>',['  Gasto total: ',format_decimal_number(somagastos, 2, false),' N° ',idngasto].join(''),'<br>',['Abastecimento: ',format_decimal_number(vlabastecimento, 2, false),' N° ',quantabastecimento].join(''),'<br>',' Lucro do mes: ' + String(format_decimal_number((somadesaldo - somagastos), 2, false))].join(''))+' </span>');
  $("#"+'l3').show();
}


//feito com bootblocks.com.br
  valorextra = 0;
  abrirtela = [];
  opcaoselect = ['Hugo Táxi', 'clientes', 'saldos/gastos', 'orcamento', 'manutencao'];
  for (var Item_index in opcaoselect) {
    Item = opcaoselect[Item_index];
    $("#select_1").append("<option value="+Item+">"+Item+"</option>");
  }

$("#select_1").change(function(){
  if ($(this).val() == 'clientes') {
    window.location.href = "clientes.html";} else if ($(this).val() == 'saldos/gastos') {
    window.location.href = "saldoegasto.html";} else if ($(this).val() == 'orcamento') {
    window.location.href = "orcamento.html";} else if ($(this).val() == 'manutencao') {
    window.location.href = "manutencao.html";}
});

var bb_baserow_token = 'IKrER8jZ6NQENRIxVlNeF65L5J3ss1LH';
var bb_baserow_url = 'https://api.baserow.io/';

//feito com bootblocks.com.br
  tabelaidlogin = '177839';
  tabelaidloginnome = '1188492';
  tabelaidcorridas = '177840';
  tabelaidcorridacliente = '1188495';
  tabelaidcorridavalor = '1188513';
  tabelaidcorridainformacao = '1188496';
  tabelaidsaldo = '177842';
  tabelaidsaldodata = '1188503';
  tabelaidgasto = '177843';
  tabelaidgastoinformacao = '1188504';
  tabelaidgastodata = '1188515';
  tabelaidmensal = '209979';
  tabelaidmensalmes = '1448198';
  inicio();

//feito com bootblocks.com.br
  idquantcorrida = 0;
  somagastodia = 0;
  idngastodia = 0;
  todosgastodia = [];
  idareceber = 0;
  idnsaldo = 0;
  idngasto = 0;
  quantabastecimento = 0;
  vlabastecimento = 0;
  todosvalores = [];
  idquantdecorridahj = 0;
  valorareceberhoje = 0;
  todosareceberhoje = [];
  idss = [];
  locaiss = [];
  valorss = [];
  datass = [];
  todossaldos = [];
  somadesaldo = 0;
  todasdiarias = [];
  somadiarias = 0;
  todosgastos = [];
  somagastos = 0;
  todosareceber = [];
  somaareceber = 0;
  contclick = 0;
  localdacorrida = [];

//feito com bootblocks.com.br
  document.getElementById('div_1').style['background-image'] = 'url("assets/victorcima1.jpg")';
  document.getElementById('div_1').style['background-position'] = 'center center';
  document.getElementById('div_1').style['background-size'] = 'cover';


        function qclick() {
            let elementoClick = document.getElementById('l2');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      todosossaldos();
  $("#"+'telarestante').hide();
  $("#"+'telab1').hide();
  $("#"+'telab2').hide();

                });
            }
        }
        qclick();


        function qclick2() {
            let elementoClick = document.getElementById('l3');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      $("#"+'l3').hide();
  $("#"+'telarestante').show();
  $("#"+'telab1').show();
  $("#"+'telab2').show();

                });
            }
        }
        qclick2();


        function qclick3() {
            let elementoClick = document.getElementById('button_1');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      svsaldo();

                });
            }
        }
        qclick3();


        function qclick4() {
            let elementoClick = document.getElementById('button_2');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      svgasto();

                });
            }
        }
        qclick4();


        function qclick5() {
            let elementoClick = document.getElementById('txtvalor');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      $("#"+'telab1').hide();
  $("#"+'telab2').hide();
  document.getElementById('space_mexer').style.height = '5' + "%";
  document.getElementById('space_mexer').style.width = '10' + "%";

                });
            }
        }
        qclick5();


        function qclick6() {
            let elementoClick = document.getElementById('icon_6');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '6.00';
  svsaldo();

                });
            }
        }
        qclick6();


        function qclick7() {
            let elementoClick = document.getElementById('icon_15');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '15.00';
  svsaldo();

                });
            }
        }
        qclick7();


        function qclick8() {
            let elementoClick = document.getElementById('icon_16');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '16.00';
  svsaldo();

                });
            }
        }
        qclick8();


        function qclick9() {
            let elementoClick = document.getElementById('icon_7');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '7.00';
  svsaldo();

                });
            }
        }
        qclick9();


        function qclick10() {
            let elementoClick = document.getElementById('icon_8');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '8.00';
  svsaldo();

                });
            }
        }
        qclick10();


        function qclick11() {
            let elementoClick = document.getElementById('icon_17');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '17.00';
  svsaldo();

                });
            }
        }
        qclick11();


        function qclick12() {
            let elementoClick = document.getElementById('icon_9');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '9.00';
  svsaldo();

                });
            }
        }
        qclick12();


        function qclick13() {
            let elementoClick = document.getElementById('icon_18');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '18.00';
  svsaldo();

                });
            }
        }
        qclick13();


        function qclick14() {
            let elementoClick = document.getElementById('icon_10');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '10.00';
  svsaldo();

                });
            }
        }
        qclick14();


        function qclick15() {
            let elementoClick = document.getElementById('icon_19');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '19.00';
  svsaldo();

                });
            }
        }
        qclick15();


        function qclick16() {
            let elementoClick = document.getElementById('icon_11');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '11.00';
  svsaldo();

                });
            }
        }
        qclick16();


        function qclick17() {
            let elementoClick = document.getElementById('icon_12');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '12.00';
  svsaldo();

                });
            }
        }
        qclick17();


        function qclick18() {
            let elementoClick = document.getElementById('space_1');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "corridasclientes.html";
                });
            }
        }
        qclick18();


        function qclick19() {
            let elementoClick = document.getElementById('icon_13');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '13.00';
  svsaldo();

                });
            }
        }
        qclick19();


        function qclick20() {
            let elementoClick = document.getElementById('icon_14');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      valorextra = '14.00';
  svsaldo();

                });
            }
        }
        qclick20();
function txt_to_number(txt){
            txt = txt+"";
            if(txt.includes(",")){
                txt = txt.replace(",", ".");
            }
            if(txt.includes(".")){
                txt = parseFloat(txt);
            }else{
                txt = parseInt(txt);
            }
            return txt;
        }function format_decimal_number(number, places, virgula = false){
                number = number + "";
                if(number.includes(",")){
                    number = number.replace(",", ".");
                    number = parseFloat(number);
                }else{
                    number = parseFloat(number);
                }
                number = number.toFixed(places);
                if(virgula){
                    number = number.replace(".", ",");
                }
                return number;
            }
        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });