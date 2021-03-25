pipeline {
    agent any
    environment {
    imagename = "abhinavdevops01/myappv1"
    registryCredential = 'abhinav-dockerhub'
    dockerImage = ''
  }
    stages {
        stage('Checkout Source') {
            steps {
                    git url: 'git@github.com:abhinavvashishat/docker-reactjs.git' , branch: 'master', credentialsId: '62c535d0-77e3-4cfd-a279-73402747cda1' 
            }
            }

stage('Build') {
steps {
 sh 'npm install' 
}
  }
stage('Execute SonarQube Report') {
steps {
 sh 'npm run sonar' 
}
  }
stage('Image Building Process') {
steps {
 script {
          dockerImage = docker.build imagename
 }
 }
}
stage('Image Push to Hub') {
steps {
    script {
docker.withRegistry( '', registryCredential ) {
            dockerImage.push("$BUILD_NUMBER")
             dockerImage.push('latest')

          }
        }
}
}
        stage('Kubernetes Clusterization') {
            steps {
                sh 'helm upgrade myapp ./myapp --set image.tag=${BUILD_NUMBER}'
            }
        }
}
}

