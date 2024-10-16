### ds_20242_g1
Repositório definido para a manutenção do controle de versão dos artefatos do projeto de do Grupo 1, da Disciplina de Modelagem de Software, no semestre 2024-2.

### Nome do Projeto:
SAGRES

### Descrição:
A Escola de Sagres foi um centro de navegação e conhecimento no século XV, que impulsionou as grandes descobertas marítimas portuguesas. Inspirado por esse legado, o aplicativo Sagres conecta alunos para compartilhar conhecimento.

### Problema
A dificuldade de comparecer às monitorias organizadas pela universidade pode ser um empecilho para estudantes de baixo rendimento.

### Objetivos da Solução
Sistema que possibilita a conexão entre estudantes da UFG, através de cadastro com e-mail institucional, para a “contratação” de aulas particulares sobre determinadas matérias ou conteúdos específico;
Qualquer aluno pode ensinar;
As aulas podem ser dadas em qualquer hora e dia, pois o monitor quem monta seu horário;
A plataforma pode ser acessada de qualquer lugar.

### Grupo
Este projeto será desenvolvido pelos componentes do grupo 1:

|Matrícula|Nome|Usuário Git|
|---|---|---|
|202403059|ANA LUISA SILVA GONÇALVES|[AnaLuisa1016](https://github.com/AnaLuisa1016>)|
|202403072|GABRIEL RODRIGUES DA SILVA |[GGabrielRodrigues](https://github.com/GGabrielRodrigues)|
|202406173|JÚLIA DE SOUZA NASCIMENTO|[jusouzn](https://github.com/jusouzn)|
|202206158|LEANY SILVA FIGUEREDO|[anny.fsilva](https://github.com/anny.fsilva)|
|202403096|VERÔNICA RIBEIRO OLIVEIRA PALMEIRA|[Veronicapalmeira](https://github.com/Veronicapalmeira)|

### Backlog do Produto

1. RF001 - Cadastro dos alunos utilizando o email institucional, curso e o período que cursa, foto de perfil e a criação de nome de usuário, senha e escolha do tipo de usuário:monitor ou aluno.
2. RF002 - Cadastro dos cursos e das matérias que serão disponibilizadas para monitoria.
3. RF003 - Barra de pesquisa para encontrar monitores ou a matéria que se pretende agendar uma aula.
4. RF004 - Calendário interativo que permite ao aluno escolher o dia da monitoria com determinado monitor, e ao monitor, cadastrar os horários nos dias e das matérias que disponibilizará a monitoria. 
5. RF005 - Sistema de rankeamento, com base na avaliação dos alunos, para os monitores.
6. RF006 - Chat entre monitor e aluno. 
7. RF007 - Cadastramento de informações bancárias para pagamento com cartão de crédito ou pix das taxas das monitorias. 
8. RF008 - Geração de relatórios mensais para os monitores: análise de procure pelos seu perfil, quantas aulas foram dadas, quanto recebeu por elas e a média de classificação.

### Requisitos Não Funcionais

1. RNF001 - Usabilidade: deve haver facilidade no uso .
2. RNF002 - Usabilidade: mascara de validação nos campos de CPF, email. .
3. RNF003 - Segurança: Criptografia dos dados bancários e da senha antes de serem armazenadas no banco de dados.
4. RNF004 - Desempenho: <Descrição do Requisito não Funcional>..
5. RNF005 - Confiabilidade: <Descrição do Requisito não Funcional>.
6. RNF006 - Manutenibilidade: <Descrição do Requisito não Funcional>.
7. RNF007 - Portabilidade: <Descrição do Requisito não Funcional>.
8. RNF008 - Conectividade: <Descrição do Requisito não Funcional>.

### Regras de Negócio
1. RN01 - Apenas monitores podem cadastrar aulas no calendários e editá-las.
2. RN02 - As informações bancárias dos usuários não podem estar disponíveis para outros usuários.
3. RN03 - O pagamento só irá ocorrer após a realização da monitoria.
4. RN04 - Cadastro será concluído apenas quando usado o email institucional e todas as informações de login corretas..
5. RN05 -

### Modelo Arquitetural
<Apresentar uma descrição sucinta do modelo arquitetural do Produto.>

### Modelo de Interfaces Gráficas
<Apresentar uma descrição sucinta do modelo de interfaces gráficas do Produto.>

### Tecnologia de Persistência de Dados
<Apresentar uma descrição sucinta do modelo de persistência do Produto.>

### Local do _Deploy_
a definir

### Cronograma de Desenvolvimento

|Iteração|Descrição|Data Início|Data Fim|Responsável|Situação|
|---|---|---|---|---|---|
|1|Concepção|27/08/2024|03/09/2024|Grupo 1|Concluída|
|1|Preparação|03/09/2024|10/09/2024|Grupo 1|Concluída|
|1|Item do backlog 1 |10/09/2024|17/09/2024|Grupo 1|Programada|
|2|Item(ns) do backlog 1 |17/09/2024|01/10/2024|Grupo 1|Programada|
|3|Item(ns) do backlog 1 e 2|01/10/2024|15/10/2024|Grupo 1|Programada|
|4|Item(ns) do backlog 3 e 4 |15/10/2024|29/10/2024|Grupo 1|Programada|
|5|Item do backlog 5 |29/10/2024|19/12/2024|Grupo 1|Programada|
|6|Apresentação do Projeto|19/12/2024|26/12/2024|Grupo 1|Programada|

### Iterações x Atividades
|Iteração|Tarefa|Data Início|Data Fim|Responsável|Situação|
|---|---|---|---|---|---|
|1|Definição do grupo de trabalho|01/09/2024|03/09/2024|Grupo 1|Concluída|
|1|Definição do Tema do Trabalho|01/09/2024|03/09/2024|Grupo 1|Concluída|
|2|Definição do Backlog do produto|03/09/2024|10/09/2024|Grupo 1|Concluída|
|2|Descrição dos itens do backlog do produto|03/09/2024|10/09/2024|Grupo 1|Concluída|
|1|Distribuição dos itens do backlog entre as iterações|03/09/2024|10/09/2024|Grupo 1|Concluída|
|1|Especificação de estórias de usuários dos Item(ns) do backlog <x,y,z>|13/09/2024|24/19/2024||Concluída|
|3|Diagrama de classes dos Item(ns) do backlog <x,y,z>|28/09/2024|11/10/2024||Programada|
|3|Diagrama de interação/sequencia dos itens do backlog <x,y,z>|28/09/2024|11/10/2024||Programada|
|3|Projeto de Interfaces gráficas dos itens do backlog <x,y,z>|28/09/2024|11/10/2024||Programada|
|3|Projeto de persistência dos itens do backlog <x,y,z>|28/09/2024|11/10/2024||Programada|
|3|Implementação dos itens do backlog <x,y,z>*|28/09/2024|11/10/2024||Programada|
|4|Especificação de estórias de usuários dos Item(ns) do backlog <x,y,z>|12/10/2024|25/10/2024||Programada|
|4|Diagrama de classes dos Item(ns) do backlog <x,y,z>|12/10/2024|25/10/2024||Programada|
|4|Diagrama de interação/sequencia dos itens do backlog <x,y,z>|12/10/2024|25/10/2024||Programada|
|4|Projeto de Interfaces gráficas dos itens do backlog <x,y,z>|12/10/2024|25/10/2024||Programada|
|4|Projeto de persistência dos itens do backlog <x,y,z>|12/10/2024|25/10/2024||Programada|
|4|Implementação dos itens do backlog <x,y,z>*|12/10/2024|25/10/2024||Programada|
|5|Especificação de estórias de usuários dos Item(ns) do backlog <x,y,z>|26/10/2024|08/11/2024||Programada|
|5|Diagrama de classes dos Item(ns) do backlog <x,y,z>|26/10/2024|08/11/2024||Programada|
|5|Diagrama de interação/sequencia dos itens do backlog <x,y,z>|26/10/2024|08/11/2024||Programada|
|5|Projeto de Interfaces gráficas dos itens do backlog <x,y,z>|26/10/2024|08/11/2024||Programada|
|5|Projeto de persistência dos itens do backlog <x,y,z>|26/10/2024|08/11/2024||Programada|
|5|Implementação dos itens do backlog <x,y,z>*|26/10/2024|08/11/2024||Programada|
|6|Especificação de estórias de usuários dos Item(ns) do backlog <x,y,z>|09/11/2024|22/11/2024||Programada|
|6|Diagrama de classes dos Item(ns) do backlog <x,y,z>|09/11/2024|22/11/2024||Programada|
|6|Diagrama de interação/sequencia dos itens do backlog <x,y,z>|09/11/2024|22/11/2024||Programada|
|6|Projeto de Interfaces gráficas dos itens do backlog <x,y,z>|09/11/2024|22/11/2024||Programada|
|6|Projeto de persistência dos itens do backlog <x,y,z>|09/11/2024|22/11/2024||Programada|
|6|Implementação dos itens do backlog <x,y,z>*|09/11/2024|22/11/2024||Programada|
|7|Especificação de estórias de usuários dos Item(ns) do backlog <x,y,z>|23/11/2024|06/12/2024||Programada|
|7|Diagrama de classes dos Item(ns) do backlog <x,y,z>|23/11/2024|06/12/2024||Programada|
|7|Diagrama de interação/sequencia dos itens do backlog <x,y,z>|23/11/2024|06/12/2024||Programada|
|7|Projeto de Interfaces gráficas dos itens do backlog <x,y,z>|23/11/2024|06/12/2024||Programada|
|7|Projeto de persistência dos itens do backlog <x,y,z>|23/11/2024|06/12/2024||Programada|
|7|Implementação dos itens do backlog <x,y,z>*|23/11/2024|06/12/2024||Programada|
|6|Apresentação do Projeto|19/12/2024|26/12/2024|Grupo|Programada|

* Implementação se aplicará, se os itens da iteração em andamento, forem eleitos para validação do projeto do trabalho.
