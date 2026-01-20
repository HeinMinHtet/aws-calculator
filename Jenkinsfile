pipeline {
    agent any

    // environment {
    //     DOCKER_IMAGE = 'my-aws-calculator'
    //     DOCKER_TAG = "build-${env.BUILD_NUMBER}"
    //     DOCKER_REGISTRY = 'https://my-docker-registry.com'
    //     DOCKER_CREDENTIALS = credentials('my-docker-credentials')
    // }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        // stage('Build Docker Image') {
        //     steps {
        //         sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
        //     }
        // }

        // stage('Push Docker Image') {
        //     steps {
        //         withDockerRegistry(credentialsId: 'my-docker-credentials', url: "${DOCKER_REGISTRY}") {
        //             sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
        //         }
        //     }
        // }
    }
}
