"use strict";

let menu = {

    drinks : [
    
        "Water", "Tea", "Sweet Tea",
    
        "Coke", "Dr. Pepper", "Sprite"
    
    ],
    
    entrees : [
    
        "Hamburger w/ Fries",
    
        "Grilled Cheese w/ Tater Tots",
    
        "Grilled Chicken w/ Veggies",
    
        "Chicken Fried Steak w/ Mashed Potatoes",
    
        "Fried Shrimp w/ Coleslaw",
    
        "Veggie Plate"
    
    ],
    
    desserts: [
    
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    
        ]
    
    };

    const categoryDropDown = document.getElementById("category");
    const listBox = document.getElementById("items");

    function updateListBox(){
        const selectedCategory = categoryDropDown.value;
        
        listBox.innerHTML = "";

        const items = menu[selectedCategory];

        items.forEach(item => {
            const option = document.createElement("option");
            option.textContent = item;
            listBox.appendChild(option);
        });


    }

    categoryDropDown.addEventListener("change", updateListBox);

    updateListBox();


     