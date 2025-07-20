document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  const summaryText = `
    Hi ${name}, your ${service} order has been booked!
    Pickup on ${date} at ${time}. We’ll contact you shortly.
  `;

  document.getElementById('summaryText').textContent = summaryText;
  document.getElementById('orderForm').classList.add('hidden');
  document.getElementById('summary').classList.remove('hidden');
});
