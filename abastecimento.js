var respostx, tabelaidgasto, resultado_pesquisa, todosvalores, codigoapesquisar, todoscodigos, id, rendaporabstecimento, Item, vlabastecimento, kmfinal, kminicial;

// Descreva esta função...
function codigoabastecimento() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidgasto+"/?user_field_names=true&filter__field_"+'1188504'+"__"+"equal"+"="+'Abastecimento'+ "&order_by="+"+"+'informacao'+"&page="+'0', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_pesquisa = data.results;
        id = 0;
    var Item_list = (resultado_pesquisa.reverse());
    for (var Item_index in Item_list) {
      Item = Item_list[Item_index];
      id = id + 1;
      kmfinal = ((resultado_pesquisa[1])['km']);
      kminicial = ((resultado_pesquisa[0])['km']);
      var card = '<div onclick="callefetuadas('+id+')" class="meus_cards" id="'+id+'" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
      card += '<div class="row">'
      card += '<div class="col-4">'
      card += '<img class="imagem_meus_cards" id="imagem_meus_cards" style="width:50px; height:50px;" src="'+'assets/icon2.png'+'" alt="imagem">'
      card += '</div>'
      card += '<div class="col-8">'
      card += '<span class="titulo_meus_cards" id="titulo_meus_cards" style="font-weight: bold; font-size: 16px">'+('Abasteceu ' + String(Item['valor']))+'</span><br>'
      card += '<span class="subtitulo_meus_cards" id="subtitulo_meus_cards" style="font-size: 13px">'+(Item['data'])+'</span><br>'
      card += '<span class="texto_adicional_meus_cards" id="texto_adicional_meus_cards" style="font-size: 13px">'+('Km ' + String(Item['km']))+'</span>'
      card += '</div>'
      card += '</div>'
      card +=' </div>'
      document.getElementById("telaabastecimento").innerHTML += card;
      $("#text_1").html((['Ultimo abastecimento fizemos ',kminicial - kmfinal,'Km'].join('')));
    }

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function faz_algo() {
  todosvalores = [];
  rendaporabstecimento = [];
  vlabastecimento = 0;
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+'177842'+"/?user_field_names=true&filter__field_"+'5090261'+"__"+"equal"+"="+codigoapesquisar+ "&order_by="+"+"+'codigo'+"&page="+'0', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      rendaporabstecimento = data.results;
        id = 0;
    for (var Item_index2 in rendaporabstecimento) {
      Item = rendaporabstecimento[Item_index2];
      id = id + 1;
      todosvalores.push((Item['valor']));
    }
    for (var Item_index3 in todosvalores) {
      Item = todosvalores[Item_index3];
      vlabastecimento = (txt_to_number(vlabastecimento)) + (txt_to_number(Item));
    }
    $("#txtsaldo").html(('Saldo R$' + String(vlabastecimento)));

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function callefetuadas(respostx) {
  codigoapesquisar = ((resultado_pesquisa[(respostx - 1)])['codigo']);
  faz_algo();
}


var bb_baserow_token = 'IKrER8jZ6NQENRIxVlNeF65L5J3ss1LH';
var bb_baserow_url = 'https://api.baserow.io/';

//feito com bootblocks.com.br
  tabelaidgasto = '177843';
  todoscodigos = [];
  codigoapesquisar = [];
  rendaporabstecimento = [];
  todosvalores = [];
  vlabastecimento = 0;
  kminicial = 0;
  kmfinal = 0;
  codigoabastecimento();

//feito com bootblocks.com.br


        function qclick() {
            let elementoClick = document.getElementById('text_1');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "index.html";
                });
            }
        }
        qclick();
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