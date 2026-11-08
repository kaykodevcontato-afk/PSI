# Landing page — Psicóloga Bárbara Rodrigues

Site estático e responsivo, pronto para GitHub Pages. Inclui a fotografia principal e o vídeo da profissional. As outras duas fotos foram removidas a pedido. Sem necessidade de servidor.

## Antes de publicar (IMPORTANTE)

1. Abra **`script.js`**, no topo, e coloque o número de WhatsApp **da psicóloga** em `WHATSAPP: ""`, com código do Brasil e DDD, apenas números. Exemplo de **formato fictício**: `"5587999999999"`. Sem isso, o botão de agendamento mostra um aviso e **não envia mensagem**.
2. Confira a descrição profissional e os serviços. Este modelo **não afirma especialidades, público atendido ou modalidade** sem confirmação da profissional.
3. Em **`index.html`**, no rodapé, altere o endereço de Instagram de `https://www.instagram.com/` para o perfil real do desenvolvedor (ou remova o link).
4. Peça autorização para publicação das fotos e do vídeo, e valide informações profissionais com a psicóloga.

## Como publicar no GitHub Pages

1. Acesse github.com e crie um repositório público, por exemplo `barbara-rodrigues`.
2. Envie o conteúdo **desta pasta** para a raiz do repositório (`index.html`, `style.css`, `script.js`, `assets/`).
3. Em **Settings → Pages**, selecione **Deploy from a branch → main → / (root)** e salve.
4. A URL normalmente será `https://SEU-USUARIO.github.io/barbara-rodrigues/`.

## Onde editar

- **Textos e seções**: `index.html`.
- **Cores**: início do `style.css`, em `:root`.
- **WhatsApp e mensagem padrão**: início do `script.js`, em `CONFIG`.
- **Fotografia principal**: `assets/barbara-retrato.jpg`.
- **Vídeo**: `assets/barbara-video.mp4`.

O vídeo está hospedado nos próprios arquivos do repositório. GitHub Pages serve o arquivo, mas não fornece agenda médica nem pagamento. A consulta é solicitada via WhatsApp, mediante configuração do telefone.


### Logotipo em assinatura

O logotipo `assets/logo-assinatura-barbara-rodrigues.png` é uma assinatura em PNG transparente.
É usado no cabeçalho, na apresentação e no rodapé. Para substituir a assinatura, mantenha o mesmo nome do arquivo.

## Atualização de imagens
As duas fotografias secundárias foram removidas do site e da pasta `assets/`. As seções Sobre e Consultório agora apresentam painéis de texto sem imagens secundárias.

## Vídeo em janela

A seção “Conheça um pouco mais sobre a profissional” mostra uma capa com botão de reprodução. O vídeo abre em uma janela sobre o site, na proporção original e sem recorte. Pode ser fechado pelo botão Fechar, por clique fora do player ou pela tecla Esc; ao fechar, o vídeo é pausado.
