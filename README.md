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

## Vídeo na página (novo estilo)

O vídeo aparece diretamente na seção “Conheça um pouco mais sobre a profissional”, em um player horizontal 16:9, com controles nativos de reprodução, volume, progresso e tela cheia. Não usa modal e não recorta a gravação (`object-fit: contain`). O botão extra de tela cheia depende de JavaScript, mas o próprio vídeo funciona sem ele.

## Vídeo com foto de apresentação
A foto `assets/barbara-retrato.jpg` aparece antes do vídeo. Ao clicar em **Assistir apresentação**, o vídeo `assets/barbara-video.mp4` toca sem cortar. Ao terminar, retorna automaticamente à foto. Também existe a opção **Voltar para a foto ×**.

## Foto compacta e player expansível

Na seção de apresentação, a foto começa em um cartão compacto (largura máxima de 430 px). Ao clicar em **Assistir apresentação**, o cartão expande até 900 px, o vídeo aparece no formato original sem cortes e a página rola até o player. Ao terminar o vídeo ou escolher **Voltar para a foto**, o cartão volta ao tamanho compacto e mostra a imagem novamente.

## Atualização da capa de vídeo
A foto agora aparece sem textos ou ícone de play sobre ela. O botão **Assistir ao vídeo** está abaixo da imagem; também é possível clicar na própria foto. Ao terminar, o vídeo volta para a foto.
