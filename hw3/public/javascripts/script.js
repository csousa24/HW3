
  $(document).ready(function() {
    let dropdownTimeout;

    // Send warning message if vegan is in notes
    $("#orderButton").click(function(event) {
      event.preventDefault(); // Prevent default form submission

      let notes = $("textarea[name='Notes']").val().toLowerCase();
      if (notes.includes("vegan")) {
        alert("Warning: Cheesecakes contain dairy!");
      } else {
        let quantity = $("#quantity").val();
        let topping = $("input[name='topping']:checked").val();

        // Remove form and replace with confirmation message
        $("#orderForm").html(`
          <h2>Thank you! Your order has been placed.</h2>
          <p><strong>Quantity:</strong> ${quantity}</p>
          <p><strong>Topping:</strong> ${topping}</p>
          <p><strong>Notes:</strong> ${notes}</p>
        `);
      }
    });

    // Keep menu open while interacting
    $(".dropdown, .dropdown-menu").hover(
      function() {
        clearTimeout(dropdownTimeout); // don't dissapear
        $(".dropdown-menu").stop(true, true).fadeIn(200);
      },
      function() {
        dropdownTimeout = setTimeout(function() {
          $(".dropdown-menu").stop(true, true).fadeOut(200);
        }, 300); // Small delay prevents flickering
      }
    );

    // Handle month selection from dropdown
    $(".dropdown-menu li").click(function() {
      let selectedMonth = $(this).text();
      $("#ordersHeading").html(`Orders for <span class="dropdown">${selectedMonth}</span>`);
      $(".dropdown-menu").fadeOut(200); // Hide menu after selection
    });
  });