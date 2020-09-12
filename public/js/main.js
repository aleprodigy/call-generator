
    var pattern = "^\\([1-9]{2}\\) (?:[2-8]|9[1-9])[0-9]{3}\\-[0-9]{4}$";
    var possibildades = [
        "só chama\n",
        "caixa postal\n",
        "não chama\n",
        "toca e fica mudo\n",
        "desligado\n",
        "indisponível\n",
        "fora de área\n"
    ];

    function filter(value) {
        var numberPattern = (/[A-za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/gi);
        return value.replace(numberPattern, "");
    }

    function ale() {
        return possibildades[Math.floor(Math.random() * 6)]
    }

    function isBlank(str) {
        return (!str || /^\s*$/.test(str));
    }

    function remover(destino) {
        var saida = '';
        var lines = document.getElementById('entrada').value.split('\n');
        lines.forEach(function (line) {
            var temp = filter(line);
            if (!isBlank(line) && !isBlank(temp)) {
                if (destino === 'entrada') {
                    saida = saida + filter(line)+'\n';
                } else {
                    saida = saida + filter(line) + " - " + ale();
                }
            }
        });
        document.getElementById(destino).value = saida;
    }

    document.getElementById('gerar').addEventListener("click", function (data) {
        remover('saida');
    
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-left',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Gerado com sucesso'
          })
    });

    var area = document.getElementById('entrada');
    if (area.addEventListener) {
        area.addEventListener('input', function (data) {
            area.value = filter(area.value);
        }, false);
    } else if (area.attachEvent) {
        area.attachEvent('onpropertychange', function () {
            // IE-specific event handling code
            remover('entrada');
        });

    }

    function copiarResultado () {
        var resultado = document.getElementById("saida")

         /* selecionar tudo que está dentro do id */
        resultado.select()
        resultado.setSelectionRange(0, 99999); /*para cel*/

         /* após ter selecionado, copiar tudo que está selecionado */
        document.execCommand("copy");

        /*alert*/
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-left',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Copiado com sucesso'
          })
    }

    function deleteResultado (){
        var deleted = document.getElementById('saida').value = ''

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Excluído com sucesso'
          })
    }