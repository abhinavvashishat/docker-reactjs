CODE_CHANGES = getGitChanges{}
pipeline
{
agent any

stages
{
steps("build")
{
when{
expression{
BRANCH_NAME =='master' && CODE_CHANGES == true
}

}

}

steps("NPM INSTALL")
{
sh "npm install"
}
steps("docker build")
{
sh "docker build -t myapp/latest:${BUILD_NUMBER}"
}
}
}
