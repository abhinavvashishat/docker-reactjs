pipeline {
    agent any
    triggers {
    gitlab(
      triggerOnPush: true,
      triggerOnMergeRequest: false, triggerOpenMergeRequestOnPush: "never",
      triggerOnNoteRequest: true,
      noteRegex: "Jenkins please retry a build",
      skipWorkInProgressMergeRequest: true,
      ciSkip: false,
      setBuildDescription: true,
      addNoteOnMergeRequest: true,
      addCiMessage: true,
      addVoteOnMergeRequest: true,
      acceptMergeRequestOnSuccess: false,
      branchFilterType: "NameBasedFilter",
      includeBranchesSpec: "origin/master",
      excludeBranchesSpec: "",
      pendingBuildName: "Jenkins",
      cancelPendingBuildsOnUpdate: false,
      secretToken: "324a6df2d59cba3e444b5ddfd9829a562e9a8461")
}
    stages {

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

