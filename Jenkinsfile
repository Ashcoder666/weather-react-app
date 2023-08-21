pipeline {
    agent any
   triggers {
        githubPush()
    }
    environment {
        VERSION = "${BUILD_NUMBER}"
         CONTAINER_NAME = "nginxreact_container"
    }
    stages {
        stage('Build Docker Image') {
            steps {
              script {
                    // Build Docker image from the Dockerfile
                    sh 'docker login -u ashcoder666 -p dckr_pat_YQ3SLes1ts0mHPRwjcNd1SH3opw'
                    sh 'docker build -t nginxreact:${VERSION} .'
                 

                    sh "docker tag nginxreact:${VERSION} ashcoder666/learn_docker:nginxreact${VERSION} "
                    sh "docker push ashcoder666/learn_docker:nginxreact${VERSION}"
                }
            }
        }
        
        
        stage('Deploy Container') {
            steps {
                script {
                    def existingContainerId = sh(script: "docker ps -q -f name=${CONTAINER_NAME}", returnStdout: true).trim()
                    
                    if (existingContainerId) {
                        sh "docker stop ${existingContainerId}"
                        sh "docker rm ${existingContainerId}"
                    }
                    
                    // Run the Docker container
                    sh "docker run -d -p 3000:80 --name ${CONTAINER_NAME} ashcoder666/learn_docker:nginxreact${VERSION}"
                }
            }
        }
    }

 post {
    always {
        script {
            def containerIds = sh(script: "docker ps -aq --filter ancestor=ashcoder666/learn_docker:nginxreact${VERSION}", returnStdout: true).trim()
            
            if (containerIds) {
                def containerIdList = containerIds.split("\\s+") // Split IDs by whitespace
                for (def containerId in containerIdList) {
                    sh "docker stop ${containerId}"
                }
            }
        }
    }
}

    }
    
   
}
