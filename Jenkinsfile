pipeline {
    agent any
   
    stages {
        stage('build') {
            steps {
                echo 'Code Push'
            }
        }

stage('NPM INSTALL') {
steps {
 sh 'npm install' 
}
  }

stage('docker build') {
steps {
sh 'docker build -t myappv1:${BUILD_NUMBER} .'
}
}
        stage('kubernetes container creation') {
            steps {
                sh 'kubectl run myapp --image=abhinavdevops01/myappv1:32 --image-pull-policy=Never'
            }
        }
}
}

