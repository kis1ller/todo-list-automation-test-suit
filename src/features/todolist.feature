Feature: Todoist

  @test
  Scenario: Create Project and verify it through UI
    Given I have created a test project via API:
      """
      {
        "name": "Test Todo List Project"
      }
      """
    When I login into the web application
    And I expect the current URL to include the "app/today" path
    Then I should see the project named as "Test Todo List Project" in sidebar

# Scenario: Create Task via Web Application
#   Given I have created a test project via API
#   When I create a test task via the web application
#   Then the task should be created correctly via the API

# Scenario: Create Task via API
#   Given I have created a test project via API
#   When I create a test task via the API
#   Then the task should be visible on the web application

# Scenario: Reopen Task
#   Given I have created a test project via API
#   And I have created a test task via the web application
#   When I mark the test task as completed
#   And I reopen the test task via the API
#   Then the test task should appear in the mobile application
