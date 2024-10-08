# FUNCIONALIDADES DO SAGRES

1. **Cadastro / Login de Usuários**
   1.1. Tela de cadastro com os seguintes campos:
Nome completo*
E-Mail Institucional*
Senha*
Confirmação de senha*
Curso*
Período do Curso
Foto de perfil
   1.2. Tela de login com os seguintes campos:
E-mail institucional*
Senha*
   1.3. Validação de senha:
Durante o cadastro, o sistema deve verificar se a senha escolhida pelo usuário atende ao padrão estabelecido pela plataforma, impedindo a criação da conta caso esse padrão seja atendido.
Tamanho mínimo
Combinação de caracteres
   1.4. Validação de e-mail:
Durante o cadastro, o sistema deve verificar se o e-mail escolhido pelo usuário atende ao padrão estabelecido pela plataforma, impedindo a criação da conta caso esse padrão seja atendido.
   1.5. Tela de perfil (visualizada dentro do site na sua própria aba):
Listar informações do perfil: nome, curso, período, descrição(bio), matérias que o usuário realiza mentoria.
Terá as opções: configurações editar perfil; seja monitor; compartilhar perfil; ajuda; sair;
   1.6. Tela de editar perfil:
Opções de editar informações, alterar imagem de perfil, adicionar e editar descrição.
   1.7. Tela de configurações:
Opções de editar informações, trocar senha, sair e deletar conta.
   1.8. Tela com as matérias que o usuário faz monitoria:
Listagem das matérias com opção para edição de datas ou exclusão da matéria.
   1.9. Página de cadastro como monitor em alguma matéria com campos:
Matéria e período correspondente (selecionar)*
Horários/datas disponíveis para monitoria*
Tipo de monitoria(check box com presencial ou/e remota)*
Definição do valor da aula: O valor máximo de cobrança por aula é pré-definido pela plataforma, o mentor define o valor que cobrará, respeitando o limite da plataforma.
Descrição livre.
   1.10. Link para canal de ajuda na tela de perfil
   1.11. Página de logout
   1.11. Página de exclusão de conta

2. **Busca e dashboard**
   2.1. Dashboard:
	-Mensagem de boas-vindas:
-"Bem-vindo(a), [Nome do Usuário]! Estamos felizes em tê-lo(a) aqui. Vamos começar sua jornada de aprendizado!"
	-Exibição de informações resumidas:
		-Listar as matérias que o usuário está cadastrado, incluindo:
			-Nome da matéria
			-Monitor/aluno
			-Status(em andamento, concluído)
			-Próxima data da monitoria
	-Ícone de chat:
-Ícone acessível para comunicação rápida com:
-Monitores
-Alunos
	-Ícone de notificação:
		-Notificação sobre:
-Novas mensagens recebidas
-Convites para mentoria
  	-Ícone de pesquisa:
		-Direciona para a tela de busca

   2.2. Tela de busca com os seguintes campos:
	-Campo de pesquisa no topo da página para procurar:
		-Matéria
		-Monitor
	-Filtros para aprofundar a busca por:
		-Graduação
-Período
-Resultados da busca:
	-Exibe ista de resultados com:
		-Nome da matéria
		-Monitor
			-Período correspondente da matéria
			-Graduação
			-Valor da aula (ou se é gratuita)
		-Opção de selecionar um resultado para ver mais detalhes de agendamento
	
3. **Agendamento e pagamento**

   3.1 Após na busca selecionar uma matéria e clicar para agendar vai abrir a página para agendamento de monitoria com as seguintes informações:
Matéria e Período: Exibe a matéria e o período correspondente.
Perfil do Monitor: Inclui a foto de perfil, nome, graduação, período e nota/comentários com opção de "mostrar mais".
Preço: Exibe o valor da monitoria (ou se é gratuita).
Nota do monitor e comentários(com mostrar mais);
Disponibilidade: Lista datas e horários disponíveis para monitoria.
Tipo de monitoria: O aluno escolhe entre monitoria presencial ou remota.
Botão de solicitação: Usuário pode solicitar a monitoria.
   3.2. Verificação de solicitação de monitoria;
O sistema deve verificar se o horário agendado pelo usuário está de acordo com a disponibilidade do monitor e conflitos de horário, impedindo o agendamento caso esteja.
   3.3. Confirmação de monitoria:
Após a solicitação, o monitor recebe uma notificação para confirmar ou rejeitar a monitoria.
Confirmação pelo monitor: O monitor decide se aceita.
Notificação para o aluno: Se confirmado, o aluno recebe a notificação.
Chat: Com a aula agendada, um chat é liberado entre aluno e monitor, com duração de até um dia após a aula.
   3.4. Tela de listagem de monitorias marcadas 
Cada aula listada poderá ser selecionada para as seguintes ações:
Visualização de todas as informações sobre a aula;
Opção de cancelamento de aula;
   3.5 Tela com listagem do histórico de aulas
Visualização de todas as informações sobre a aula: detalhes como data, horário, tipo de monitoria (presencial ou remota), e link para aula remota (se aplicável) fornecido pelo monitor.
Visualização de avaliação dada com opção de editar dentro de 10 dias que foi realizada. Opção de avaliação de aula caso já tenha acontecido e não foi feita nenhuma (redirecionado para sistema de ranking).

4. **Ranking e avaliação**
4.1. Tela de Avaliação de Monitoria
Localização:
A tela é exibida após a conclusão de cada aula.
Conteúdo:
Permite que o aluno avalie o monitor com base nos seguintes critérios:
Selecionar um/alguns/todos os critérios:
Clareza
Paciência
Domínio do conteúdo
Comunicação
-  Selecionar a nota da monitoria:
      - Avaliação de 1 a 5 estrelas para a monitoria em geral.
	- Caixa para comentário opcional.
- Após a conclusão da monitoria, a avaliação pode ser visualizada dentro do histórico de aulas no menu "Monitorias Marcadas".
4.2. Sistema de Ranking de Monitores
Localização:
Visualização no perfil público do monitor e na busca.
Conteúdo:
Cálculo de Nota Geral:
A nota geral do monitor é a média das avaliações recebidas de todos os alunos em cada monitoria.
Exibição da Nota:
A nota média de cada monitor é exibida no perfil público do monitor, junto com o número total de avaliações.
Influência no Valor da Aula:
Monitores com melhor pontuação podem aumentar o valor das aulas, conforme definido pelas regras da plataforma.
4.3. Criação de Feedback no Perfil do Monitor
Localização:
Exibido no perfil público do monitor.
Conteúdo:
Exibir o feedback dos alunos após a avaliação, descrevendo sua experiência e recomendando o monitor para outros alunos.
4.4. Aluno Avalia o Serviço Prestado pelo Monitor
Localização:
Dentro do histórico de monitorias.
Conteúdo:
Após a conclusão da monitoria, o aluno avalia o monitor seguindo os critérios listados, deixando uma nota de 1 a 5 estrelas e comentários.
Validação:
O sistema só permite a avaliação após a conclusão de uma aula agendada, e o aluno é notificado para completar a avaliação.
4.5. Botão de “Like” em Avaliações
Localização:
Ao lado de cada comentário de avaliação no perfil do monitor.
Conteúdo:
Outros alunos podem interagir com as avaliações existentes, clicando em um botão de “like” para indicar se acharam a avaliação útil ou não.
4.6. Ranking dos Melhores Monitores
Localização:
Página de busca de monitores, com filtros para matéria e curso.
Conteúdo:
Os monitores serão ranqueados por matéria e por curso, com base nas notas e feedbacks recebidos.
Monitores com as melhores avaliações e maior número de likes serão destacados nas respectivas áreas de atuação.
4.7. Sistema de Cores para Destaque dos Monitores
Localização:
Página de busca de monitores, na seção de resultados da pesquisa.
Conteúdo:
Cores de destaque: Os monitores serão destacados com cores diferentes de acordo com suas avaliações e feedbacks, facilitando a identificação rápida do desempenho.
Verde:
Critério: Nota de 4 a 5
Significado: Monitores com excelente desempenho, altamente recomendados.
Amarelo:
Critério: Nota de 3
Significado: Monitores com desempenho satisfatório, mas que podem ser melhorados.
Vermelho:
Critério: Nota de 1 a 2
Significado: Monitores com desempenho abaixo do esperado, sugerindo cautela na escolha.

5. **Chat**
5.1. Ícone de Chat
Localização:
No topo da página, ao lado dos ícones de notificação e pesquisa.
Conteúdo:
Função: Acessar rapidamente a comunicação entre alunos e monitores.
Usuários disponíveis:
Monitores: Alunos podem iniciar conversas com seus monitores ou monitores disponíveis para agendamento.
Alunos: Monitores podem enviar mensagens para alunos que estão em sua lista de monitoria ou que solicitaram aulas.
5.2. Notificações de Novas Mensagens
Localização:
No ícone de notificações, localizado no topo da página.
Conteúdo:
As novas mensagens recebidas, tanto de monitores quanto de alunos, serão exibidas como notificações para que o usuário seja alertado sobre novas interações no chat.
5.3. Histórico de Conversas
Localização:
Na aba de chat, onde será exibido o histórico de conversas passadas.
Conteúdo:
Visualização de todas as conversas anteriores entre o aluno e o monitor.
Função de busca dentro do histórico para localizar mensagens específicas.
5.4. Mensagens em tempo real
Localização:
Na interface do chat após selecionar uma conversa.
Conteúdo:
Envio de mensagens instantâneas, com atualização em tempo real, permitindo comunicação rápida e eficiente.
Funcionalidades como envio de arquivos e links relacionados à monitoria, facilitando o compartilhamento de materiais.



