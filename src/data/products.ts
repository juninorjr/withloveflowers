// Catálogo central de produtos.
// O `id` é interno (nunca exibido ao usuário) e serve para:
// - controle/identificação do produto
// - atualização de preços em lote
// - lógica do carrinho (chave estável)
//
// O usuário enxerga apenas: nome, preço e imagem.

import produto4 from "@/assets/produto-4.jpg";
import produto5 from "@/assets/produto-5.jpg";
import produto6 from "@/assets/produto-6.jpg";
import produto7 from "@/assets/produto-7.jpg";
import produto8 from "@/assets/produto-8.jpg";
import produto9 from "@/assets/produto-9.jpg";
import produto10 from "@/assets/produto-10.webp";
import produto11 from "@/assets/produto-11.jpg";
import produto12 from "@/assets/produto-12.jpg";
import produto13 from "@/assets/produto-13.jpg";
import produto14 from "@/assets/produto-14.jpg";
import produto15 from "@/assets/produto-15.jpg";

// Resolve automática de imagens por ID.
// Cada arquivo em src/assets/products/<id>.<ext> é vinculado ao produto cujo `id` bate com o nome do arquivo.
// Para adicionar um novo produto: salvar a imagem como `src/assets/products/<id>.png` (ou .jpg/.webp).
const productImageModules = import.meta.glob(
  "@/assets/products/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
) as Record<string, string>;

const productImagesById: Record<string, string> = Object.fromEntries(
  Object.entries(productImageModules).map(([path, url]) => {
    const fileName = path.split("/").pop() ?? "";
    const id = fileName.replace(/\.[^.]+$/, "");
    return [id, url];
  })
);

export function getProductImage(id: string): string {
  const img = productImagesById[id];
  if (!img) {
    console.warn(`[products] Imagem não encontrada para id "${id}". Adicione src/assets/products/${id}.png`);
    return "";
  }
  return img;
}

export interface Product {
  id: string;          // interno — nunca renderizar
  nome: string;        // visível
  preco: string;       // visível (string formatada para exibição)
  imagem: string;      // visível
}

export const PRODUCTS = {
  // Botão Solitário — imagem resolvida automaticamente pelo id (src/assets/products/<id>.<ext>)
  ROSA_COLOMBIANA: { id: "rosa_colombiana", nome: "Rosa Colombiana", preco: "R$21,00", imagem: getProductImage("rosa_colombiana") },
  GIRASSOL:        { id: "girassol",        nome: "Girassol",        preco: "R$17,00", imagem: getProductImage("girassol") },
  ROSA_NACIONAL:   { id: "rosa_nacional",   nome: "Rosa Nacional",   preco: "R$15,00", imagem: getProductImage("rosa_nacional") },

  // Buquês (catálogo)
  BUQUE_GIRASSOIS_ROSAS:        { id: "buq-001", nome: "Buquê de Girassóis e Rosas Vermelhas",                   preco: "A partir de R$ 65,00",  imagem: produto4 },
  BUQUE_ROSAS_CHUVA_PRATA:      { id: "buq-002", nome: "Buquê de Rosas Vermelhas com Chuva-de-Prata",            preco: "A partir de R$ 100,00", imagem: produto5 },
  BUQUE_ROSAS_MARGARIDAS:       { id: "buq-003", nome: "Buquê de Rosas Vermelhas e Margaridas",                  preco: "A partir de R$ 150,00", imagem: produto6 },
  BUQUE_GRANDE_GIRASSOIS:       { id: "buq-004", nome: "Buquê Grande de Girassóis, Rosas e Flores do Campo",     preco: "A partir de R$ 415,00", imagem: produto7 },
  BUQUE_MEDIO_LIRIOS:           { id: "buq-005", nome: "Buquê Médio de Lírios Cor-de-Rosa e Girassóis",          preco: "A partir de R$ 200,00", imagem: produto8 },
  BUQUE_PEQUENO_LIRIOS:         { id: "buq-006", nome: "Buquê Pequeno de Lírios Brancos e Margaridas Pink",      preco: "A partir de R$ 90,00",  imagem: produto9 },
  MINIBUQUE_GIRASSOL:           { id: "buq-007", nome: "Minibuquê de Girassol e Crisântemos Coloridos",          preco: "A partir de R$ 50,00",  imagem: produto10 },

  // Variantes "promo" do Index (mesmas imagens, preços ligeiramente diferentes)
  PROMO_BUQUE_GIRASSOIS_ROSAS:   { id: "pro-001", nome: "Buquê de Girassóis e Rosas Vermelhas",                  preco: "A partir de R$65,00",  imagem: produto4 },
  PROMO_BUQUE_ROSAS_CHUVA:       { id: "pro-002", nome: "Buquê de Rosas Vermelhas com Chuva-de-Prata",           preco: "A partir de R$100,00", imagem: produto5 },
  PROMO_BUQUE_ROSAS_MARGARIDAS:  { id: "pro-003", nome: "Buquê de Rosas Vermelhas e Margaridas",                 preco: "A partir de R$150,00", imagem: produto6 },
  PROMO_BUQUE_GRANDE:            { id: "pro-004", nome: "Buquê Grande de Girassóis, Rosas e Flores do Campo",    preco: "A partir de R$415,00", imagem: produto7 },
  PROMO_BUQUE_MEDIO:             { id: "pro-005", nome: "Buquê Médio de Lírios Cor-de-Rosa e Girassóis",         preco: "A partir de R$200,00", imagem: produto8 },
  PROMO_BUQUE_PEQUENO:           { id: "pro-006", nome: "Buquê Pequeno de Lírios Brancos e Margaridas Pink",     preco: "A partir de R$90,00",  imagem: produto9 },
  PROMO_MINIBUQUE:               { id: "pro-007", nome: "Minibuquê de Girassol e Crisântemos Coloridos",         preco: "A partir de R$50,00",  imagem: produto10 },

  // Diversos (catálogo)
  DIV_ROMANTICO:        { id: "div-001", nome: "Buquê Romântico de Rosas e Astromélias",  preco: "A partir de R$ 75,00",  imagem: produto11 },
  DIV_DELICADO_CAMPO:   { id: "div-002", nome: "Buquê Delicado de Flores do Campo",       preco: "A partir de R$ 60,00",  imagem: produto12 },
  DIV_GERBERAS:         { id: "div-003", nome: "Buquê Especial de Gérberas Coloridas",    preco: "A partir de R$ 85,00",  imagem: produto13 },
  DIV_LIRIOS_ROSAS:     { id: "div-004", nome: "Buquê Sofisticado de Lírios e Rosas",     preco: "A partir de R$ 120,00", imagem: produto14 },
  DIV_MARGARIDAS_CRAVOS:{ id: "div-005", nome: "Buquê Encantado de Margaridas e Cravos",  preco: "A partir de R$ 70,00",  imagem: produto15 },

  // Presentes (Index)
  PRES_LUMINARIA_VERMELHA: { id: "pre-001", nome: "Luminária da Paixão Vermelha",                              preco: "R$ 95,00",  imagem: produto11 },
  PRES_LUMINARIA_BRANCA:   { id: "pre-002", nome: "Luminária da Paixão Branca",                                preco: "R$ 95,00",  imagem: produto12 },
  PRES_CORACAO_FERRERO:    { id: "pre-003", nome: "Coração Gourmet com Ferrero Rocher",                        preco: "R$ 120,00", imagem: produto13 },
  PRES_BOX_BRANCA:         { id: "pre-004", nome: "Box Branca - Rosas e Gaveta de Bombons",                    preco: "R$ 100,00", imagem: produto14 },
  PRES_BOX_BLACK:          { id: "pre-005", nome: "Box Black Personalizada com Foto, Rosas e Ferrero Rocher",  preco: "R$ 120,00", imagem: produto15 },
} as const satisfies Record<string, Product>;

export type ProductKey = keyof typeof PRODUCTS;

export function parsePrice(label: string): number {
  const match = label.replace(/[^\d,.]/g, "").replace(",", ".");
  return parseFloat(match) || 0;
}
