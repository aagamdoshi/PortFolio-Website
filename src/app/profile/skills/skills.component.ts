import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public frontEndSkills = {};
  public backEndSkills = {};
  public cloudSkills = {};
  public iconURL = "devicon-react-original colored";
  constructor() { }

  // 0-25: #cccc00, 26-50: #ff5500, 51-75: #00e6e6, 76-100: #339900
  ngOnInit() {
    this.frontEndSkills = [
      { name: 'React JS', score: "90%", color: "#339900" , iconURL: "devicon-react-original colored"},
      { name: 'Angular 6/7', score: "85%" , color: "#339900", iconURL: "devicon-angularjs-plain colored"},
      { name: 'Javascript', score: "85%" , color: "#339900", iconURL: "devicon-javascript-plain colored"},
      { name: 'Typescript', score: "70%", color: "#00e6e6", iconURL: "devicon-typescript-plain colored"},
      { name: 'Angular Material', score: "60%", color: "#00e6e6" , iconURL: "devicon-angularjs-plain colored"},
      { name: 'Bootstrap', score: "50%", color: "#00e6e6", iconURL: "devicon-bootstrap-plain colored"}
    ];
    // validateforColor()

    this.backEndSkills = [
      { name: 'Node.JS', score: "75%", color: "#339900" , iconURL: "devicon-nodejs-plain colored"},
      { name: 'GraphQL', score: "75%", color: "#339900" , iconURL: "devicon-graphql-plain colored"},
      { name: 'GoLang', score: "75%", color: "#339900" , iconURL: "devicon-go-original-wordmark colored"},
      { name: 'C#', score: "75%", color: "#339900" , iconURL: "devicon-csharp-plain colored"},
      { name: 'SQL Server', score: "75%", color: "#339900" , iconURL: "devicon-mysql-plain colored"},
      { name: '.Net MVC Framework', score: "65%", color: "#00e6e6" , iconURL: "devicon-dot-net-plain colored"},
      { name: 'MS Graph API', score: "65%", color: "#00e6e6" , iconURL: "devicon-gradle-plain colored"},
      { name: 'Winforms', score: "65%", color: "#00e6e6" , iconURL: "devicon-windows8-plain colored"}
    ];

    this.cloudSkills = [
      { name: 'AWS', score: "85%", color: "#339900" , iconURL: "devicon-amazonwebservices-original colored"},
     { name: 'Azure', score: "40%", color: "#ff5500" , iconURL: "devicon-azure-plain colored"},
      { name: 'Elastic Stack', score: "30%", color: "#ff5500" , iconURL: "devicon-devicon-plain colored"},
      { name: 'Jenkins CI/CD', score: "40%", color: "#ff5500" , iconURL: "devicon-jeet-plain colored"},
      { name: 'Docker', score: "50%", color: "#ff5500" , iconURL: "devicon-docker-plain colored"},
      { name: 'Kubernetes', score: "10%", color: "#cccc00" , iconURL: "devicon-devicon-plain colored"}
    ]
  }

}
