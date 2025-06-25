var idgasto, ids_card, idquantcorrida, tabelaidlogin, contclick, resultadogastos, resultado_linhas, Item, somagastodia, tabelaidloginnome, tabelaidgasto, tabelaidgastodata, idd, tabelaidsaldo, valorss, idnsaldo, id, idngastodia, tabelaidcorridas, somadesaldo, todosgastodia, tabelaidcorridacliente, idss, idareceber, tabelaidcorridavalor, todosgastos, idngasto, locaiss, tabelaidcorridainformacao, somagastos, datass, quantabastecimento, tabelaidsaldodata, horass, vlabastecimento, todosvalores, tabelaidgastoinformacao, idquantdecorridahj, valorareceberhoje, tabelaidmensal, todosareceberhoje, tabelaidmensalmes, todossaldos, todasdiarias, somadiarias, todosareceber, somaareceber;

// Descreva esta função...
function callgastoo(idgasto) {
  contclick = contclick + 1;
  if (contclick >= 3) {
    Swal.fire('Deletando...');
    function deleteRow() {
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidgasto+"/"+((resultadogastos[(idgasto - 1)])['id'])+"/?user_field_names=true", {
      method: "DELETE",
      headers: {
      "Authorization": "Token " + bb_baserow_token
      }
      })
    }
    deleteRow();
    var clockdelete = setInterval(calldelete, 1000);
  }
}

// Descreva esta função...
function calldelete() {
  window.location.href = "index.html";}

// Descreva esta função...
function callsaldoo(ids_card) {
  contclick = contclick + 1;
  if (contclick >= 3) {
    Swal.fire('Deletando...');
    function deleteRow() {
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidsaldo+"/"+(idss.slice((-ids_card))[0])+"/?user_field_names=true", {
      method: "DELETE",
      headers: {
      "Authorization": "Token " + bb_baserow_token
      }
      })
    }
    deleteRow();
    var clockdelete = setInterval(calldelete, 1000);
  }
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
    for (var Item_index in Item_list) {
      Item = Item_list[Item_index];
      idd = idd + 1;
      var card = '<div onclick="callgastoo('+idd+')" class="cardview" id="'+idd+'" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
      card += '<div class="row">'
      card += '<div class="col-4">'
      card += '<img class="imagem_cardview" id="imagem_cardview" style="width:50px; height:50px;" src="'+'assets/icon2.png'+'" alt="imagem">'
      card += '</div>'
      card += '<div class="col-8">'
      card += '<span class="titulo_cardview" id="titulo_cardview" style="font-weight: bold; font-size: 16px">'+(Item['informacao'])+'</span><br>'
      card += '<span class="subtitulo_cardview" id="subtitulo_cardview" style="font-size: 13px">'+([Item['valor'],'    =   ',Item['data']].join(''))+'</span><br>'
      card += '<span class="texto_adicional_cardview" id="texto_adicional_cardview" style="font-size: 13px">'+''+'</span>'
      card += '</div>'
      card += '</div>'
      card +=' </div>'
      document.getElementById("telagasto").innerHTML += card;
      todosgastos.push((Item['valor']));
    }
    for (var Item_index2 in todosgastos) {
      Item = todosgastos[Item_index2];
      idngasto = idngasto + 1;
      somagastos = (txt_to_number(somagastos)) + (txt_to_number(Item));
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
        for (var Item_index3 in resultado_linhas) {
      Item = resultado_linhas[Item_index3];
      idss.push((Item['id']));
      locaiss.push((Item['local']));
      valorss.push((Item['valor']));
      datass.push((Item['data']));
      horass.push((Item['hora']));
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
          for (var Item_index4 in resultado_linhas) {
        Item = resultado_linhas[Item_index4];
        idss.push((Item['id']));
        locaiss.push((Item['local']));
        valorss.push((Item['valor']));
        datass.push((Item['data']));
        horass.push((Item['hora']));
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
            for (var Item_index5 in resultado_linhas) {
          Item = resultado_linhas[Item_index5];
          idss.push((Item['id']));
          locaiss.push((Item['local']));
          valorss.push((Item['valor']));
          datass.push((Item['data']));
          horass.push((Item['hora']));
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
function calldesigner() {
  document.getElementById('telasaldo').style.overflow = "scroll";
  document.getElementById('telagasto').style.overflow = "scroll";
  $(".cardview").css("border", 1 + "px solid #000000");
  $(".cardview").css("border-radius", "20px");
  $(".cardview").css("height", (window.innerHeight * (13 / 100)) + "px");
  $(".cardview").css("width", '99' + "%");
  $("."+'subtitulo_cardview').css("margin-left", (-50)+"px");
  $("."+'subtitulo_cardview').css("margin-right", 0+"px");
  $("."+'subtitulo_cardview').css("margin-top", 0+"px");
  $("."+'subtitulo_cardview').css("margin-bottom", 0+"px");
  $("."+'titulo_cardview').css("margin-left", (-60)+"px");
  $("."+'titulo_cardview').css("margin-right", 0+"px");
  $("."+'titulo_cardview').css("margin-top", 0+"px");
  $("."+'titulo_cardview').css("margin-bottom", 0+"px");
}

// Descreva esta função...
function setlistsomasaldo() {
  for (var Item_index6 in valorss) {
    Item = valorss[Item_index6];
    idnsaldo = idnsaldo + 1;
    somadesaldo = (txt_to_number(somadesaldo)) + (txt_to_number(Item));
  }
  id = 0;
  var Item_list2 = (locaiss.reverse());
  for (var Item_index7 in Item_list2) {
    Item = Item_list2[Item_index7];
    id = id + 1;
    var card = '<div onclick="callsaldoo('+id+')" class="cardview" id="'+id+'" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
    card += '<div class="row">'
    card += '<div class="col-4">'
    card += '<img class="imagem_cardview" id="imagem_cardview" style="width:50px; height:50px;" src="'+'assets/icon2.png'+'" alt="imagem">'
    card += '</div>'
    card += '<div class="col-8">'
    card += '<span class="titulo_cardview" id="titulo_cardview" style="font-weight: bold; font-size: 16px">'+Item+'</span><br>'
    card += '<span class="subtitulo_cardview" id="subtitulo_cardview" style="font-size: 13px">'+(['<span style="font-size:16px; color:#ff0000; font-weight:bold; font-style:normal;">'+(valorss.slice((-id))[0])+' </span>',datass.slice((-id))[0],' as ',horass.slice((-id))[0]].join(''))+'</span><br>'
    card += '<span class="texto_adicional_cardview" id="texto_adicional_cardview" style="font-size: 13px">'+''+'</span>'
    card += '</div>'
    card += '</div>'
    card +=' </div>'
    document.getElementById("telasaldo").innerHTML += card;
  }
  calldesigner();
}


var bb_baserow_token = 'IKrER8jZ6NQENRIxVlNeF65L5J3ss1LH';
var bb_baserow_url = 'https://api.baserow.io/';

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
  horass = [];
  somaareceber = 0;
  contclick = 0;

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
  todosossaldos();


        function qclick() {
            let elementoClick = document.getElementById('title_1');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "index.html";
                });
            }
        }
        qclick();

//feito com bootblocks.com.br
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
        }
        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });