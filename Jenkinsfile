pipeline {
    agent any
   triggers {
        githubPush()
    }
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    def version = "1.0"
                    // Build Docker image from the Dockerfile
                    sh 'docker login -u ashcoder666 -p dckr_pat_YQ3SLes1ts0mHPRwjcNd1SH3opw'
                    sh 'docker build -t weatherpipe .'
                    sh 'docker tag nginxreact:latest ashcoder666/learn_docker:weatherpipe'
                    sh 'docker push ashcoder666/learn_docker:weatherpipe'


                }
            }
        }
        
        
        stage('Deploy Container') {
            steps {
                script {
                    // Run the Docker container
                    sh 'docker run -p 3000:80 ashcoder666/learn_docker:weatherpipe'
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
