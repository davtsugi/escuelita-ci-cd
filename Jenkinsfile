pipeline {
  agent none
  stages {    
    stage('Build BackEnd') {
      agent {        
        docker {
          image 'mcr.microsoft.com/dotnet/core/sdk:2.1'          
        }
      }
      environment {
        HOME = '/tmp'
      } 
      steps {
        sh '''cd escuelita.ci.api
        dotnet publish --configuration Release
        ls -alh escuelita.ci.api/bin/Release/netcoreapp2.1/'''
        // input 'Pruebas de Backend finalizadas? (Click "Proceed" para continuar)'
      }
    }
    // stage('Build FrontEnd') {
    //   agent {        
    //     docker {
    //       image 'codea2/randsero:angularCli-0.1'          
    //     }
    //   }
    //   steps {
    //     sh '''cd escuelita.ci.web
    //     npm install
    //     ng build --prod --build-optimizer'''        
    //   }
    // }
    // stage('Show FrontEnd') {
    //   agent {        
    //     docker {
    //       image 'nginx:latest'   
    //       args '-p 80:80'       
    //     }
    //   }
    //   steps {
    //     sh '''mkdir /var/www
    //     mkdir /var/www/site.com
    //     ls -alh escuelita.ci.web/dist/
    //     cp -r escuelita.ci.web/dist/minimal-project/* /var/www/site.com
    //     rm /etc/nginx/conf.d/default.conf
    //     cp escuelita.ci.web.server/nginx.conf /etc/nginx/conf.d/
    //     service nginx start
    //     service nginx reload'''
    //     sh 'Finished using the web site? (Click "Proceed" to continue)'
    //   }
    // }
  }
}