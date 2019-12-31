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
  constructor() { }

  // 0-25: #cccc00, 26-50: #ff5500, 51-75: #00e6e6, 76-100: #339900
  ngOnInit() {
    this.frontEndSkills = [
      { name: 'Angular 6/7', score: "85%" , color: "#339900"},
      { name: 'Javascript', score: "85%" , color: "#339900"},
      { name: 'Typescript', score: "70%", color: "#00e6e6"},
      { name: 'Angular Material', score: "60%", color: "#00e6e6" },
      { name: 'Bootstrap', score: "50%", color: "#00e6e6"},
      { name: 'React JS', score: "20%", color: "#cccc00" }
    ];
    // validateforColor()

    this.backEndSkills = [
      { name: 'C#', score: "75%", color: "#339900" },
      { name: 'SQL Server', score: "75%", color: "#339900" },
      { name: '.Net MVC Framework', score: "65%", color: "#00e6e6" },
      { name: 'MS Graph API', score: "65%", color: "#00e6e6" },
      { name: 'Winforms', score: "65%", color: "#00e6e6" }
    ];

    this.cloudSkills = [
      { name: 'Azure Active Directory', score: "85%", color: "#339900" },
      { name: 'Azure Storage, Services, Vault', score: "85%", color: "#339900" },
      { name: 'Azure SQL', score: "75%", color: "#339900" },
      { name: 'OAuth', score: "65%", color: "#00e6e6" },
      { name: 'Azure PaaS', score: "60%", color: "#00e6e6" },
      { name: 'Elastic Stack', score: "30%", color: "#ff5500" },
      { name: 'Jenkins CI/CD', score: "40%", color: "#ff5500" },
      { name: 'Docker', score: "20%", color: "#cccc00" },
      { name: 'Kubernetes', score: "10%", color: "#cccc00" }
    ]
  }

}
