pipeline {

  environment {
    dockerimagename = "dynamicdevops/docker-image"
    dockerImage = ""
    OPENSHIFT_URL = 'https://api.sandbox-m2.ll9k.p1.openshiftapps.com:6443'
    OPENSHIFT_TOKEN = 'sha256~M7z9j_7ftYUz6_J1W21HWlp5pKBuhmLCXuu-yNiBTm0'
    DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials-id')
    DOCKER_IMAGE_NAME = 'dynamicdevops/docker-image:latest'
    OPENSHIFT_PROJECT = 'your-openshift-project'
    APP_NAME = 'nodejs-app'
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git branch: 'main', credentialsId: '92ec0319-697f-49d3-b22d-a99a7f8439e8', url: 'https://github.com/Sahilsinghss/jenkinstest.git'
      }
    }

    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhublogin'
           }
      steps{
        script {
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploy to OpenShift') {
        steps {
            script {
                // Login to OpenShift
                sh "oc login --token=${OPENSHIFT_TOKEN} --server=${OPENSHIFT_URL} --insecure-skip-tls-verify"

                // Set OpenShift project
                sh "oc project ${OPENSHIFT_PROJECT}"

                // Deploy the application from the Docker image on Docker Hub
                sh "oc new-app ${DOCKER_IMAGE_NAME} --name=${APP_NAME}"
            }
        }
    }
}

  }

