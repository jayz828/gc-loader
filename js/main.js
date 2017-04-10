/**
 * Created by jasonnatividad on 4/8/17.
 */


(function(){


    var loadBtn = document.getElementById("load-button");
    var mainText = document.querySelector("#main-text");
    var clearBtn = document.getElementById("clear-button");

    //var linkBase =


    // Event listeners
    loadBtn.addEventListener("click", loadBills);
    clearBtn.addEventListener("click", clearTextArea);
    //
    console.log(clearBtn);

    function loadBills() {


        var expression = /([G{1}][C{1}]\d{7})/g;

        //mainText = mainText.replace(/[\n\r]+/g, '');

        var mainText = document.querySelector("#main-text").value;

        //[[G{1}][C{1}]\d{7}


        var listOfBills = mainText.match(expression);

        //var listOfBills = mainText.split(expression);

        console.log(listOfBills);

        listOfBills.forEach(function(index) {

            window.open(index + ".html");
        });

        //window.open(listOfBills[0]+ ".html");


    }



    function clearTextArea() {
        var mainText = document.querySelector("#main-text");

        mainText.value = "";

    }

})();