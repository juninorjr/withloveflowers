export const WHATSAPP_NUMBER = "5519981491814";

export const WHATSAPP_MESSAGES = {
  default: "Olá, vim pelo site da WithLoveFlowers e gostaria de fazer um pedido 🌸",
  bouquet: "Olá, vim pelo site da WithLoveFlowers e quero personalizar meu buquê 🌹",
  delivery: "Olá, vim pelo site da WithLoveFlowers e gostaria de saber sobre entrega 🚚",
};

export const getWhatsAppLink = (message?: string) => {
  const msg = message || WHATSAPP_MESSAGES.default;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
};
