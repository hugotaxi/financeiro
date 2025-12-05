var ids_card, dataamanha, resultado_pesquisa, shora, sdata, contclick, tabelaidagendamento, tabelaagendadata, id, resposta_inserir_linha, Item, idss, temporizador_1;

// Descreva esta função...
function callveragendamentos() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidagendamento+"/?user_field_names=true&filter__field_"+tabelaagendadata+"__"+"not_equal"+"="+'**'+ "&order_by="+"+"+'data', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_pesquisa = data.results;
        id = 0;
    for (var Item_index in resultado_pesquisa) {
      Item = resultado_pesquisa[Item_index];
      id = id + 1;
      idss.push((Item['id']));
      var card = '<div onclick="callsaldoo('+id+')" class="cardview" id="'+id+'" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
      card += '<div class="row">'
      card += '<div class="col-4">'
      card += '<img class="imagem_cardview" id="imagem_cardview" style="width:50px; height:50px;" src="'+'assets/icon2.png'+'" alt="imagem">'
      card += '</div>'
      card += '<div class="col-8">'
      card += '<span class="titulo_cardview" id="titulo_cardview" style="font-weight: bold; font-size: 16px">'+'<span style="font-size:20px; color:#000000; font-weight:bold; font-style:italic;">'+([Item['local'],' / ',Item['data']].join(''))+' </span>'+'</span><br>'
      card += '<span class="subtitulo_cardview" id="subtitulo_cardview" style="font-size: 13px">'+''+'</span><br>'
      card += '<span class="texto_adicional_cardview" id="texto_adicional_cardview" style="font-size: 13px">'+([Item['cliente'],' / ',Item['hora']].join(''))+'</span>'
      card += '</div>'
      card += '</div>'
      card +=' </div>'
      document.getElementById("telaagendamento").innerHTML += card;
      mostrar();
    }

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function mostrar() {
  $(".cardview").css("border", 1 + "px solid #000000");
  $(".cardview").css("border-radius", "20px");
  $(".cardview").css("height", (window.innerHeight * (13 / 100)) + "px");
  $(".cardview").css("width", '90' + "%");
  $(".imagem_cardview").css("height", '100' + "%");
  $(".imagem_cardview").css("width", '70' + "%");
}

// Descreva esta função...
function callsaldoo(ids_card) {
  contclick = contclick + 1;
  if (contclick >= 3) {
    Swal.fire('Deletando...');
    function deleteRow() {
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidagendamento+"/"+(idss[(ids_card - 1)])+"/?user_field_names=true", {
      method: "DELETE",
      headers: {
      "Authorization": "Token " + bb_baserow_token
      }
      })
    }
    deleteRow();
    temporizador_1 = setInterval(function(){
      clearInterval(temporizador_1);
      window.location.href = "index.html";}, 1000);
  }
}


var bb_baserow_token = 'IKrER8jZ6NQENRIxVlNeF65L5J3ss1LH';
var bb_baserow_url = 'https://api.baserow.io/';

//feito com bootblocks.com.br
  dataamanha = "06/12/2025";
  tabelaidagendamento = '759064';
  tabelaagendadata = '6422239';
  idss = [];
  shora = [];
  sdata = [];
  contclick = 0;
  callveragendamentos();

//feito com bootblocks.com.br

    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var timeString = hours + ":" + minutes;

    var timePicker = document.getElementById('shora');
    if (timePicker) {
      timePicker.value = timeString;
    } else {
      console.warn('Seletor de hora com ID ' + 'shora' + ' não encontrado.');
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //Janeiro é 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("sdata").value = today;
    document.getElementById('telaagendamento').style.overflow = "scroll";
  $("#image_1").css("left", (window.innerWidth * (44 / 100))+"px");
  $("#image_1").css("top", (window.innerHeight * (93 / 100))+"px");
  $("#image_1").css("z-index", "1000");
  $("#image_1").css("position", "fixed");
  $("#image_1").css("display", "block");

$("#shora").change(function(){
  shora = document.getElementById('shora').value;
});


        function qclick() {
            let elementoClick = document.getElementById('button_1');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      if (!document.getElementById('txtlocal').value.length) {
    Swal.fire('Preencha tudo');
  } else {
    function insertRow() {
    let jsonData = {};
    let colunas = ['local', 'data', 'hora', 'cliente'];
    let valores = [document.getElementById('txtlocal').value, sdata, shora, document.getElementById('txtcliente').value];
    for (let i = 0; i < colunas.length; i++) {
      jsonData[colunas[i]] = valores[i];
    }
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidagendamento+"/?user_field_names=true", {
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
        qclick();

$("#sdata").change(function(){
  sdata = (
    (function() {
      try {
        let data = document.getElementById('sdata').value;
        let partes = data.split('-');
        if (partes.length === 3) {
          let ano = partes[0];
          let mes = partes[1];
          let dia = partes[2];
          return dia + '/' + mes + '/' + ano;
        } else {
          return "Data inválida";
        }
      } catch (e) {
        return "Data inválida";
      }
    })()
    );
});


        function qclick2() {
            let elementoClick = document.getElementById('image_1');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      $("#"+'modal_agendar').show();

                });
            }
        }
        qclick2();


        function qclick3() {
            let elementoClick = document.getElementById('telacima');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "index.html";
                });
            }
        }
        qclick3();

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });