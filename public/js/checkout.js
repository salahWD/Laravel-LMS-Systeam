const stripe = Stripe(stripeKey);

let elements;

$(window).ready(function () {
  initialize();
  checkStatus();
});

document
  .querySelector("#payment-form")
  .addEventListener("submit", handleSubmit);

async function initialize() {
  elements = stripe.elements({ clientSecret: clientSecretKey });

  const paymentElement = elements.create("payment");

  paymentElement.mount("#payment-element");

  // shipping mode
  const options = { mode: "shipping" };
  const addressElement = elements.create("address", options);

  addressElement.mount("#address-element");

  addressElement.on("change", (event) => {
    if (event.complete) {
      address = event.value.address;
    }
  });
}

async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);

  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: successUrl,
    },
  });

  const addressElement = elements.getElement("address");

  const { complete, value } = await addressElement.getValue();

  if (error) {
    if (error.type === "card_error" || error.type === "validation_error") {
      showMessage(error.message);
    } else {
      showMessage("An unexpected error occurred.");
    }
    setLoading(false);
  }
}

// Fetches the payment intent status after payment submission
async function checkStatus() {
  const clientSecret = new URLSearchParams(window.location.search).get(
    "payment_intent_client_secret"
  );

  if (!clientSecret) {
    return;
  }

  const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

  switch (paymentIntent.status) {
    case "succeeded":
      showMessage("Payment succeeded!");
      break;
    case "processing":
      showMessage("Your payment is processing.");
      break;
    case "requires_payment_method":
      showMessage("Your payment was not successful, please try again.");
      break;
    default:
      showMessage("Something went wrong.");
      break;
  }
}

// ------- UI helpers -------
function showMessage(messageText) {
  const messageContainer = document.querySelector("#payment-message");

  messageContainer.classList.remove("hidden");
  messageContainer.textContent = messageText;

  setTimeout(function () {
    messageContainer.classList.add("hidden");
    messageContainer.textContent = "";
  }, 4000);
}

// Show a spinner on payment submission
function setLoading(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("#submitBtn").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("#submitBtn").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
}
