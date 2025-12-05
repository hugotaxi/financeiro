var ids_card, tabelaidlogin, resultado_pesquisa, tabelaidloginnome, tabelaidcorridas, tabelaidcorridavalor, Item, resposta_inserir_linha, id, tabelaidcorridacliente, todosareceber, todossaldos, somadesaldo, somaareceber, tabelaidcorridainformacao, tabelaidsaldo, tabelaidsaldodata, tabelaidgasto, tabelaidgastoinformacao, tabelaidgastodata, tabelaidmensal, tabelaidmensalmes;

// Descreva esta função...
function callsaldoo(ids_card) {
  localStorage.setItem('usuarioindentificado',((resultado_pesquisa[(ids_card - 1)])['nome']));
  localStorage.setItem('link',('https://extratos.use.taxi.br/?id=' + String((resultado_pesquisa[(ids_card - 1)])['senha'])));
  window.location.href = "corridasclientes.html";}

// Descreva esta função...
function callclientes() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidlogin+"/?user_field_names=true&filter__field_"+tabelaidloginnome+"__"+"not_equal"+"="+'**'+ "&order_by="+"+"+'nome', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_pesquisa = data.results;
        id = 0;
    for (var Item_index4 in resultado_pesquisa) {
      Item = resultado_pesquisa[Item_index4];
      id = id + 1;
      var card = '<div onclick="callsaldoo('+id+')" class="cardview" id="'+id+'" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
      card += '<div class="row">'
      card += '<div class="col-4">'
      card += '<img class="imagem_cardview" id="imagem_cardview" style="width:50px; height:50px;" src="'+'assets/icon2.png'+'" alt="imagem">'
      card += '</div>'
      card += '<div class="col-8">'
      card += '<span class="titulo_cardview" id="titulo_cardview" style="font-weight: bold; font-size: 16px">'+''+'</span><br>'
      card += '<span class="subtitulo_cardview" id="subtitulo_cardview" style="font-size: 13px">'+'<span style="font-size:20px; color:#000000; font-weight:bold; font-style:italic;">'+(Item['nome'])+' </span>'+'</span><br>'
      card += '<span class="texto_adicional_cardview" id="texto_adicional_cardview" style="font-size: 13px">'+''+'</span>'
      card += '</div>'
      card += '</div>'
      card +=' </div>'
      document.getElementById("telasaldo").innerHTML += card;
      todossaldos.push((Item['valor']));
    }
    for (var Item_index5 in todossaldos) {
      Item = todossaldos[Item_index5];
      somadesaldo = (txt_to_number(somadesaldo)) + (txt_to_number(Item));
    }
    mostrar();

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function mostrar() {
  $("#lbltudo").html('<span style="font-size:24px; color:#ff6600; font-weight:bold; font-style:normal;">'+('Total a Receber R$' + String(format_decimal_number(somaareceber, 2, false)))+' </span>');
  $(".cardview").css("border", 1 + "px solid #000000");
  $(".cardview").css("border-radius", "20px");
  $(".cardview").css("height", (window.innerHeight * (13 / 100)) + "px");
  $(".cardview").css("width", '90' + "%");
  $(".imagem_cardview").css("height", '100' + "%");
  $(".imagem_cardview").css("width", '70' + "%");
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
  todosareceber = [];
  somaareceber = 0;
  todossaldos = [];
  somadesaldo = 0;

//feito com bootblocks.com.br
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/?user_field_names=true&filter__field_"+tabelaidcorridavalor+"__"+"not_equal"+"="+'**'+ "&order_by="+"+"+'cliente'+"&page="+'1', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_pesquisa = data.results;
        for (var Item_index in resultado_pesquisa) {
      Item = resultado_pesquisa[Item_index];
      todosareceber.push((Item['valor']));
    }
    function getRowsSearch() {
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/?user_field_names=true&filter__field_"+tabelaidcorridavalor+"__"+"not_equal"+"="+'**'+ "&order_by="+"+"+'cliente'+"&page="+'2', {
      method: "GET",
      headers: {
      "Authorization": "Token " + bb_baserow_token
      }
      })
      .then(response => response.json())
      .then(data => {
        resultado_pesquisa = data.results;
          for (var Item_index2 in resultado_pesquisa) {
        Item = resultado_pesquisa[Item_index2];
        todosareceber.push((Item['valor']));
      }
      for (var Item_index3 in todosareceber) {
        Item = todosareceber[Item_index3];
        somaareceber = (txt_to_number(somaareceber)) + (txt_to_number(Item));
      }
      callclientes();

      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    getRowsSearch();

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();

//feito com bootblocks.com.br

//feito com bootblocks.com.br
  document.getElementById('telasaldo').style.overflow = "scroll";
  $("#save").css("left", (window.innerWidth * (44 / 100))+"px");
  $("#save").css("top", (window.innerHeight * (93 / 100))+"px");
  $("#save").css("z-index", "1000");
  $("#save").css("position", "fixed");
  $("#save").css("display", "block");


        function qclick() {
            let elementoClick = document.getElementById('save');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      $("#"+'modal_1').show();

                });
            }
        }
        qclick();

//feito com bootblocks.com.br


        function qclick2() {
            let elementoClick = document.getElementById('lbltudo');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "index.html";
                });
            }
        }
        qclick2();


        function qclick3() {
            let elementoClick = document.getElementById('btnsalvarcliente');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      if (!document.getElementById('txtsenha').value.length) {
    Swal.fire('Preencha tudo');
  } else {
    function insertRow() {
    let jsonData = {};
    let colunas = ['nome', 'senha'];
    let valores = [document.getElementById('txtnome').value, document.getElementById('txtsenha').value];
    for (let i = 0; i < colunas.length; i++) {
      jsonData[colunas[i]] = valores[i];
    }
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidlogin+"/?user_field_names=true", {
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
          Swal.fire('Salvando...');
      window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    insertRow();
  }

                });
            }
        }
        qclick3();
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