CODE_CHANGES = getGitChanges{}
pipeline
{
agent any

stage("build")
{
when{
expression{
BRANCH_NAME =='master' && CODE_CHANGES == true
}

}

}

stage("NPM INSTALL")
{
sh "npm install"
}
stage("docker build")
{
sh "docker build -t myapp/latest:${BUILD_NUMBER}"
}
}
