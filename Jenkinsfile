pipeline {
  agent any
  environment {
    CFW_ACCOUNT_ID=credentials('cfw-account-id')
    CFW_API_TOKEN=credentials('cfw-api-token')
  }
  stages {
    stage('verify deno and denoflare') {
      steps {
        sh '''
          deno --version
          denoflare --version
        '''
      }
    }
    stage('lint') {
      steps {
        sh 'deno lint'
      }
    }
    stage('compile') {
      steps {
        sh 'deno compile main.ts'
      }
    }
    stage('Upload a Cloudflare worker script to Cloudflare') {
      steps {
        sh 'denoflare push main.ts --account-id $CFW_ACCOUNT_ID --api-token $CFW_API_TOKEN --workers-dev'
      }
    }
    stage('Verify worker is deployed') {
      steps {
        sh 'deno test --allow-net'
      }
    }
  }
}