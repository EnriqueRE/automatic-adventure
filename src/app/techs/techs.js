class TechsController {
  /** @ngInject */
  constructor($scope) {
    $scope.users = [{
      primaryRole: 'Sales Rep',
      username: 'lisa.jones',
      primaryDemoUser: true,
      country: 'US',
      pillar: 'CRM',
      businessProcesses: ['Campaign to Cash', 'Lead Opportunity'],
      industry: 'High Tech',
      displayName: 'Sales REP(Lisa Jones)'
    }, {
      primaryRole: 'Sales Rep',
      username: 'julian.henderson',
      primaryDemoUser: false,
      country: 'US',
      pillar: 'CRM',
      businessProcesses: ['Campaign to Cash', 'Lead Opportunity'],
      industry: 'High Tech',
      displayName: 'Sales REP(Julian Henderson)'
    }, {
      primaryRole: 'Sales Rep',
      username: 'winston.may',
      primaryDemoUser: false,
      country: 'UK',
      pillar: 'CRM',
      businessProcesses: ['Campaign to Cash', 'Lead Opportunity'],
      industry: 'High Tech',
      displayName: 'Sales REP(Winston May)'
    }, {
      primaryRole: 'Sales Rep',
      username: 'mandy.lane',
      primaryDemoUser: false,
      country: 'UK',
      pillar: 'CRM',
      businessProcesses: ['Campaign to Cash', 'Lead Opportunity'],
      industry: 'High Tech',
      displayName: 'Sales REP(Mandy Lane)'
    }, {
      primaryRole: 'Sales VP',
      username: 'bob.boyle',
      primaryDemoUser: true,
      country: 'US',
      pillar: 'CRM',
      businessProcesses: ['Campaign to Cash', 'Lead Opportunity'],
      industry: 'High Tech',
      displayName: 'Sales VP(Bob Boyle)'
    }, {
      primaryRole: 'Sales Admin',
      username: 'john.dunbar',
      primaryDemoUser: true,
      country: 'US',
      pillar: 'CRM',
      businessProcesses: ['Campaign to Cash', 'Lead Opportunity'],
      industry: 'High Tech',
      displayName: 'Sales Admin(John Dunbar)'
    }, {
      primaryRole: 'Sales Manager',
      username: 'mateo.lopez',
      primaryDemoUser: true,
      country: 'US',
      pillar: 'CRM',
      businessProcesses: ['Campaign to Cash', 'Lead Opportunity'],
      industry: 'High Tech',
      displayName: 'Sales Manager(Mateo Lopez)'
    }];

    $scope.pillars = ['', 'CRM', 'HCM', 'SCM', 'FINS', 'GRC', 'PRC', 'PRJ'];

    $scope.countries = ['', 'US', 'UK', 'France', 'Australia', 'Brazil'];

    $scope.roles = ['', 'Sales Rep', 'Sales Manager', ' Sales Admin', 'Sales VP', 'Order Clerk', 'Fulfillment Manager', 'Procurement Manager'];

    $scope.businessProcesses = ['', 'Campaign to Cash', 'Order to Cash', 'Sourcing to Hire', 'Hire to Retire', 'Procure to Pay', 'Lead Opportunity'];

    $scope.industries = ['', 'High Tech', 'Engineering and Construction', 'Retail', 'Higher Ed', 'Healthcare'];
  }
}

angular
  .module('app')
  .component('fountainTechs', {
    templateUrl: 'app/techs/techs.html',
    controller: TechsController
  });
