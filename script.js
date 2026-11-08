/* =============================================================
   CONFIGURAÇÃO DO SITE — EDITE AQUI
   1) Preencha WHATSAPP com DDI + DDD + número (somente dígitos).
      Exemplo fictício de formato: "5587999999999".
   2) Atualize o link do Instagram do desenvolvedor no index.html.
   3) Fotos e vídeo ficam na pasta assets/.
   ============================================================= */
const CONFIG = {
  WHATSAPP: "", // Número real da profissional; NÃO foi fornecido.
  MENSAGEM: "Olá, Dra. Bárbara! Conheci seu site e gostaria de saber sobre disponibilidade para agendar uma consulta."
};

const nav = document.getElementById('nav');
const toggle = document.getElementById('menu-toggle');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
}));

document.getElementById('year').textContent = new Date().getFullYear();
const btn = document.getElementById('whatsapp-contact');
const note = document.getElementById('contact-info');
const digits = CONFIG.WHATSAPP.replace(/\D/g, '');
if (digits.length >= 12 && digits.length <= 13) {
  btn.href = `https://wa.me/${digits}?text=${encodeURIComponent(CONFIG.MENSAGEM)}`;
} else {
  btn.removeAttribute('target');
  btn.removeAttribute('rel');
  btn.addEventListener('click', e => {
    e.preventDefault();
    note.textContent = 'WhatsApp ainda não configurado. Adicione o número da profissional no arquivo script.js antes de publicar.';
    note.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
