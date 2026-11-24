
document.getElementById("checkout").addEventListener("click",function()
{
    alert("Finalizing your order");
});

function searchProduct()
{
    let search = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll(".Mixed-collection-Tshirts");
    products.forEach(function(product)
    {
        let name=food.querySelector("h4").textContent.toLowerCase();
        if(name.includes(search)){
            food.style.display="block";
        }
        else
        {
            food.style.display="none";
        }
    });
}

