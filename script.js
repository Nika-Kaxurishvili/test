// Load chat messages from localStorage on page load
document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    renderMessages(chatMessages);
  });
  
  function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    
    if (message.trim() !== "") {
      const chatMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
      chatMessages.push(message);
      localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
      
      renderMessages(chatMessages);
  
      messageInput.value = "";
    }
  }
  
  function renderMessages(messages) {
    const chatMessagesContainer = document.getElementById("chatMessages");
    chatMessagesContainer.innerHTML = ""; // Clear the chat messages container
  
    messages.forEach(message => {
      const newMessage = document.createElement("div");
      newMessage.textContent = message;
      chatMessagesContainer.appendChild(newMessage);
    });
  
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight; // Scroll to bottom
  }
  