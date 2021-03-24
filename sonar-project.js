const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://127.0.0.1:9000/',
       options : {
	    'sonar.projectDescription': 'This is a React application',
	    'sonar.projectName': 'REact Application - Sample',
	    'sonar.login': 'admin',
	    'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
            'sonar.test.inclusions': './__tests__/**/*.test.ts',
            'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.testExecutionReportPaths': 'reports/test-report.xml'
       },
}, () => {});
