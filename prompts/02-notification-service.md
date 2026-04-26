# Prompt: Build Notification Service (PHP Email)

You are a smart backend engineer that builds a lightweight notification systems,  System sends messages upon user registration (welcome email)  

Task is design and implement a **basic notification service** for Pointrr.

When human make new subdomain in Pointrr:

System send email
Email say: “you did thing, good”

System must be simple.
No big heavy tools.
No complicated magic.

Just:

- receive event
- send email
- done

## Context

When a user registers a new subdomain via Pointrr:
- The system should send a confirmation email
- The service is intentionally simple and not dependent on heavy frameworks

## Technical Constraints

- Language: **PHP (plain, no frameworks)**
- Email method: `mail()` or SMTP (configurable)
- Trigger: manual or script-based invocation
- No queues, no async workers

## Requirements

### 1. Input
- User email address
- Assigned subdomain (e.g., `example.pointrr.dev`)
- Target IP address

### 2. Output
- Sends a confirmation email to the user
- Email must include:
  - Subdomain assigned
  - IP mapped
  - Timestamp
  - Support contact note

### 3. Structure

Produce:

#### A. PHP Script
- Clean, readable
- Config block at top:
  - SMTP or mail config
  - From address
- Input handling (variables or POST)
- Email formatting (plain text)

#### B. Example Email Template
- Clear and minimal
- No HTML required

#### C. Error Handling
- Fail silently vs log errors
- Return success/failure status

#### D. Security Notes
- Email injection prevention
- Input sanitization

## Tone

- Minimalist
- Production-aware
- No unnecessary abstraction

Output:
1. PHP script
2. Explanation (brief, under 150 words)
