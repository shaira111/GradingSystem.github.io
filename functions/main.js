function buttonPress(){
    let average, sum;
    let a, b, c, d, e, f, g;

    a = Number(document.getElementById('Info_Management').value);
    b = Number(document.getElementById('Web_System').value);
    c = Number(document.getElementById('Ethics').value);
    d = Number(document.getElementById('PathFit4').value);
    e = Number(document.getElementById('Networking_1').value);
    f = Number(document.getElementById('System_Integ').value);
    g = Number(document.getElementById('Rizal').value);

    sum = a + b + c + d + e + f + g;
    average =  sum / 7;

    document.getElementById('ave').innerHTML = 'Average - ' + parseFloat(average).toFixed(2);

    if (average > 89 && average < 101){
        document.getElementById('rem').innerHTML = 'Remark - PASSED';
        document.getElementById('desc').innerHTML = 'Descriptor - OUTSTANDING';
    } else if (average > 84 && average < 90){
        document.getElementById('rem').innerHTML = 'Remark - PASSED';
        document.getElementById('desc').innerHTML = 'Descriptor - VERY SATISFACTORY';
    } else if (average > 79 && average < 85){
        document.getElementById('rem').innerHTML = 'Remark - PASSED';
        document.getElementById('desc').innerHTML = 'Descriptor - SATISFACTORY';
    } else if (average > 74 && average < 80){
        document.getElementById('rem').innerHTML = 'Remark - PASSED';
        document.getElementById('desc').innerHTML = 'Descriptor - FAIRLY SATISFACTORY';
    } else if (average < 75){
        document.getElementById('rem').innerHTML = 'Remark - FAILED';
        document.getElementById('desc').innerHTML = 'Descriptor - DID NOT MEET EXPECTATIONS';
    } else {
        window.alert('----W A R N I N G----\nDescriptor - DOES NOT EXIST');
        document.getElementById('rem').innerHTML = 'Remark - ERROR!';
        document.getElementById('desc').innerHTML = 'Descriptor - DOES NOT EXIST';
    }
}
function reset(){
    sum = 0;
    average = 0;
    document.getElementById('ave').innerHTML = 'Average - ';
    document.getElementById('rem').innerHTML = 'Remark - ';
    document.getElementById('desc').innerHTML = 'Descriptor - ';
    document.getElementById('Info_Management').value = '';
    document.getElementById('Web_System').value = '';
    document.getElementById('Ethics').value = '';
    document.getElementById('PathFit4').value = '';
    document.getElementById('Networking_1').value = '';
    document.getElementById('System_Integ').value = '';
    document.getElementById('Rizal').value = '';
}