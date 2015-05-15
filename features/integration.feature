Feature: Integrationresource
  Integartion resource.

  @vcr
  Scenario: Find integrations
    Given Zuppler configured with "demorestaurant" and "abcd"
    When I find integrations for channel
    Then I should have 7 integrations
