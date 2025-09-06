var tabelaidlogin, resposta_inserir_linha, resultado_linhas, todosareceber, tabelaidloginnome, tabelaidgasto, tabelaidmanutencao, id, somaareceber, tabelaidcorridas, Item, todossaldos, tabelaidcorridacliente, somadesaldo, tabelaidcorridavalor, tabelaidcorridainformacao, tabelaidsaldo, tabelaidsaldodata, tabelaidgastoinformacao, tabelaidgastodata, tabelaidmensal, tabelaidmensalmes, tabelaidmanutecaodata;

// Descreva esta função...
function salvarmanutencao() {
  if (!document.getElementById('txvalor').value.length) {
    Swal.fire('Preencha tudo');
  } else {
    function insertRow() {
    let jsonData = {};
    let colunas = ['item', 'data', 'valor', 'km', 'loja'];
    let valores = [document.getElementById('txitem').value, new Date().toLocaleDateString(), document.getElementById('txvalor').value, document.getElementById('txkm').value, document.getElementById('txloja').value];
    for (let i = 0; i < colunas.length; i++) {
      jsonData[colunas[i]] = valores[i];
    }
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidmanutencao+"/?user_field_names=true", {
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
          salvargasto();

      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    insertRow();
  }
}

// Descreva esta função...
function salvargasto() {
  function insertRow() {
  let jsonData = {};
  let colunas = ['informacao', 'valor', 'data'];
  let valores = [document.getElementById('txitem').value, document.getElementById('txvalor').value, new Date().toLocaleDateString()];
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
    $("#"+'modaladdcorrida').hide();
    window.location.href = "reset.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  insertRow();
}


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
  tabelaidmanutencao = '262318';
  tabelaidmanutecaodata = '1863221';


        function qclick() {
            let elementoClick = document.getElementById('btnsalvar');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      salvarmanutencao();

                });
            }
        }
        qclick();

//feito com bootblocks.com.br
  document.getElementById('telasaldo').style.overflow = "scroll";
  $("#save").css("left", (window.innerWidth * (44 / 100))+"px");
  $("#save").css("top", (window.innerHeight * (93 / 100))+"px");
  $("#save").css("z-index", "1000");
  $("#save").css("position", "fixed");
  $("#save").css("display", "block");


        function qclick2() {
            let elementoClick = document.getElementById('save');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      $("#"+'modaladdcorrida').show();

                });
            }
        }
        qclick2();

//feito com bootblocks.com.br
  function getRows() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidmanutencao+"/?user_field_names=true&page="+'1', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_linhas = data.results;
        id = 0;
    var Item_list = (resultado_linhas.reverse());
    for (var Item_index in Item_list) {
      Item = Item_list[Item_index];
      id = id + 1;
      var card = '<div onclick="callsaldoo('+id+')" class="cardview" id="'+id+'" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
      card += '<div class="row">'
      card += '<div class="col-4">'
      card += '<img class="imagem_cardview" id="imagem_cardview" style="width:50px; height:50px;" src="'+'assets/icon2.png'+'" alt="imagem">'
      card += '</div>'
      card += '<div class="col-8">'
      card += '<span class="titulo_cardview" id="titulo_cardview" style="font-weight: bold; font-size: 16px">'+([Item['item'],' R$',Item['valor']].join(''))+'</span><br>'
      card += '<span class="subtitulo_cardview" id="subtitulo_cardview" style="font-size: 13px">'+([Item['loja'],"\n",'      :   ','<span style="font-size:11px; color:#33cc00; font-weight:normal; font-style:normal;">'+(Item['data'])+' </span>',"\n"].join(''))+'</span><br>'
      card += '<span class="texto_adicional_cardview" id="texto_adicional_cardview" style="font-size: 13px">'+('KM:' + String(Item['km']))+'</span>'
      card += '</div>'
      card += '</div>'
      card +=' </div>'
      document.getElementById("telasaldo").innerHTML += card;
      todosareceber.push((Item['valor']));
    }
    for (var Item_index2 in todosareceber) {
      Item = todosareceber[Item_index2];
      somadesaldo = (txt_to_number(somadesaldo)) + (txt_to_number(Item));
    }
    $("#lbltudo").html(('Manutenção ' + String(format_decimal_number(somadesaldo, 0, false))));

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRows();


        function qclick3() {
            let elementoClick = document.getElementById('lbltudo');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "index.html";
                });
            }
        }
        qclick3();

//feito com bootblocks.com.br
  todosareceber = [];
  somaareceber = 0;
  todossaldos = [];
  somadesaldo = 0;
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