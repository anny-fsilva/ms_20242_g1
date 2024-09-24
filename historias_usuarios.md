

## **História de Usuário**

### **ID:**  
HU-001

### **Título:**  
Cadastro de usuários com e-mail institucional

### **Descrição:**  
Como **usuário cadastrado**, eu quero **poder me cadastrar utilizando meu e-mail institucional** para que **minha conta esteja vinculada a instituição e possa acessar o sistema**.

### **Critérios de Aceitação:**
#### Cenário 1: Cadastro de usuário 
- **Dado** que o usuário está na página de cadastro,
- **Quando** o usuário insere seu nome completo, e-mail institucional e senha,
- **E** aperta o botão de “cadastrar”,
- **Então** então o sistema deve criar a conta para o usuário.

#### Cenário 2: Validação de e-mail
- **Dado** que o usuário está na página de cadastro,
- **Quando** o usuário insere um e-mail institucional que não é institucional,
- **E** aperta o botão de cadastrar,
- **Então** então o sistema deve exibir uma mensagem de erro informando que apenas e-mails institucionais são permitidos.

#### Cenário 3: Cadastro bem-sucedido
- **Dado** que o usuário preencheu todos os campos corretamente,
- **Quando** o usuário aperta o botão de “cadastrar”,
- **E** o sistema valida que todas as informações estão corretas,
- **Então** o sistema deve redirecionar o usuário para a página de login com uma mensagem de confirmação de que a conta foi criada com sucesso.




## **História de Usuário**

### **ID:**  
HU-002

### **Título:**  
Visualização de Aulas Ofertadas

### **Descrição:**  
Como **usuário cadastrado**, eu quero **poder visualizar uma lista com as matérias ofertadas para agendamento** para que **eu possa facilmente encontrar e escolher as aulas que desejo agendar com os mentores disponíveis**.

### **Critérios de Aceitação:**
#### Cenário 1: Visualização da lista com sucesso
- **Dado** que o usuário cadastrado está na página inicial,
- **Quando** clicar na opção de busca,
- **E** selecionar um filtro,
- **OU** buscar por texto,
- **E** tenha alguma matéria com as descrições buscadas,
- **Então**, o sistema exibe uma lista de matérias disponíveis para agendamento.
#### Cenário 2: Visualização da lista vazia
- **Dado** que o usuário cadastrado está na página inicial,
- **Quando** clicar na opção de busca,
- **E** selecionar um filtro,
- **OU** buscar por texto,
- **E** não tenha matéria com as descrições buscadas,
- **Então**, o sistema exibe uma mensagem que não há matérias disponíveis para agendamento.


## **História de Usuário**

### **ID:**  
HU-003

### **Título:**  
Agendamento de Aulas

### **Descrição:**  
Como **usuário cadastrado**, eu quero **selecionar um horário disponível no calendário do mentor, escolher o tipo de aula (remota ou presencial) ofertada e solicitar agendamento** para que **eu possa garantir que ambos estejam disponíveis**.

### **Critérios de Aceitação:**
#### Cenário 1: Agendamento de aula com sucesso
- **Dado** que o usuário está logado na plataforma,
- **Quando** ele acessar a página de perfil do mentor,
- **E** visualizar o calendário de horários disponíveis,
- **E** selecionar o horário escolhido para a aula,
- **E** selecionar o tipo de aula,
- **Então**, o sistema deve enviar a solicitação de agendamento por uma notificação ao mentor.

### **Critérios de Aceitação:**
#### Cenário 2: Tentativa de agendar horário já ocupado
- **Dado** que o usuário está logado na plataforma,
- **Quando** ele acessar a página de perfil do mentor,
- **E** visualizar o calendário de horários disponíveis,
- **E** selecionar um horário indisponível,
- **E** selecionar o tipo de aula,
- **Então**, o sistema deve exibir uma mensagem de erro informando que o horário não está disponível.

### **Critérios de Aceitação:**
#### Cenário 3: Notificação de confirmação de agendamento
- **Dado** que o usuário agendou uma aula com sucesso,
- **Quando** o agendamento é confirmado,
- **Então**, o sistema deve notificar na plataforma confirmando o agendamento.


## **História de Usuário**

### **ID:**  
HU-004

### **Título:**  
Sistema de busca com filtros para graduação, matérias e unidades(?)

### **Descrição:**  
Como **usuário do sistema**, eu quero **poder buscar monitorias utilizando filtros por curso de graduação, matérias e unidades** para que **eu possa encontrar rapidamente o que preciso de acordo com as minhas necessidades acadêmicas**.

### **Critérios de Aceitação:**
#### Cenário 1: busca por curso de graduação
- **Dado** que o usuário está na página de busca,
- **Quando**  o usuário pesquisa um curso de graduação no filtro,
- **E** aperta o botão de “buscar”,
- **Então** o sistema deve exibir todos os resultados relacionados ao curso selecionado.

#### Cenário 2: busca por matérias 
- **Dado** que o usuário está na página de busca,
- **Quando**  o usuário pesquisa uma matéria no filtro,
- **E** aperta o botão de “buscar”,
- **Então** o sistema deve exibir todos os resultados relacionados às matérias selecionadas.

#### Cenário 3: busca por unidades
- **Dado** que o usuário está na página de busca,
- **Quando**  o usuário pesquisa uma unidade específica no filtro,
- **E** aperta o botão de “buscar”,
- **Então** o sistema deve exibir todos os resultados relacionados a unidade selecionada.

#### Cenário 4: busca combinada
- **Dado** que o usuário está na página de busca,
- **Quando**  o usuário pesquisa um curso de graduação, uma ou mais matérias e uma unidade,
- **E** aperta o botão de “buscar”,
- **Então** o sistema deve exibir todos os resultados que correspondem a pesquisa. 

#### Cenário 5: busca sem pesquisa
- **Dado** que o usuário está na página de busca,
- **Quando**  o usuário não pesquisa nenhuma matéria, unidade ou disciplina no filtro,
- **E** aperta o botão de “buscar”,
- **Então** o sistema deve exibir uma mensagem de erro informando que é necessário pesquisar pelo menos uma opção para realizar a busca.

#### Cenário 6: Flexibilidade para futuras adições
- **Dado** que o sistema está em funcionamento,
- **Quando** novas matérias ou cursos de graduação forem adicionadas, 
- **Então** o sistema deve permitir que essas novas opções sejam filtradas na busca sem comprometer o funcionamento atual.
