/**
 * Created by jasonnatividad on 4/8/17.
 */


(function(){


    var loadBtn = document.getElementById("load-button");

    loadBtn.addEventListener("click", loadBills);




    function loadBills() {

        var mainText = document.querySelector("#main-text").value;

        var expression = /([G{1}][C{1}]\d{7})/g;

        //mainText = mainText.replace(/[\n\r]+/g, '');



        //[[G{1}][C{1}]\d{7}


        var listOfBills = mainText.match(expression);;

        //var listOfBills = mainText.split(expression);

        console.log(listOfBills);


    }

})();