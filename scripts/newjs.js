var runningTotal = 0;
var sizeTotal = 0;
var crustTotal = 0;
var sauceTotal = 0;
var cheeseTotal = 0;
var proteinTotal = 0;
var vegTotal = 0;


// ---------- Pizza Size 

var previewSize = document.querySelectorAll('input[name="size"]');

// ---------- Display size in preview when the 'click' event happens

for (x = 0; x < previewSize.length; x++) {
    previewSize[x].addEventListener('click', sumSize);
};

function sumSize(e) {
    console.log(e.target.value);
    document.getElementById('previewSize').innerHTML = e.target.value;

    // ---------- collects information for selected size and price, displaying the info on receipt when "Order It" button is clicked.

    for (x = 0; x < previewSize.length; x++) {
        if (previewSize[x].checked) {

            var selectedSize = previewSize[x].value;
        }

        if (selectedSize === "Personal") {
            sizeTotal = 6;
        } else if (selectedSize === "Medium") {
            sizeTotal = 10;
        } else if (selectedSize === "Large") {
            sizeTotal = 14;
        } else if (selectedSize === "Extra Large") {
            sizeTotal = 16;
        }

        console.log('Size Total: $'+sizeTotal+'.00')
    
        runningTotal = sizeTotal+crustTotal+sauceTotal+cheeseTotal+proteinTotal+vegTotal;
    }
    
    document.getElementById('grandSize').innerHTML = selectedSize;
    document.getElementById('totalSize').innerHTML = sizeTotal + ".00";

    console.log('Running Total: $'+runningTotal+'.00');
    document.getElementById('grandTotal').innerHTML='<strong>'+'$ '+runningTotal+".00"+'</strong>';
}




// ---------- Pizza Crust

var previewCrust = document.querySelectorAll('input[name="crust"]');

// ---------- Display crust in preview when the 'click' event happens

for (y = 0; y < previewCrust.length; y++) {
        previewCrust[y].addEventListener('click', sumCrust);
}

function sumCrust(e, runningTotal, preview) {
    console.log(e.target.value);
    document.getElementById('previewCrust').innerHTML = e.target.value + " Crust";

    // ---------- collects information for selected crust and price, displaying the info on receipt when "Order It" button is clicked.

    for (y = 0; y < previewCrust.length; y++) {
        if (previewCrust[y].checked) {

            var selectedCrust = previewCrust[y].value;
        }

        if (selectedCrust === "Cheese Stuffed") {
            crustTotal = 3;
        } else crustTotal = 0;
    }
    
    runningTotal = sizeTotal+crustTotal+sauceTotal+cheeseTotal+proteinTotal+vegTotal;
    console.log('Crust Total: $' + crustTotal + '.00')
    
    document.getElementById('grandCrust').innerHTML = selectedCrust+" Crust";
    document.getElementById('totalCrust').innerHTML = crustTotal + ".00";

    console.log('Running Total: $'+runningTotal+'.00');
    document.getElementById('grandTotal').innerHTML='<strong>'+'$ '+runningTotal+".00"+'</strong>';
    
};



// ---------- Pizza Sauce

var previewSauce = document.querySelectorAll('input[name="sauce"]');

// ---------- Display sauce in preview when the 'click' event happens

for (z = 0; z < previewSauce.length; z++) {
        previewSauce[z].addEventListener('click', sumSauce);
};

function sumSauce(e, runningTotal, preview) {
    console.log(e.target.value);
    document.getElementById('previewSauce').innerHTML = e.target.value;

    // ---------- collects information for selected sauce and price, displaying the info on receipt when "Order It" button is clicked.

    for (z = 0; z < previewSauce.length; z++) {
        if (previewSauce[z].checked) {
            sauceTotal = 0;
            var selectedSauce = previewSauce[z].value;
        }

        
        runningTotal = sizeTotal+crustTotal+sauceTotal+cheeseTotal+proteinTotal+vegTotal;

        document.getElementById('grandSauce').innerHTML = selectedSauce;
        document.getElementById('totalSauce').innerHTML = sauceTotal + ".00";
        
        document.getElementById('grandTotal').innerHTML='<strong>'+'$ '+runningTotal+".00"+'</strong>';
        
    }
    console.log('Sauce Total: $' + sauceTotal + '.00');
    runningTotal=sizeTotal+crustTotal+sauceTotal;
    console.log('Running Total: $'+runningTotal+'.00');
    document.getElementById('grandTotal').innerHTML='<strong>'+'$ '+runningTotal+".00"+'</strong>';
}




// ---------- Pizza Cheese

var previewCheese = document.querySelectorAll('input[name="cheese"]');

// ---------- Display cheese in preview when the 'click' event happens

for (a = 0; a < previewCheese.length; a++) {
        previewCheese[a].addEventListener('click', sumCheese);
};

function sumCheese(e, runningTotal, preview) {
    console.log(e.target.value);
    document.getElementById('previewCheese').innerHTML = e.target.value;

    // ---------- collects information for selected cheese and price, displaying the info on receipt when "Order It" button is clicked.


    for (a = 0; a < previewCheese.length; a++) {
        if (previewCheese[a].checked) {

            var selectedCheese = previewCheese[a].value;
        }

        if (selectedCheese === "Extra Cheese") {
            cheeseTotal = 3;
        } else cheeseTotal = 0;

        runningTotal = sizeTotal+crustTotal+sauceTotal+cheeseTotal+proteinTotal+vegTotal;
    }

    console.log('Cheese Total: $' + cheeseTotal + '.00')
    
    document.getElementById('grandCheese').innerHTML = selectedCheese;
    document.getElementById('totalCheese').innerHTML = cheeseTotal + ".00";

    console.log('Running Total: $'+runningTotal+'.00');
    document.getElementById('grandTotal').innerHTML='<strong>'+'$ '+runningTotal+".00"+'</strong>';
}



// ---------- Pizza Protein
 
var previewProtein = document.querySelectorAll('input[name="protein"]');

// ---------- Display protein in preview when the 'click' event happens
    
for (b = 0; b < previewProtein.length; b++) {
    previewProtein[b].addEventListener('click', sumProtein);
}

    
function sumProtein(e, runningTotal, preview) {

    // ---------- create new array to put in checked protein & display selection in console

    var selectedProtein = []

    for (var b = 0; b < previewProtein.length; b++) {
        if (previewProtein[b].checked) {
            selectedProtein.push(previewProtein[b].value);

            console.log("Seleted Protein: " + previewProtein[b].value);
        }
    }
    
    // ---------- since protein is $1 each, use length of protein selection to calculate, using -1 for 1 free topping if selection is > 1

    var proteinCount = selectedProtein.length;
    if (proteinCount > 1) {
        proteinTotal = (proteinCount - 1);
        for (var b = 1; b < selectedProtein.length; b++) {
            selectedProtein[b] = "<br>" + selectedProtein[b];
        }
    } 
    else {
        proteinTotal = 0;
    }
    
    runningTotal = sizeTotal+crustTotal+sauceTotal+cheeseTotal+proteinTotal+vegTotal;

    console.log("Total Protein Selected: " + proteinCount);

    console.log(proteinCount + " protein selected (1 protein free) = " + "$" + proteinTotal + ".00)");

    // display selected protein in previewProtein div when checkbox is/are clicked

    document.getElementById('previewProtein').innerHTML =selectedProtein + "<br>";

    // display selected protein in receipt modal

    document.getElementById('grandProtein').innerHTML = selectedProtein + "<br>";
    document.getElementById('totalProtein').innerHTML= proteinTotal+".00";

    console.log('Running Total: $'+runningTotal+'.00');
    document.getElementById('grandTotal').innerHTML='<strong>'+'$ '+runningTotal+".00"+'</strong>';

}




// ---------- Pizza Veg

var previewVeg = document.querySelectorAll('input[name="veg"]');
    
for (c = 0; c < previewVeg.length; c++) {
    previewVeg[c].addEventListener('click', sumVeg);
};

function sumVeg(e, runningTotal, preview) {

    // ---------- create new array to put in checked veg & display selection in console

    var selectedVeg = []

    for (var c = 0; c < previewVeg.length; c++) {
        if (previewVeg[c].checked) {
            selectedVeg.push(previewVeg[c].value);

            console.log("Selected Veg:" + previewVeg[c].value);
        }
    }

    // ---------- since veg is $1 each, use length of veg selection to calculate, using -1 for 1 free topping if selection is > 1

    var vegCount = selectedVeg.length;
        if (vegCount > 1) {
            vegTotal = (vegCount - 1);
            for (var c = 1; c < selectedVeg.length; c++) {
                selectedVeg[c] = "<br>" + selectedVeg[c];
            }
        } 
        else {
            vegTotal = 0;
        }
        runningTotal = sizeTotal+crustTotal+sauceTotal+cheeseTotal+proteinTotal+vegTotal;

        console.log("totalVegselect" + vegCount);

        console.log(vegCount + " veg selected (1 free veg) = " + "$" + vegTotal + ".00)");

        // display selected veg in previewProtein div when checkbox is/are clicked

        document.getElementById('previewVeg').innerHTML = selectedVeg + "<br>";

        // display selected protein in receipt modal

        document.getElementById('grandVeg').innerHTML= selectedVeg + "<br>";
        document.getElementById('totalVeg').innerHTML=vegTotal+".00";

        console.log('Running Total: $'+runningTotal+'.00');
        document.getElementById('grandTotal').innerHTML='<strong>'+'$ '+runningTotal+".00"+'</strong>';
};




var orderButton = document.getElementById('order');

//Get modal element

var modal = document.getElementById('receipt');

//Get open modal button
var modalBtn = document.getElementById('order');

//Get close button
var closeBtn = document.getElementById('closeBtn');

// Listen for open click
order.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);


// Function to open modal
function openModal() {
    modal.style.display = 'block';
};

// function to close modal
function closeModal() {
    modal.style.display = "none";
};




// When "Cancel It" button is clicked, form is reset

var cancelButton = document.getElementById('cancel');

cancelButton.addEventListener('click', reset);

function reset() {
    document.getElementById('preview').innerHTML="";
    
    var selectionChecks = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    for (i=0;i<selectionChecks.length;i++)
    if (selectionChecks[i].checked){
        selectionChecks[i].checked = false;
    }
    location.reload();
};

