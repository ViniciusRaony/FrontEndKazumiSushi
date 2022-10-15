function calcularProduto(val) {
    var preco_string = document.getElementById("preco").textContent;       
    var preco_string_sem_currecy = preco_string.replace("R$ ", "").replace(",", ".");        
    var preco = parseFloat(preco_string_sem_currecy);    
    var resultado= (preco*val).toFixed(2).replace(".", ",");
   
    if (isNaN(val)) { 
        document.getElementById("total").value=' '   
        return 0;   
    } else {          
        document.getElementById("total").value='R$ ' + resultado             
    }     
}   
