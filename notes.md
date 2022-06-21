# Clean Architecture no React

- É possível mudar de framework frontend com menos custo possível, ou até mesmo mudar as bibliotecas com uma arquitetura limpa

- Layers
  - Domain: Regras de negócio. Cria uma regra de negócio como interface. (Authentication). Não depende de ninguém, é camada principal do clean architecture.
  - Data: Implementações dos casos de uso. Classe que implementa o protocolo/interface do domínio. (RemoteAuthentication): Trata respostas e erros da API.
  - Infra: Implementações de frameworks externos. Por exemplo axios. Implementa por exemplo o HttpPostClient, que é por sua vez utilizado pela camada de Data.
  - Presentation: É a parte realmente acoplada ao framework. Responsável por renderizar a view, navegação, gravar dados no Cache e controlar o estado.
  - Validation: Camada para validação dos dados. Evita o uso de validação de formulários por exemplo acoplado nos componentes, facilitando a troca de framework no futuro. Implementam a interface de validação definida no Presentation layer por exemplo.
  - Main: Classes que geram instâncias, por exemplo Factories. Ele vai montando as implementações e dependencias para fazer o presentation funcionar. CompositionRoot. Por exemplo LoginFactory.