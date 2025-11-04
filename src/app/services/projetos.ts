import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Projetos {
  obterProjetos() {
    return [
      {
        nome: 'Contador hematologico',
        tecnologias: "React, TailwindCSS",
        descricao:
          'Aplicação web que facilita a análise e contagem de células sanguíneas em laboratórios de analises clínicas.',
        img: ""
      },
      {
        nome: 'Registro de pacientes',
        tecnologias: "Java, Spring Boot, MySQL, HTML, CSS",
        descricao:
          'Sistema para organização, registro e gerenciamento de pacientes que possuem alterações importantes em seus exames laboratoriais.',
        img: ""
      },
      {
        nome: 'Site ONG APASM',
        tecnologias: "Java, Spring Boot, Angular, PostgreSQL",
        descricao:
          'Aplicação web para o grupo APASM (Associação de proteção animal de São Manuel) utilizado para divulgação do trablalho e captação de doações.',
        img: ""
      },
      {
        nome: 'WorkLab',
        tecnologias: "PHP, Jquery",
        descricao:
          'Sistema de gestão laboratorial desenvolvido juntamente com a equipe CriaSoft para personalizar de acordo com os criterios exigidos pelo laboratorio atendido.',
        img: ""
      },
      {
        nome: 'API para uma clinica veterinaria',
        tecnologias: "Java, Spring Boot, PostgreSQL",
        descricao:
          'API REST desenvolvida para gerenciar dados dos atendimentos, animais e seus tutores de uma clinica veterianaria.',
        img: ""
      }
      
    ]
  }
}
