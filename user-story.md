# User Story

**Title:** *As a registered user, I want to search for gifts by category, name, condition and age so that I can quickly find items that match my needs.*

## Description

As a registered user, I want to search for gifts using filters so that I can find useful items without browsing the whole list.

## Acceptance Criteria

**Scenario 1: Search by category**
- **Given** I am on the GiftLink home page
- **When** I select the category "Living" and submit the search
- **Then** only gifts in the "Living" category are shown

**Scenario 2: Search by name**
- **Given** I am on the search page
- **When** I enter "chair" in the name field
- **Then** all gifts whose name contains "chair" (any case) are displayed

**Scenario 3: No matching results**
- **Given** I am on the search page
- **When** I search for a name that matches no gift
- **Then** an empty result list is shown

## Priority

High

## Story Points

3

## Notes

Backed by `GET /api/search` with the optional query params `category`, `condition`, `name` and `age_years`.