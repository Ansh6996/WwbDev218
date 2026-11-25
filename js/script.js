/*
document.getElementById("checkout").addEventListener("click",function()
{
    alert("Finalizing your order");
});
*/

function searchProduct()
{
    let search = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll("#search-items > div > div, #search-items > section > div");
    products.forEach(function(product)
    {
        let name=product.querySelector("h4").textContent.toLowerCase();
        if(name.includes(search)){
            product.style.display="block";
        }
        else
        {
            product.style.display="none";
        }
    });
}

