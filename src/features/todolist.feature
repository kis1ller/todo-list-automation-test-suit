
Feature: Todolist
  UI and API automation tests for the application “Todoist”

  Background:
    Given I have created a test project via API using following body:
      """
      {
        "name": "Test Todolist Project"
      }
      """

  Scenario: Create Project via API and verify it through Web Application
    When I login into the Todolist web application
    And I expect the current URL to include the "app/today" path
    Then I should see the project named as "Test Todolist Project" in sidebar

  Scenario: Create Task via Web Application and verify it through API
    When I login into the Todolist web application
    And I expect the current URL to include the "app/today" path
    And I create a test task via the web application with name "UI Test Todolist Task"
    Then The task with name "UI Test Todolist Task" should accessible correctly via the API

  Scenario: Create Task via API and verify it through Web Application
    When I create a test task via the API using following name "API Test Todolist Task"
    And I login into the Todolist web application
    And I expect the current URL to include the "app/today" path
    Then The task with name "API Test Todolist Task" should be visible on the web application