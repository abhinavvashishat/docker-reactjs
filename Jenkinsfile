pipeline {
    agent any
    stages {

        stage('Checkout Source') {
            steps {
                    git url: 'git@github.com:abhinavvashishat/docker-reactjs.git' , branch: 'master', credentialsId: '62c535d0-77e3-4cfd-a279-73402747cda1' 
            }
            }

stage('NPM INSTALL') {
steps {
 sh 'npm install' 
}
  }
stage('Sonar') {
steps {
 sh 'npm run sonar' 
}
  }
stage('docker build') {
steps {
sh 'docker build -t abhinavdevops01/myappv1:${BUILD_NUMBER} .'
}
}
stage('docker push') {
steps {
sh 'docker push abhinavdevops01/myappv1:${BUILD_NUMBER}'
}
}
        stage('kubernetes container creation') {
            steps {
                sh 'helm upgrade myapp ./myapp --set image.tag=${BUILD_NUMBER}'
            }
        }
}
}

