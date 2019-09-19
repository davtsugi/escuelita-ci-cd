pipeline {
  agent {
    docker {
      image 'codea2/randsero:angularCli-0.1'
      args '-p 80:8080'
    }

  }
  stages {
    stage('Build FrontEnd') {
      steps {
        sh '''cd ../escuelita.ci.web
npm install
npm start
Finished using the web site? (Click "Proceed" to continue)'''
      }
    }
  }
}