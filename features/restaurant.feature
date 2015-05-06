Feature: Restaurant resource
  Restaurant resource.

  @vcr
  Scenario: Find restaurant
    Given Zuppler configured with "zuppler" and "abcd"
    When I find restaurant "demorestaurant"
    Then I should have "demorestaurant" restaurant
    


    

