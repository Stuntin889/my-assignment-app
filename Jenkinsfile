pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '4b4c13e0-8847-442c-84fb-b23004b701e1'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'netlify-token', variable: 'NETLIFY_AUTH_TOKEN')]) {
                    sh 'npx netlify deploy --prod --dir=dist'
                }
            }
        }
    }
}