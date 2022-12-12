
# TabNews Google Search

![TabNews Google Search](https://raw.githubusercontent.com/Karytonn/tabnews-google-search/main/src/cover-readme.jpg "Buscas no TabNews")

## Simplificando as buscas no TabNews

Sempre achei o máximo as extensões do Google Chrome, mas nunca tinha encontrado algo especial que me motivasse a desenvolver minha (nossa) própria extensão.

**Esse dia chegou! 🤩**

**TabNews** foi amor à primeira vista, uma plataforma que de fato é feita pela comunidade e para a comunidade, sem distrações, sem segundas intenções e motivadora.

Com certeza desenvolver e manter este espaço não está sendo uma tarefa nada fácil, além disso, devido a grande responsabilidade envolvida é evidente que determinadas features deixem de ser prioridade nessa primeira fase, como é o exemplo do campo de busca.

…e cá entre nós desenvolvedores, a feature de busca é algo simples de se ver em produção, mas sem sombra de dúvidas complexo e custoso de se implementar.

Entendendo esses fatores e observando os usuários clamando por tal funcionalidade, com base na sugestão do [jjeanjacques10](https://www.tabnews.com.br/jjeanjacques10), decide simplificar ainda mais criando uma **[extensão para o Google Chrome](https://chrome.google.com/webstore/detail/tabnews-google-search/mdmnecmcjnlonddbfdhmgcfaggbpdgah)**, que espero eu, seja útil até o que o recurso oficial seja lançado.

⚠️ **[ATUALIZAÇÃO]**
Apos solicitado, foi lançado também uma [versão para o navegador Firefox🦊](https://addons.mozilla.org/pt-BR/firefox/addon/tabnews-google-search/)


Como funciona?  Basicamente a extensão pega o termo da busca que o usuário fornece e cria uma URL de pesquisa parametrizada, possibilitando assim que o Google faça a busca específica dentro do site www.tabnews.com.br

### Para utilizar é super simples, basta seguir os passos abaixo:

- Instalar a extensão por meio deste link:
    - **Google Chrome** [TabNews Google Search](https://chrome.google.com/webstore/detail/tabnews-google-search/mdmnecmcjnlonddbfdhmgcfaggbpdgah)
    - **Firefox** [TabNews Google Search](https://addons.mozilla.org/pt-BR/firefox/addon/tabnews-google-search/)
- Clique no menu de extensões na parte superior direita do seu navegador, busque pela extensão **"TabNews Google Search"** e marque-a para que sempre apareça na barra de extensões.
- Agora é só clicar no ícone da extensão, adicionar um termo de busca e apertar enter. Você ainda pode utilizar o atalho `Ctrl + Shift + P` para abrir a extensão de uma forma mais ágil.

> *Obs.: A proposta da extensão é somente simplificar as buscas no TabNews, portanto nenhum dado é coletado, nem mesmo para analytics.*

O código fonte é bem simples, e se você tem interesse em contribuir melhorando a extensão, sinta-se convidado a deixar seu pitaco lá no GitHub.

[Repositório do projeto](https://github.com/Karytonn/tabnews-google-search)

E a propósito, parabéns a todos que contribuíram para o desenvolvimento desse espaço super construtivo, vida longa e próspera a todos! 👏🏻💯🖖🏼

---
#OFF TOPIC
--- 

😄 Aproveitando o espaço, vou vender meu peixe 🐟

Sou Analista de Sistemas, Desenvolvedor Web, Design Gráfico, Técnico em Eletrônica e Informática, propagador de tecnologias e adepto ao Lifelong Learning.

Atualmente trabalho como freelancer levando tecnologia a pequenos e médios negócios, entregando soluções que agreguem valor e gere resultados qualitativos.

Acessando [meu site](https://karytonn.dev) você pode conferir os principais serviços que ofereço e também uma infinidade de formas de entrar em contato comigo.

---

## Roadmap de atualização

### Fix
- [x] Substituir atalho por `Ctrl + Shift + P`
- [x] Remover flag 'Conteúdo para adulto'
- [x] Adicionar novo método de encode para evitar a exclusão de caracteres fora do conjunto ASCII, como por exemplo `#` (Erro reportado pelo usuário `Ghizzi` 💯)
- [ ] Add auto close na versão para Firefox

### Plataformas/Navegadores
- [x] Chrome
- [x] Firefox
- [ ] Safari

### Features em avaliação
- [ ] Listar buscas dentro da extensão
- [ ] Salvar post
- [ ] Compartilhar post nas principais redes. ex.: Twitter, WhatsApp, Telegram, E-mail

*Tem alguma sugestão, deixe aqui nos comentários...*

---


### Update v0.0.2 ❌

> 🇺🇸 Violation: Requesting but not using the following permission(s): scripting

> 🇧🇷 Violação: solicitar, más não usar, as seguintes permissões: scripting

### Update v0.0.3 ✅
- Substituição do atalho por outro com maior compatibilidade;
    - `Ctrl + Shift + P`
- Remoção da flag `Conteúdo para adulto` que anteriormente foi definida de forma equivocada;
- Remoção de solicitação de permissões não utilizada

### Update v.0.0.4 ✅
- Adição de novo método de encode para evitar a exclusão de caracteres fora do conjunto ASCII, como por exemplo `#`.
- Liberado [versão para Firefox🦊](https://addons.mozilla.org/pt-BR/firefox/addon/tabnews-google-search/)


### Notas de experiência:

- O processo de submissão para atualização de uma extensão no Google Chrome é bastante minucioso, por conta disso, mesmo para pequenas atualizações, como por exemplo atualização da descrição, o processo tem levado até 24h para análise e liberação.

- O JavaScript executado na própria extensão não requer permissões específicas.

- Google Chrome cobra uma taxa de $5 para se registrar como desenvolvedor, Firefox até o momento não teve nenhum custo

- No Chrome não consigo editar dados de descrição e outras características do gênero sem submeter a uma nova revisão, no Firefox é possível atualizar essas informações sem revisão.

- Firefox não tem compatibilidade com a V3 do Manifest, sendo necessário utilizar a V2 para ambos os navegadores ou suas respectivas versões mais altas com compatibilidade, neste último caso sendo necessário adequar cada uma às suas características.

- Mesmo para extensões que não coletam dados de seus usuários, o Chrome exige uma página externa detalhando suas políticas de privacidade, já no Firefox isso se restringe às extensões que fazem algum tipo de coleta de dados.

- **Detalhes completos estarão em um futuro artigo onde irei detalhar todo o processo de desenvolvimento e publicação.**

## Quer contribuir melhorando a extensão?

Sinta-se convidado a fazer um pull request que o mais rápido possível vou analisar e aplicar as melhorias.
 
***Antes de qualquer sugestão, esteja ciente sobre as diretrizes do Google quanto a utilização de recursos específicos dentro de extensões.***

### Execute o projeto localmente
 
1 - Instale as dependências:
 
```bash
npm install
````
 
2 - Como utilizamos Tailwind para a estilização, após qualquer edição do arquivo `index.html` utilize o comando abaixo para gerar novos estilos.
 
```bash
npm run dev
````
    
3 - Pronto, agora você pode abrir o arquivo `index.html` utilizando um Live Server de sua preferência.

## 🙏🏼 Feedback

Se você tiver algum feedback, por favor me deixe saber por meio de contato@karytonn.dev


## 🚀 Sobre mim
Analista de Sistemas, Desenvolvedor Web, Design Gráfico, Técnico em Eletrônica e Informática, propagador de tecnologias e adepto ao Lifelong Learning.

Meu propósito profissional é levar tecnologia a pequenos e médios negócio, entregando soluções que agregue valor e gere resultados qualitativos.

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://karytonn.dev/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/karytonn/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/karytonn/)