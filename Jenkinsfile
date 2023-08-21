pipeline {
    agent any
   triggers {
        githubPush()
    }
    environment {
        VERSION = "${BUILD_NUMBER}"
    }
    stages {
        stage('Build Docker Image') {
            steps {
              script {
                    // Build Docker image from the Dockerfile
                    sh 'docker login -u ashcoder666 -p dckr_pat_YQ3SLes1ts0mHPRwjcNd1SH3opw'
                    sh 'docker build -t learn_docker .'
                 

                    sh "docker tag nginxreact::${VERSION} ashcoder666/learn_docker:${VERSION} "
                    sh "docker push ashcoder666/learn_docker:${VERSION} "
                }
            }
        }
        
        
        stage('Deploy Container') {
            steps {
                script {
                    // Run the Docker container
                    sh 'docker run -p 3000:80 ashcoder666/learn_docker:${VERSION}'
                }
            }
        }
    }

   post {
    always {
        script {
            def containerIds = sh(script: "docker ps -aq --filter label=org.jenkinsci.plugins.workflow.job.id=${env.BUILD_TAG}", returnStdout: true).trim()
            if (containerIds) {
                sh "docker stop ${containerIds}"
            }
        }
    }
}
    
   
}
