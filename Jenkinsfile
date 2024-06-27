pipeline {
    agent any // Specifies where the pipeline will execute (e.g., on any available agent)
	stages {
	    stage('Checkout') {
	        steps {
	            // Steps to checkout your source code from SCM (Git)
	            checkout scm
	        }
	    }
	    stage('Build') {
	        steps {
	            // Steps to build your Maven project
	            script {
	                def mvnHome = tool name: 'Maven', type: 'maven'
	                sh "${mvnHome}/bin/mvn clean package"
	            }
	        }
	    }
	    stage('Test') {
	        steps {
	            // Steps to run tests
	            script {
	                def mvnHome = tool name: 'Maven', type: 'maven'
	                sh "${mvnHome}/bin/mvn test"
	            }
	        }
	    }
    // Add more stages as needed (e.g., Docker build and push)
	}

    post {
        // Define post-build actions here
        always {
        echo 'Cleaning up...' // Example of a post-build action
    }
    }
    
}
