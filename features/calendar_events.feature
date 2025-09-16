Feature: BI Calendar Events API
As a user of the BI Calendar service
I want to retrieve calendar events
So that I can display them to end users

Background:
Given the API base URL is configured

@smoke
Scenario: GET /BICalendarEvents returns a valid list
When I GET "/BICalendarEvents"
Then the response status should be 200
And the response should be JSON