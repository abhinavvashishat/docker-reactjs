CODE_CHANGES = githubPush(
            branchFilterType: 'All',
            triggerOnPush: true,
            triggerOnMergeRequest: false,
            triggerOpenMergeRequestOnPush: "never",
            triggerOnNoteRequest: true,
            noteRegex: "Jenkins please retry a build",
            skipWorkInProgressMergeRequest: true,
            secretToken: "324a6df2d59cba3e444b5ddfd9829a562e9a8461",
            ciSkip: false,
            setBuildDescription: true,
            addNoteOnMergeRequest: true,
            addCiMessage: true,
            addVoteOnMergeRequest: true,
            acceptMergeRequestOnSuccess: false,
            includeBranchesSpec: "origin/master",
            excludeBranchesSpec: "",) 
pipeline {
    agent any
    stages {

        stage('build') {
            steps {
                    expression {
                    BRANCH_NAME == 'master' && CODE_CHANGES == true
                }
                echo 'Code Push' // push
            }
        }

stage('NPM INSTALL') {
steps {
 sh 'npm install' 
}
  }
stage('Sonar') {
steps {
 sh 'npm test' 
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

