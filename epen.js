function pay() {
    const name = document.getElementById("name").value;
    const ticketInput = document.getElementById("ticket");
    const tickets = ticketInput.value.split(",").map(ticket => ticket.trim());
    
    if(name && tickets.length > 0) {
      const totalPrice = tickets.length * 15;
      const paymentMessage = `Olá, o meu é ${name}! eu escolhi o(s) nome(s): ${tickets.join(", ")}. O valor total que tenho que pagar é de R$${totalPrice},00. Qual a chave do PIX?`;
      const encodedMessage = encodeURIComponent(paymentMessage);
      const whatsappLink = `https://api.whatsapp.com/send?phone=71999326353&text=${encodedMessage}`;
      window.location.href = whatsappLink;
    } else {
      alert("Por favor, preencha seu nome e insira pelo menos um nome.");
    }
  }
  
