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
  ROSA_COLOMBIANA: { id: "rosa_colombiana", nome: "Rosa Colombiana", preco: "R$30,00", imagem: getProductImage("rosa_colombiana") },
  GIRASSOL:        { id: "girassol",        nome: "Girassol",        preco: "R$25,00", imagem: getProductImage("girassol") },
  ROSA_NACIONAL:   { id: "rosa_nacional",   nome: "Rosa Nacional",   preco: "R$25,00", imagem: getProductImage("rosa_nacional") },

  // Buquês (catálogo) — imagem resolvida automaticamente pelo id (src/assets/products/<id>.<ext>)
  BUQUE_ROSA_GYPSO:        { id: "rosa_gypso",         nome: "Buquê de Rosas Colombianas e Gypso",         preco: "R$500,00", imagem: getProductImage("rosa_gypso") },
  BUQUE_3ROSAS_3GIRASSOIS: { id: "3rosas_3girassois",  nome: "Buquê de Rosas e Girassóis",                 preco: "R$110,00", imagem: getProductImage("3rosas_3girassois") },
  BUQUE_2ROSAS_MIX_P:      { id: "2rosas_mix_P",       nome: "Buquê Mix de Flores e Duas Rosas - TAM: P",  preco: "R$75,00", imagem: getProductImage("2rosas_mix_P") },
  BUQUE_7ROSAS_5GIRASSOIS: { id: "7rosas_5girasois",   nome: "Buquê de Rosas e Girassóis",                 preco: "R$180,00", imagem: getProductImage("7rosas_5girasois") },
  BUQUE_2ROSAS_MIX_MINI:   { id: "2rosas_mix_mini",    nome: "Buquê Mix de Flores e Duas Rosas - TAM: P", preco: "R$75,00", imagem: getProductImage("2rosas_mix_mini") },
  BUQUE_PINK_MIX_MINI:     { id: "pink_mix_mini",      nome: "Buquê Mix de Flores\nTAM: P ",              preco: "R$145,00", imagem: getProductImage("pink_mix_mini") },
  BUQUE_ROSAS_ASTER:       { id: "rosas_aster",        nome: "Buquê de Rosas com Aster Mariana",        preco: "R$300,00", imagem: getProductImage("rosas_aster") },

  // Variantes "promo" do Index (mesmas imagens, preços ligeiramente diferentes)
  PROMO_BUQUE_GIRASSOIS_ROSAS:   { id: "pro-001", nome: "Buquê de Girassóis e Rosas Vermelhas",                  preco: "A partir de R$65,00",  imagem: produto4 },
  PROMO_BUQUE_ROSAS_CHUVA:       { id: "pro-002", nome: "Buquê de Rosas Vermelhas com Chuva-de-Prata",           preco: "A partir de R$100,00", imagem: produto5 },
  PROMO_BUQUE_ROSAS_MARGARIDAS:  { id: "pro-003", nome: "Buquê de Rosas Vermelhas e Margaridas",                 preco: "A partir de R$150,00", imagem: produto6 },
  PROMO_BUQUE_GRANDE:            { id: "pro-004", nome: "Buquê Grande de Girassóis, Rosas e Flores do Campo",    preco: "A partir de R$415,00", imagem: produto7 },
  PROMO_BUQUE_MEDIO:             { id: "pro-005", nome: "Buquê Médio de Lírios Cor-de-Rosa e Girassóis",         preco: "A partir de R$200,00", imagem: produto8 },
  PROMO_BUQUE_PEQUENO:           { id: "pro-006", nome: "Buquê Pequeno de Lírios Brancos e Margaridas Pink",     preco: "A partir de R$90,00",  imagem: produto9 },
  PROMO_MINIBUQUE:               { id: "pro-007", nome: "Minibuquê de Girassol e Crisântemos Coloridos",         preco: "A partir de R$50,00",  imagem: produto10 },

  // Diversos (catálogo) — imagem resolvida automaticamente pelo id (src/assets/products/<id>.<ext>)
  DIV_VERMELHO_MIX_MINI:      { id: "vermelho_mix_mini",      nome: "Buquê Mix de Flores Vermelhas - TAM: Mini",       preco: "R$295,00", imagem: getProductImage("vermelho_mix_mini") },
  DIV_LIRIO_MIX_MINI:         { id: "lirio_mix_mini",         nome: "Buquê Mix de Flores com Lírio - TAM: Mini",       preco: "R$75,00", imagem: getProductImage("lirio_mix_mini") },
  DIV_LIRIO_ROSA_MIX_M:       { id: "lirio_rosa_mix_m",       nome: "Buquê Mix de Flores Rosas - TAM: M",              preco: "R$75,00", imagem: getProductImage("lirio_rosa_mix_m") },
  DIV_GIRASSOL_MIX_MINI:      { id: "girassol_mix_mini",      nome: "Buquê Mix de Flores com Girassol - TAM: Mini",    preco: "R$75,00", imagem: getProductImage("girassol_mix_mini") },
  DIV_2LIRIOS_GIRASSOL_MIX_M: { id: "2lirios_girassol_mix_m", nome: "Buquê Mix de Flores com Girassol e Lírio - TAM: M", preco: "R$75,00", imagem: getProductImage("2lirios_girassol_mix_m") },
  DIV_2LIRIOS_VERMELHO_MIX_P: { id: "2lirios_vermelho_mix_p", nome: "Buquê Mix de Flores com Lírios Vermelhos - TAM: P", preco: "R$145,00", imagem: getProductImage("2lirios_vermelho_mix_p") },
  DIV_MIX_GIRASSOL_GERBERA:   { id: "mix_girassol_gerbera",   nome: "Buquê Mix de Flores com Gérbera e Girassol",     preco: "R$145,00", imagem: getProductImage("mix_girassol_gerbera") },
  DIV_LIRIO_GIRASSOL_MIX_P:   { id: "lirio_girassol_mix_p",   nome: "Buquê Mix de Flores com Girassol e Lírios - TAM: P", preco: "R$75,00", imagem: getProductImage("lirio_girassol_mix_p") },
  DIV_LIRIO_PINK_MIX_P:       { id: "lirio_pink_mix_p",       nome: "Buquê Mix de Flores - TAM: P",                    preco: "R$75,00", imagem: getProductImage("lirio_pink_mix_p") },
  DIV_MIX_M:                  { id: "mix_m",                  nome: "Buquê Mix de Flores - TAM: M",                    preco: "R$145,00", imagem: getProductImage("mix_m") },
  DIV_3LIRIOS_MIX_G:          { id: "3lirios_mix_g",          nome: "Buquê Mix de Flores com 3 Lírios - TAM: G",       preco: "R$295,00", imagem: getProductImage("3lirios_mix_g") },
  DIV_LIRIO_VERMELHO_MIX_P:   { id: "lirio_vermelho_mix_p",   nome: "Buquê Mix de Flores com Lírios Vermelhos - TAM: P", preco: "R$75,00", imagem: getProductImage("lirio_vermelho_mix_p") },
  DIV_LIRIO_BRANCO_MIX_M:     { id: "lirio_branco_mix_m",     nome: "Buquê Mix de Flores com Lírios Brancos - TAM: M", preco: "R$75,00", imagem: getProductImage("lirio_branco_mix_m") },

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
