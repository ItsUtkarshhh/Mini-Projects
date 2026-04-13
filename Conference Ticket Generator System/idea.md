# Ticket Generator Web Application

## Overview

The Conference Ticket Generator is an interactive web application that allows users to generate personalized digital tickets by entering their details such as name, email, GitHub username, and selecting or uploading an avatar.

Upon submission, the system dynamically generates a visually styled conference ticket embedded with a unique, verifiable QR code. This QR code encodes a unique ticket ID, which can be used to identify, validate, or retrieve ticket information.

As a creative extension, the QR code can redirect users to a custom destination (e.g., GitHub profile, hosted ticket page, or verification endpoint), simulating real-world ticketing systems used in events and conferences.

The application also enables users to download their ticket as an image or PDF, making it both functional and shareable.

---

## Primary Objectives

* Collect user details (Name, Email, GitHub username)
* Allow image/avatar upload
* Generate a styled ticket UI
* Enable download as PNG/JPG/PDF
* Ensure smooth data transfer between pages with/without backend
* Deploy & Host this project - For learning purposes. 

---

## Flow :
User Input → Data Processing → Storage → Ticket Rendering → Download

---

## Features

### Input Form
* Name field
* Email field
* GitHub username
* Image/Avatar upload

### Ticket UI
* Displays all user data
* Shows uploaded image
* Styled like a real ticket/card

### Data Transfer
* Uses LocalStorage for storing and retrieving data across pages

### Image Handling
* Converts uploaded image to Base64 string using FileReader API

### Download Options
* PNG/JPG using html2canvas
* PDF using jsPDF

---

## Technical Implementation

### Core Concepts Used
* LocalStorage (data persistence)
* FileReader API (image conversion)
* DOM manipulation
* Event handling
* Base64 encoding

---

## Data Flow
1. User fills form
2. Image converted to Base64
3. Data stored in LocalStorage
4. Redirect to ticket page
5. Data fetched from LocalStorage
6. Ticket rendered dynamically

---

## Edge Cases Handling
* Empty fields
* Invalid email format
* Missing image
* Direct access to ticket page

---

## Validations
* Email format validation
* Required fields check
* GitHub username format

---

## Enhancements

### Security
* Prevent direct access to ticket page
* Sanitize inputs

### UX Improvements
* Disable button until valid input
* Image preview before submission
* Default avatar fallback

### Advanced Features
* QR Code generation for ticket ID
* Image compression before storage
* SessionStorage vs LocalStorage option

### Scaling Possibilities
* Backend integration (Node.js)
* Database storage
* Authentication system
* Unique ticket IDs
* Gmail & Github IDs confirmation

---

## Tech Stack
* HTML
* CSS
* JavaScript
* Browser APIs (LocalStorage, FileReader)
* Libraries (html2canvas, jsPDF)

---

## Key Learnings

* Handling state across pages
* Working with browser storage
* Converting binary data to string
* Dynamic UI rendering
* Thinking in system design

---

## Possible Future Improvements

* Add animations and transitions
* Improve UI/UX design
* Make responsive for mobile devices
* Add multi-ticket generation