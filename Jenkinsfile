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
                    sh 'docker run -d -p 80:8080 my-app'
                }
            }
        }
    }
    
   
}
