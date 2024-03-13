
document.addEventListener('DOMContentLoaded', function() {
    var dropdownbutton1 = document.querySelector('.logo');
    dropdownbutton1.addEventListener('click', function() {
        var dropdownItems1 = document.querySelector('.dropdown-item');
        if (dropdownItems1.style.display === 'block') {
            dropdownItems1.style.display = 'none';
        } else {
            dropdownItems1.style.display = 'block';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var dropdownbutton2 = document.querySelector('.drpbutton');
    dropdownbutton2.addEventListener('click', function() {
        var dropdownItems2 = document.querySelector('.guests');
        if (dropdownItems2.style.display === 'block') {
            dropdownItems2.style.display = 'none';
        } else {
            dropdownItems2.style.display = 'block';
        }
    });
});




// Başlangıçta counter değerleri
let counter1 = 0;
let counter2 = 0;

// İlk sayacı arttıran fonksiyon
function increaseCounter1() {
    counter1++;
    updateCounterDisplay1();
    updateButtonVisibility();
}

// İlk sayacı azaltan fonksiyon
function decreaseCounter1() {
    if (counter1 > 0) {
        counter1--;
        updateCounterDisplay1();
        updateButtonVisibility();
    } else{
        
    }
}

// İkinci sayacı arttıran fonksiyon
function increaseCounter2() {
    counter2++;
    updateCounterDisplay2();
    updateButtonVisibility();
}

// İkinci sayacı azaltan fonksiyon
function decreaseCounter2() {
    if (counter2 > 0) {
        counter2--;
        updateCounterDisplay2();
        updateButtonVisibility();
    }
}

// HTML'de ilk sayacı güncelleyen fonksiyon
function updateCounterDisplay1() {
    document.getElementById('counter-display1').innerText = counter1;
}

// HTML'de ikinci sayacı güncelleyen fonksiyon
function updateCounterDisplay2() {
    document.getElementById('counter-display2').innerText = counter2;
}

// Butonların görünürlüğünü güncelleyen fonksiyon
function updateButtonVisibility() {
    const closeButton = document.querySelector('.guests-button .blue-button');
    const cancelButton = document.querySelector('.guests-button .white-button');
    const applyButton = document.querySelector('.guests-button .blue-button:nth-child(3)');
    const minusButton1 = document.querySelector('.guests-info-adult-counter .minus-button');
    const minusButton2 = document.querySelector('.guests-info-children-counter .minus-button');

    if (counter1 === 0 && counter2 === 0) {
        closeButton.style.display = 'block';
        cancelButton.style.display = 'none';
        applyButton.style.display = 'none';
    } else {
        closeButton.style.display = 'none';
        cancelButton.style.display = 'block';
        applyButton.style.display = 'block';

    }

    if (counter1 > 0){
        minusButton1.style.color = 'rgb(90, 90, 255)'
        minusButton1.style.border  = '1px solid rgb(90, 90, 255)'
    } else{
        minusButton1.style.color = 'gray'
        minusButton1.style.border  = '1px solid gray'
    }

    if (counter2 > 0){
        minusButton2.style.color = 'rgb(90, 90, 255)'
        minusButton2.style.border  = '1px solid rgb(90, 90, 255)'
    } else{
        minusButton2.style.color = 'gray'
        minusButton2.style.border  = '1px solid gray'
    }
}

