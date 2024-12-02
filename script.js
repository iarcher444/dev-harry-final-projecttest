document.addEventListener('DOMContentLoaded', () => {
    const defaultOrder = {
      crust: "Thin",
      size: "Medium",
      toppings: ["Pepperoni", "Mushrooms"],
      cheeseLevel: 5,
      instructions: "Extra crispy crust",
      phone: ""
    };
  
    const form = document.getElementById('pizzaForm');
  
    // Initialize Form with Default Values
    document.getElementById('crust').value = defaultOrder.crust;
    form.querySelector(`input[name="size"][value="${defaultOrder.size}"]`).checked = true;
    defaultOrder.toppings.forEach(topping => {
      form.querySelector(`input[value="${topping}"]`).checked = true;
    });
    document.getElementById('cheeseLevel').value = defaultOrder.cheeseLevel;
    document.getElementById('instructions').value = defaultOrder.instructions;
  
    // Submit Button Handler
    document.getElementById('submitBtn').addEventListener('click', () => {
      const updatedOrder = {
        crust: document.getElementById('crust').value,
        size: form.querySelector('input[name="size"]:checked').value,
        toppings: Array.from(form.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value),
        cheeseLevel: document.getElementById('cheeseLevel').value,
        instructions: document.getElementById('instructions').value,
        phone: document.getElementById('phone').value,
      };
  
      // Update DOM (Optional)
      alert("Order Submitted! Check the console for JSON data.");
  
      // Log JSON to Console
      console.log(JSON.stringify(updatedOrder, null, 2));
    });
  });
  