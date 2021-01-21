# About this project


This project was created with the intention of integrating data from a legacy system of a third sector institution (NGO - Non-governmental organization),this system registers donations given to the institution, with that the API retrieves the data through normalized consultation, creating basis for reports that help in decision making.

The project was created for studies and learning (mine by anyone who wants to copy) using several javascript libraries


Esse projeto foi criado com intuito de integrar dados de um sistema legado  de uma instituição do terceito setor (NGO - Non-governmental organization), esse sistema registra as doações cedida a instituição, com isso a API recupera os dados através de consulta normalizadas, criando base para relatórios que ajudam na tomada de decisão. 

O projeto foi criado para estudos e aprendizado (meu de quem quiser copiar) usando diversas bibliotecas javascript



# LIBS
      
  - express https://expressjs.com/

     The express is used to develop web applications and APIs, is used to facilitate applications on the backend, has route systems, has exception handling, downloads and uploads of images, integrates with some / several templates for creating web pages, manages HTTP requests and greatly facilitates the process of learning the REST and RESTFULL specification.

     O express serve pra desenvolvimento de aplicações WEB e APIs, é usado para facilitação de aplicações no backend, possui sistemas de rotas, possui tratamento de excessões, download e upload de imagens, integra com alguns/vários templates para a criação de páginas web, gerencia requisições HTTPs e facilita muito no processo de aprendizado da especificação REST e RESTFULL. 
    
    
  - jsonwebtoken https://jwt.io/

    "JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties."

    In other words, it can be said that it is a safe way to authenticate, authorize and as the text of the website jwt.io says send information (claims) in a secure way.

    Em outras palabras é um meio de autenticar, autorizar e enviar informações entre duas partes assim como diz o texto no site do jwt.io.
    
  -  module-alias https://www.npmjs.com/package/module-alias
    
    This lib is one of the most practical things I discovered, it organizes your code and you stop placing those huge imports with the folder path. 
    Just add an alias to the folder you want to use and that's it, it's very practical.

    Essa lib é uma das coisas mais práticas que eu descobri, organiza seu código e você para de colocar aquelas 
    importações enorme com o caminho da pasta.   Basta você adicionar um alias a pasta que deseja usar e pronto, é muito prático.

  - bcrypts https://www.npmjs.com/package/bcryptjs
    
    Used to encrypt user passwords

    Usada para fazer a criptografia da senha de usuários do sistema
 

  - esm https://www.npmjs.com/package/esm
  
    Used to load ECMASCRIPT for node 6+

    Usado para carregar modulos ECMASCRIPT para node 6+ 

  - sequelize ORM https://sequelize.org/

    "Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server."

    For those who don't know what ORM is, it means Object Relational Mappers, 
    speaking very superficially it is used to map the entities in the database abstracting the database system, 
    it is quite useful but it is necessary to know how to use , because depending on the relationships that exist in the database, 
    the consultation may be very slow

    Para quem não sabe o que é ORM, significa Object Relational Mappers, falando bem superficial ele serve para mapear as entidades no banco abstraindo o sistema de banco de dados, é bastante útil mas é necessário saber usar, pois dependendo dos relacionamentos que existem no banco pode ser que a consulta possa ficar bastante lenta