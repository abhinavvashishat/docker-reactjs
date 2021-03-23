pipeline {
    agent any
    stages {
stage('Trigger on SCM') {
when {
triggeredBy "SCMTrigger"
}}
        stage('build') {
            steps {
                echo 'Code Push'
            }
        }

stage('NPM INSTALL') {
steps {
 sh 'ls' 
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

