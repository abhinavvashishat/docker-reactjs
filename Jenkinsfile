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
sh 'docker build -t myappv1/latest:${BUILD_NUMBER} .'
}
}
}
}

