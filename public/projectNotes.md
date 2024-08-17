# Project Notes

## Overview

## Goals and Objectives

To create a GitHub Contribution map component with options, purely with AI (in this case Claude), for use by other Designers and Engineers.

## Notes along the way
- took ~4hrs for; prompting, project setup, initial commit, debugging (maybe 30mins) to get to the initial functioning state
- took about another ~1hr to adjust the grid to a row-based grid, fix the contribution-levles and matching color scheme and remove the heatmap view
- this initial functioning state had some style and good motion to it, but there was ~2hrs in styling the component to my liking in Tailwind
- I'll need to spend some time cleaning up the main page for publishing this publicly available component
- I'll also need to spend some time breaking out the stats and map from the page, so we can use them indepenently from the repo main page
- I found that having it way more modular (this approach to building with AI and having it break it down very modularly) than I anticipated was a HUGE help. When I want to go change s small thing like - add/change some contribution stats - I can focus on that one file and not have to worry about replacing whole swaths of code. Much more targeted and helps contain the net of changes.
- important to note: you need to make sure if you are working through a Claude project/thread, you need to constantly give it current context. E.g. I asked it (in the main thread) to make the 'legend' take the shape prop, and it didn't use the most recent context I had with making sure it was capturing 6 levels/colors. So I decided to go in to the component myself and update.
- have spent ~5hrs fine tuning functinality and getting the component to work appropriately



## Team Members

- team of one - me

## Requirements
### Functional Requirements
### Non-Functional Requirements

## Design
### Architecture
### User Interface

## Development
### Technologies Used
### Coding Standards

## Testing
### Test Plan
### Test Cases

## Deployment
### Deployment Strategy
### Rollback Plan

## Maintenance
### Bug Tracking
### Feature Requests

## Risks and Mitigation

## Budget

## Stakeholders

## Meeting Notes

## Action Items

## Resources and References
