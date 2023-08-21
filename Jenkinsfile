pipeline {
    agent any
    
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image from the Dockerfile
                    sh 'docker build -t my-app .'
                }
            }
        }
        
        
        stage('Deploy Container') {
            steps {
                script {
                    // Run the Docker container
                    sh 'docker run  -p 3000:3000 my-app'
                }
            }
        }
    }

       post {
        always {
            // Clean up resources, stop containers, etc.
            sh 'docker stop $(docker ps -aq)'
        }
    }
    
   
}
