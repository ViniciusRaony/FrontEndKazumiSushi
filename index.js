function calcularProduto() {
    var preco_string = document.getElementById("preco").textContent;       
    var preco_string_sem_currecy = preco_string.replace("R$ ", "").replace(",", ".");        
    var preco = parseFloat(preco_string_sem_currecy);    
    var qtd = document.getElementById("quantidade").value;
    var tamanho = document.getElementById("tamanho").value;    
    var resultado = (preco*qtd).toFixed(2)
    

    if (isNaN(qtd)) { 
        document.getElementById("total").value=' '   
        return 0;   
    } else if (tamanho == "P") {    
        resultado = (resultado*1.05).toFixed(2).replace(".", ",");  
        console.log('Entrei no P ', + resultado);
        document.getElementById("total").value='R$ ' + resultado             
    } else if (tamanho == "M") {    
        resultado = (resultado*1.10).toFixed(2).replace(".", ","); 
        console.log('Entrei no M ', + resultado); 
        document.getElementById("total").value='R$ ' + resultado             
    } else if (tamanho == "G") {    
        resultado = (resultado*1.15).toFixed(2).replace(".", ","); 
        console.log('Entrei no G ', + resultado); 
        document.getElementById("total").value='R$ ' + resultado             
    }     
}   

