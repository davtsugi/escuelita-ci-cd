pipeline {
  agent none
  stages {
    // stage('Build FrontEnd') {
    //   agent {        
    //     docker {
    //       image 'codea2/randsero:angularCli-0.1'
    //       args '-p 80:8080'
    //     }
    //   }
    //   steps {
    //     sh '''cd escuelita.ci.web
    //     npm install
    //     npm start'''
    //     sh 'Finished using the web site? (Click "Proceed" to continue)'
    //   }
    // }
    stage('Build BackEnd') {
      agent {        
        docker {
          image 'mcr.microsoft.com/dotnet/core/sdk:2.1'          
        }
      }
      steps {
        sh '''cd escuelita.ci.api
        dotnet publish --configuration Release
        ls -alh'''
        sh 'Finished using the web site? (Click "Proceed" to continue)'
      }
    }
  }
}