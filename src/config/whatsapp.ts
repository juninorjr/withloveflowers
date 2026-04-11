export const WHATSAPP_NUMBER = "5519981491814";
export const WHATSAPP_DEFAULT_MESSAGE = "Olá! Gostaria de fazer um pedido de flores.";

export const getWhatsAppLink = (message?: string) => {
  const msg = message || WHATSAPP_DEFAULT_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
