var xretorno, id, tabelaidlogin, somadesaldo, resultado_pesquisa, Item, resposta_obter_linha, contclick, resposta_inserir_linha, id200, tabelaidloginnome, todosvalores, tabelaidcorridas, idapagar, tabelaidcorridacliente, usuarionome, tabelaidsaldo, nomescli200, idd, valor200, informacao200, tabelaidcorridavalor, horas200, tabelaidcorridainformacao, idliberar, tabelaidsaldodata, tabelaidgasto, tabelaidgastoinformacao, tabelaidgastodata, tabelaidmensal, tabelaidmensalmes;

// Descreva esta função...
function delcorrida() {
  function deleteRow() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/"+idapagar+"/?user_field_names=true", {
    method: "DELETE",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
  }
  deleteRow();
  Swal.fire('Deletando...');
  verificardel();
}

// Descreva esta função...
function callnome() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/?user_field_names=true&filter__field_"+tabelaidcorridacliente+"__"+"equal"+"="+usuarionome+ "&order_by="+"+"+'cliente'+"&page="+'1', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_pesquisa = data.results;
        if (!resultado_pesquisa.length) {
      Swal.fire({
      title: 'Sem Débitos deseja apagar o login do cliente ?',
      showCancelButton: true,
      confirmButtonText: 'sim',
      cancelButtonText: 'Nao',
      }).then((result) => {
      if (result.value) {
      deletarlogin()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      no()
      }
      });
    } else {
      id = 0;
      var Item_list = (resultado_pesquisa.reverse());
      for (var Item_index in Item_list) {
        Item = Item_list[Item_index];
        id = id + 1;
      }
      if (id > 99) {
        pagina2();
      } else {
        pagina1();
      }
    }

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function zerar() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/?user_field_names=true&filter__field_"+tabelaidcorridacliente+"__"+"equal"+"="+usuarionome+ "&order_by="+"+"+'cliente', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_pesquisa = data.results;
        if (!resultado_pesquisa.length) {
      clearInterval(tpdel);
      Swal.fire('Sem Débitos');
      window.location.href = "clientes.html";} else {
      id = 0;
      for (var Item_index2 in resultado_pesquisa) {
        Item = resultado_pesquisa[Item_index2];
        id = id + 1;
        function deleteRow() {
          fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/"+(Item['id'])+"/?user_field_names=true", {
          method: "DELETE",
          headers: {
          "Authorization": "Token " + bb_baserow_token
          }
          })
        }
        deleteRow();
        var tpdel = setInterval(tempodeletar, 1000);
      }
    }

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function tempodeletar() {
  zerar();
}

// Descreva esta função...
function deletarlogin() {
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidlogin+"/?user_field_names=true&filter__field_"+tabelaidloginnome+"__"+"equal"+"="+usuarionome+ "&order_by="+"+"+'nome', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_pesquisa = data.results;
        if (!resultado_pesquisa.length) {
      Swal.fire('apagado');
      window.location.href = "clientes.html";} else {
      idd = 0;
      for (var Item_index3 in resultado_pesquisa) {
        Item = resultado_pesquisa[Item_index3];
        idd = idd + 1;
        function deleteRow() {
          fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidlogin+"/"+(Item['id'])+"/?user_field_names=true", {
          method: "DELETE",
          headers: {
          "Authorization": "Token " + bb_baserow_token
          }
          })
        }
        deleteRow();
        var tpdell = setInterval(tempodeletar2, 1000);
      }
    }

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function pagina2() {
  var Item_list2 = (resultado_pesquisa.reverse());
  for (var Item_index4 in Item_list2) {
    Item = Item_list2[Item_index4];
    id200.push((Item['id']));
    nomescli200.push((Item['cliente']));
    valor200.push((Item['valor']));
    informacao200.push((Item['informacao']));
    horas200.push((Item['hora']));
  }
  function getRowsSearch() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/?user_field_names=true&filter__field_"+tabelaidcorridacliente+"__"+"equal"+"="+usuarionome+ "&order_by="+"+"+'cliente'+"&page="+'2', {
    method: "GET",
    headers: {
    "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resultado_pesquisa = data.results;
        for (var Item_index5 in resultado_pesquisa) {
      Item = resultado_pesquisa[Item_index5];
      id200.push((Item['id']));
      nomescli200.push((Item['cliente']));
      valor200.push((Item['valor']));
      informacao200.push((Item['informacao']));
      horas200.push((Item['hora']));
    }
    chamarlista();

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRowsSearch();
}

// Descreva esta função...
function verificardel() {
  function getRow() {
    fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/"+idapagar+"/?user_field_names=true", {
    method: "GET",
    headers: {
   "Authorization": "Token " + bb_baserow_token
    }
    })
    .then(response => response.json())
    .then(data => {
      resposta_obter_linha = data;
        if (!resposta_obter_linha.length) {
      Swal.fire('Sem Débitos');
      window.location.href = "clientes.html";} else {
      Swal.fire('nao apagou');
    }

    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  getRow();
}

// Descreva esta função...
function tempodeletar2() {
  deletarlogin();
}

// Descreva esta função...
function calculos() {
  $("#lbltudo").html((['(','<span style="font-size:20px; color:#996633; font-weight:bold; font-style:italic;">'+id+' </span>',')   ','<span style="font-size:16px; color:#663333; font-weight:bold; font-style:normal;">'+('Total: R$ ' + String(format_decimal_number(somadesaldo, 2, false)))+' </span>'].join('')));
}

// Descreva esta função...
function calldivisa(xretorno) {
  contclick = contclick + 1;
  idapagar = ((resultado_pesquisa[(xretorno - 1)])['id']);
  if (contclick >= 3) {
    $("#"+'telabotoes').show();
    $("#"+'save').hide();
    $("#lbltudo").html(idapagar);
  }
}

// Descreva esta função...
function chamarlista() {
  id = 0;
  for (var Item_index6 in nomescli200) {
    Item = nomescli200[Item_index6];
    id = id + 1;
    var card = '<div onclick="calldivisa23('+id+')" class="cardview" id="'+id+'" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
    card += '<div class="row">'
    card += '<div class="col-4">'
    card += '<img class="imagem_cardview" id="imagem_cardview" style="width:50px; height:50px;" src="'+'assets/icon2.png'+'" alt="imagem">'
    card += '</div>'
    card += '<div class="col-8">'
    card += '<span class="titulo_cardview" id="titulo_cardview" style="font-weight: bold; font-size: 16px">'+Item+'</span><br>'
    card += '<span class="subtitulo_cardview" id="subtitulo_cardview" style="font-size: 13px">'+(['<span style="font-size:16px; color:#993300; font-weight:normal; font-style:normal;">'+('R$ ' + String(valor200.slice((-id))[0]))+' </span>',' ',informacao200.slice((-id))[0],' = ',horas200.slice((-id))[0]].join(''))+'</span><br>'
    card += '<span class="texto_adicional_cardview" id="texto_adicional_cardview" style="font-size: 13px">'+''+'</span>'
    card += '</div>'
    card += '</div>'
    card +=' </div>'
    document.getElementById("telatodos").innerHTML += card;
    todosvalores.push((valor200.slice((-id))[0]));
    calldesigner();
  }
  for (var Item_index7 in todosvalores) {
    Item = todosvalores[Item_index7];
    somadesaldo = (txt_to_number(somadesaldo)) + (txt_to_number(Item));
  }
  calculos();
}

// Descreva esta função...
function salvacorrida() {
  if (!document.getElementById('txtvalor').value.length) {
    Swal.fire('Preencha tudo');
  } else {
    function insertRow() {
    let jsonData = {};
    let colunas = ['cliente', 'informacao', 'valor', 'hora'];
    let valores = [usuarionome, [document.getElementById('txtcorrida').value,' ',new Date().toLocaleDateString()].join(''), document.getElementById('txtvalor').value, new Date().toLocaleTimeString()];
    for (let i = 0; i < colunas.length; i++) {
      jsonData[colunas[i]] = valores[i];
    }
      fetch(bb_baserow_url+"api/database/rows/table/"+tabelaidcorridas+"/?user_field_names=true", {
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
          salvasaldo();

      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }
    insertRow();
  }
}

// Descreva esta função...
function pagina1() {
  id = 0;
  for (var Item_index8 in resultado_pesquisa) {
    Item = resultado_pesquisa[Item_index8];
    id = id + 1;
    var card = '<div onclick="calldivisa('+id+')" class="cardview" id="'+id+'" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
    card += '<div class="row">'
    card += '<div class="col-4">'
    card += '<img class="imagem_cardview" id="imagem_cardview" style="width:50px; height:50px;" src="'+'assets/icon2.png'+'" alt="imagem">'
    card += '</div>'
    card += '<div class="col-8">'
    card += '<span class="titulo_cardview" id="titulo_cardview" style="font-weight: bold; font-size: 16px">'+(Item['cliente'])+'</span><br>'
    card += '<span class="subtitulo_cardview" id="subtitulo_cardview" style="font-size: 13px">'+(['<span style="font-size:16px; color:#993300; font-weight:normal; font-style:normal;">'+('R$ ' + String(Item['valor']))+' </span>',' as ',Item['hora']].join(''))+'</span><br>'
    card += '<span class="texto_adicional_cardview" id="texto_adicional_cardview" style="font-size: 13px">'+(Item['informacao'])+'</span>'
    card += '</div>'
    card += '</div>'
    card +=' </div>'
    document.getElementById("telatodos").innerHTML += card;
    todosvalores.push((Item['valor']));
    calldesigner();
  }
  for (var Item_index9 in todosvalores) {
    Item = todosvalores[Item_index9];
    somadesaldo = (txt_to_number(somadesaldo)) + (txt_to_number(Item));
  }
  calculos();
}

// Descreva esta função...
function salvasaldo() {
  function insertRow() {
  let jsonData = {};
  let colunas = ['local', 'valor', 'data', 'hora', 'codigo'];
  let valores = [[usuarionome,' ',document.getElementById('txtcorrida').value].join(''), document.getElementById('txtvalor').value, new Date().toLocaleDateString(), new Date().toLocaleTimeString(), localStorage.getItem('codigo') || '0'];
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
        Swal.fire('Salvo');
    window.location.href = "clientes.html";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }
  insertRow();
}

// Descreva esta função...
function calldesigner() {
  $(".cardview").css("border", 1 + "px solid #000000");
  $(".cardview").css("border-radius", "20px");
  $(".cardview").css("height", (window.innerHeight * (13 / 100)) + "px");
  $(".cardview").css("width", '90' + "%");
  $("."+'subtitulo_cardview').css("margin-left", (-50)+"px");
  $("."+'subtitulo_cardview').css("margin-right", 0+"px");
  $("."+'subtitulo_cardview').css("margin-top", 0+"px");
  $("."+'subtitulo_cardview').css("margin-bottom", 0+"px");
  $(".imagem_cardview").css("height", '90' + "%");
  $(".imagem_cardview").css("width", '60' + "%");
  $("."+'texto_adicional_cardview').css("margin-left", (-50)+"px");
  $("."+'texto_adicional_cardview').css("margin-right", 0+"px");
  $("."+'texto_adicional_cardview').css("margin-top", 0+"px");
  $("."+'texto_adicional_cardview').css("margin-bottom", 0+"px");
  $("."+'titulo_cardview').css("margin-left", 40+"px");
  $("."+'titulo_cardview').css("margin-right", 0+"px");
  $("."+'titulo_cardview').css("margin-top", 0+"px");
  $("."+'titulo_cardview').css("margin-bottom", 0+"px");
}


var bb_baserow_token = 'IKrER8jZ6NQENRIxVlNeF65L5J3ss1LH';
var bb_baserow_url = 'https://api.baserow.io/';

//feito com bootblocks.com.br
  id = [];
  id200 = [];
  nomescli200 = [];
  valor200 = [];
  informacao200 = [];
  horas200 = [];
  idliberar = 0;
  todosvalores = [];
  somadesaldo = 0;
  contclick = 0;
  idapagar = 0;

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

//feito com bootblocks.com.br
  $("#save").css("left", (window.innerWidth * (44 / 100))+"px");
  $("#save").css("top", (window.innerHeight * (92 / 100))+"px");
  $("#save").css("z-index", "1000");
  $("#save").css("position", "fixed");
  $("#save").css("display", "block");


        function qclick() {
            let elementoClick = document.getElementById('lbltudo');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      function copyText(){
  var text = localStorage.getItem('link') || '0';
  if(navigator.clipboard && navigator.clipboard.writeText){
  navigator.clipboard.writeText(text);
  }else{
  var copyText = document.createElement("textarea");
  copyText.value = text;
  document.body.appendChild(copyText);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(copyText);
  }
  }
  copyText();
  Swal.fire('Link Copiado');

                });
            }
        }
        qclick();

//feito com bootblocks.com.br
  somadesaldo = 0;
  todosvalores = [];
  usuarionome = localStorage.getItem('usuarioindentificado') || 'Erro';
  callnome();


        function qclick2() {
            let elementoClick = document.getElementById('btnzerar');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      zerar();

                });
            }
        }
        qclick2();


        function qclick3() {
            let elementoClick = document.getElementById('btnapagar');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      delcorrida();

                });
            }
        }
        qclick3();


        function qclick4() {
            let elementoClick = document.getElementById('save');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      $("#"+'modaladdcorrida').show();

                });
            }
        }
        qclick4();


        function qclick5() {
            let elementoClick = document.getElementById('btnsalvarcorrida');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      $("#"+'modaladdcorrida').hide();
  salvacorrida();

                });
            }
        }
        qclick5();


        function qclick6() {
            let elementoClick = document.getElementById('icon_2');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "clientes.html";
                });
            }
        }
        qclick6();


        function qclick7() {
            let elementoClick = document.getElementById('icon_3');
            if (elementoClick) {
                elementoClick.addEventListener("click", function () {
                      window.location.href = "index.html";
                });
            }
        }
        qclick7();
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