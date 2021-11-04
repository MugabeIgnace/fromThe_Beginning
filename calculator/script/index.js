    function calcNumbers(result) {
        document.querySelector('.area').value += result;
        }

    function makeNegative(result) {
            if (result.charAt(0) === '-') {
        document.querySelector('.area').value = result.replace('-', '');
            }
    else {
        document.querySelector('.area').value = '-' + result;
            }
        }
