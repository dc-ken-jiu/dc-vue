pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        sh 'npm i'
      }
    }

    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}