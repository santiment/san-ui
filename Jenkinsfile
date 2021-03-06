podTemplate(label: 'san-ui-builder', containers: [
  containerTemplate(name: 'docker', image: 'docker', ttyEnabled: true, command: 'cat', envVars: [
    envVar(key: 'DOCKER_HOST', value: 'tcp://docker-host-docker-host:2375')
  ])
]) {
  node('san-ui-builder') {
    stage('Run Tests') {
      container('docker') {
        def scmVars = checkout scm
        def gitHead = scmVars.GIT_COMMIT.substring(0,7)

        sh "docker build -t san-ui-test:${scmVars.GIT_COMMIT}-${env.BUILD_ID}-${env.CHANGE_ID} ."
        sh "docker run --rm -t san-ui-test:${scmVars.GIT_COMMIT}-${env.BUILD_ID}-${env.CHANGE_ID} yarn test --ci"

        if (env.BRANCH_NAME == "master") {
          withCredentials([
            string(
              credentialsId: 'SECRET_KEY_BASE',
              variable: 'SECRET_KEY_BASE'
            ),
            string(
              credentialsId: 'aws_account_id',
              variable: 'aws_account_id'
            )
          ]) {
            def awsRegistry = "${env.aws_account_id}.dkr.ecr.eu-central-1.amazonaws.com"
            docker.withRegistry("https://${awsRegistry}", "ecr:eu-central-1:ecr-credentials") {
              sh "docker build -t ${awsRegistry}/san-ui:${env.BRANCH_NAME} -t ${awsRegistry}/san-ui:${scmVars.GIT_COMMIT} --build-arg SECRET_KEY_BASE=${env.SECRET_KEY_BASE} --build-arg GIT_HEAD=${gitHead} ."
              sh "docker push ${awsRegistry}/san-ui:${env.BRANCH_NAME}"
              sh "docker push ${awsRegistry}/san-ui:${scmVars.GIT_COMMIT}"
            }
          }
        }
      }
    }
  }
}