 /*Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. */
 let tiempo_restante = 0;
      let interval_id = null;

      function iniciar() {
        let horas = document.getElementById("horas").value;
        let minutos = document.getElementById("minutos").value;
        let segundos = document.getElementById("segundos").value;
        tiempo_restante = (horas * 3600) + (minutos * 60) + (segundos * 1);
        interval_id = setInterval(decrementar, 1000);
      }

      function decrementar() {
        if (tiempo_restante > 0) {
          tiempo_restante--;
          let horas = Math.floor(tiempo_restante / 3600);
          let minutos = Math.floor((tiempo_restante % 3600) / 60);
          let segundos = tiempo_restante % 60;
          document.getElementById("tiempo_restante").innerHTML = ("0" + horas).slice(-2) + ":" + ("0" + minutos).slice(-2) + ":" + ("0" + segundos).slice(-2);
        } else {
          clearInterval(interval_id);
        }
      }

      function pausar() {
        clearInterval(interval_id);
      }

      function reset() {
        clearInterval(interval_id);
        tiempo_restante = 0;
        document.getElementById("horas").value = "";
        document.getElementById("minutos").value = "";
        document.getElementById("segundos").value = "";
        document.getElementById("tiempo_restante").innerHTML = "00:00:00";
      }