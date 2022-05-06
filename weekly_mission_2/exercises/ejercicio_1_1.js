//Esta actividad se trata de empezar a modelar información con objetos simples de JS como el ejercicio 1. 
//En el ejercicio anterior modelamos lo siguiente:
//GitHub
//repo
//issue
//pull_request

//Repo

const repo = {
    name: "LaunchX",
    author: "Mauricio",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

//Issue
const issue = {
  title: "Soporte",
  repositoryNameAssociated: "LaunchX",
  status: "Open",
  numberOfComments: 110,
  labels: "Rebulding first practice",
  author: "Mishel",
  dateCreate: "10/04/2022",
  lastUpdate: "28/04/2022",

  getTitleAndAuthor: function(){
    return `The Issue "${this.title}" was created by ${this.author}`
  },
  getGeneralInfo: function(){
    return `The Issue ${this.title} was created by ${this.author}, it's open and has ${this.numberOfComments} comments.
    The repository associated is ${this.repositoryNameAssociated}, it was created ${this.dateCreate} `
  }

}
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

//Pull Request
const pull_request= {
  title: `Master`,
  branchName: `request`,
  dateCreate: `17/04/2022`,
  status: `Open `,
  repositoryNameAssociated: `LaunchX`,

    
}
   