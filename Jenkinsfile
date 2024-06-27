pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                git 'https://github.com/loner-wolf/drumset'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                sh 'mvn clean package'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t nuckingfoob/drumset-app .'
            }
        }

        stage('Docker Push') {
            steps {
                echo 'Pushing Docker image...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'ShivOm@26', usernameVariable: 'nuckingfoob')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u nuckingfoob --password-ShivOm@26'
                    sh 'docker push nuckingfoob/drumset-app'
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker rmi nuckingfoob/drumset-app'
        }
        success {
            echo 'Build and push successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
