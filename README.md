# Angelo & Thiago - Site de Portfólio Profissional

## 📋 Descrição

Site responsivo desenvolvido com HTML5, CSS3 e JavaScript puro, utilizando Bootstrap 5 para componentes e grid. Design moderno com foco em UX/UI, otimizado para desktop e mobile.

## 🎯 Funcionalidades

- ✅ **Navegação Responsiva** - Menu mobile e desktop com smooth scroll
- ✅ **Seções Completas** - Home, Quem Somos, Releases, Portfólio, Contato
- ✅ **Formulário de Contato** - Validação em tempo real com feedback visual
- ✅ **Design Responsivo** - Mobile-first com breakpoints para todos os dispositivos
- ✅ **Animações Suaves** - Transições e efeitos com performance otimizada
- ✅ **Integração Social** - Links para Instagram, Spotify, YouTube e WhatsApp
- ✅ **Acessibilidade** - Semântica HTML correta e suporte a modo de contraste reduzido
- ✅ **Performance** - Código otimizado com lazy loading preparado
- ✅ **Dark Mode Ready** - Estrutura pronta para implementação

## 📁 Estrutura de Arquivos

```
angelo e thiago projeto/
├── index.html                 # Página principal
├── assets/
│   ├── css/
│   │   └── style.css         # Estilos customizados
│   ├── js/
│   │   └── main.js           # Funcionalidades JavaScript
│   └── images/               # Pasta para imagens
├── README.md                 # Este arquivo
└── .gitignore               # (Opcional) Git ignore
```

## 🚀 Como Usar

### 1. Abrir o Site
```bash
# Abra o arquivo index.html em um navegador moderno
# Ou use um servidor local (recomendado)

# Com Python 3:
python -m http.server 8000

# Com Node.js (http-server):
npm install -g http-server
http-server

# Com PHP:
php -S localhost:8000
```

### 2. Personalizar Conteúdo
Edite o arquivo `index.html` e substitua:
- Textos nas seções
- Links dos botões (WhatsApp, email, etc)
- Descrições de projetos no portfólio
- Dados de contato

### 3. Adicionar Imagens
Coloque suas imagens na pasta `assets/images/` e referencie com:
```html
<img src="assets/images/sua-imagem.jpg" alt="Descrição">
```

## 🎨 Customização de Cores

Edite as variáveis CSS no arquivo `assets/css/style.css`:

```css
:root {
    --primary-color: #007bff;      /* Cor principal */
    --secondary-color: #6c757d;    /* Cor secundária */
    --dark-color: #343a40;         /* Cor escura */
    --light-color: #f8f9fa;        /* Cor clara */
}
```

## 📱 Breakpoints Responsivos

```
Extra Small (xs): < 576px    (Mobile)
Small (sm):       576px+     (Mobile grande)
Medium (md):      768px+     (Tablet)
Large (lg):       992px+     (Desktop pequeno)
Extra Large (xl): 1200px+    (Desktop)
```

## 🔧 Integração com Backend (Opcional)

Para ativar o envio de emails do formulário, você pode:

### Opção 1: FormSubmit.co (Gratuito)
```javascript
// Alterar a tag form em index.html:
<form action="https://formsubmit.co/seu-email@example.com" method="POST">
```

### Opção 2: API Customizada
Integre com seu backend usando `fetch()` em `assets/js/main.js`:
```javascript
async submitForm() {
    const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}
```

## 📊 SEO

O site inclui:
- ✅ Meta tags semânticas
- ✅ Heading hierarchy correto
- ✅ Alt text em imagens
- ✅ Schema.org markup preparado
- ✅ Mobile-friendly design

Para melhorar:
1. Adicione `sitemap.xml`
2. Crie `robots.txt`
3. Configure Google Search Console
4. Implemente Schema Markup JSON-LD

## ♿ Acessibilidade

O site segue WCAG 2.1 AA com:
- Contraste de cores adequado
- Navegação por teclado completa
- ARIA labels onde necessário
- Redução de movimento respeitada
- Links descritivos

## 🚀 Deploy

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/seu-repo.git
git branch -M main
git push -u origin main
```

Habilite GitHub Pages nas configurações do repositório.

### Netlify
Conecte seu repositório GitHub e deploy automático será ativado.

### Vercel
```bash
npm install -g vercel
vercel
```

## 📦 Dependências

- Bootstrap 5.3.0 (via CDN)
- Font Awesome 6.4.0 (via CDN)
- Google Fonts (via CDN)
- Sem dependências Node.js obrigatórias!

## 🔐 Segurança

- Validação de formulário no frontend
- Sanitização de inputs
- Content Security Policy preparada
- Proteção contra XSS

## 📈 Performance

Métricas esperadas:
- Lighthouse Score: 90+
- Page Speed: < 2 segundos
- Tamanho: < 500KB

## 🐛 Troubleshooting

### Navegação não funciona
- Certifique-se de usar um servidor local
- Verifique se os IDs das seções estão corretos

### Formulário não envia
- Implemente um backend ou FormSubmit.co
- Verifique o console do navegador para erros

### Imagens não carregam
- Verifique os caminhos dos arquivos
- Use caminhos relativos: `assets/images/...`

## 📝 Licença

Este projeto é livre para uso pessoal e comercial.

## 📞 Suporte

Para dúvidas ou melhorias, entre em contato através do formulário ou:
- WhatsApp: (11) 99609-5932
- Email: contato@angeloethiago.com

---

**Desenvolvido com ❤️ para Angelo & Thiago**
# Agelo-e-Thiago-site
