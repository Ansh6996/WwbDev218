
document.getElementById("checkout").addEventListener("click",function()
{
    alert("Finalizing your order");
});

function searchFood()
{
    let search = document.getElementById("search").value.toLowerCase();
    let products = document.querySelectorAll("products");
    products.forEach(function(food)
    {
        let name=food.querySelector("h4").textContent.toLowerCase();
        if(name.includes(search)){
            food.style.display="block";
        }
        else
        {
            food.style.display="name";
        }
    });
}

