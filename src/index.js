module.exports = function toReadable(n) {
    const oneLine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const twoLine = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decadyLine = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const stepLiner = ['thousand', 'million'];
    const hundred = 'hundred';
    const thousand = 'thousand';
    const million = 'million';
    let result = ''
    let resultAll = ''
    let elDecady = 0;
    let arr = [];
    let number = n;
    let num = String(number).split('');
    let j = 0;
    function all() {
        if (Math.ceil(num.length / 3) === 1) {
            step(Number(num.join('')))
            resultAll = result + ' ' + resultAll
            return
        } else if (Math.ceil(num.length / 3) > 1) {
            if (num.length > 3) {
                let part = Number(num.splice(-3, 3).join(''))
                console.log(num)
                step(part)
                resultAll = ' ' + stepLiner[j] + ' ' + result + resultAll
                j++;
                all()
            }
        }
    }
    function step(s) {
        let a = s;
        let arrA = String(a).split('');

        function decady(a) {
            if (a < 10) {
                result = oneLine[a];
                return result;
            } else if (a < 20) {
                result = twoLine[a - 10];
                return result;
            } else if (a < 100 && a % 10 === 0) {
                elDecady = Math.floor(a / 10);
                result = decadyLine[elDecady - 2];
                return result
            } else if (a < 100) {
                elDecady = Math.floor((a) / 10);
                result = decadyLine[elDecady - 2] + ' ' + oneLine[a - elDecady * 10];
                return result;
            }
        }
        function hund(b) {
            let arr1 = String(b).split('');
            if (arr1.length <= 3 && b % 100 === 0) {
                elHundred = Math.floor((b) / 100);
                result = oneLine[elHundred] + ' ' + hundred;
                return result;
            } else if (arr1.length <= 3) {
                elHundred = Math.floor((b) / 100);
                elDecady = (b - (elHundred * 100));
                result = oneLine[elHundred] + ' ' + hundred + ' ' + decady(elDecady);
                return result;
            }

        }

        if (arrA.length <= 2) {
            decady(a)
        } else if (arrA.length <= 3) {
            hund(a)
        }
    }
    all()
    return resultAll.trim()
}


